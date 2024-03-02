---
id: "3"
path: "/KVS"
title: 'Distributed Key-Value Store'
description: 'A replicated, fault-tolerant, and causally consistent key-value store with HTTP requests methods: GET, POST, DELETE'
---
# Objective
Create a replicated, fault-tolerant, and causally consistent key-value store

 Should run as a collection of communicating instances (meaning key-value pairs are replicated to all instances)
 replicas communicate state changes whether a key/value gets added or removed among each other
 they should respect the causal order of events when updating their copy of the store and expose a causally consistent view of the store to clients
 replicas do not persist the key-value data if one of the replicas loses connnection or stops working (their local key/value would be lost)
 replicas provide causal metadata to clients in responses and clients send causal metadata to replicas in their requests (i.e. "causal-metadata" : X)

# Features:
## Mechanism Description

Our key-value store system enforces causal consistency by meticulously tracking causal dependencies. This is achieved through the exchange of causal metadata in requests and responses between clients and replicas. This section details the system's approach to manage causal dependencies.
### Causal Metadata Handling

 **Initial Interaction**: When a client first interacts with the key-value store, it sends a request with the `causal-metadata` field set to `null`. This indicates the beginning of its interaction with the store.
    
 **Metadata Propagation**: Each client request and corresponding response includes a `causal-metadata` field. Clients don't interpret the value of this field but persistently pass the latest received `causal-metadata` in their subsequent requests.
    
 **Vector Clocks**: Our system primarily utilizes vector clocks to maintain causal relationships. Each replica and client maintains its own vector clock. The vector clock is a critical component of the `causal-metadata`.
    
### Vector Clock Operations

 **Increment on Updates (Rule One)**: Every time a replica performs an update (PUT or DELETE operations), its entry in the vector clock is incremented. This increment reflects the occurrence of a new event (update) at that replica.
    
 **Merging Clocks (Rule Two)**: Upon receiving a request with `causal-metadata`, a replica merges its vector clock with the one received. It updates its clock entries to the maximum values between its own clock and the received clock. This process ensures the replica acknowledges the latest known states of other replicas.

 **Causality Check**: is_causal(meta_clock): Before processing read (GET) requests, the system checks if the requesting client's causal history (based on its `causal-metadata`) is consistent with the replica's state. If the replica's state is causally ahead, the request is deferred, ensuring read operations respect causal order.
### System Design Highlights

 **Replica Management**: check_replica_health():, The system dynamically manages replicas, adding or removing them based on their health status. This flexibility ensures robust performance and fault tolerance.
    
 **Data Synchronization**: sync(replica): Replicas periodically synchronize data and vector clocks with each other, ensuring that all replicas maintain a causally consistent state of the key-value store.
    
 **Broadcast Updates**: Updates from one replica are broadcasted to other replicas to maintain a globally consistent state. This includes both the updated key-value pairs and the updated vector clock. A similar approach is used for checking docker containers that are in the view using add_replica_from_view(replica) and remove_replica_from_view(replica):
    
 **Error Handling**: The system is designed to handle various errors gracefully, ensuring reliability and robustness in operations.
### Client-Replica Interaction

 **Client Request Format**: `{ ... "causal-metadata": <causal-metadata>, ... }`
 **Replica Response Format**: Includes updated `causal-metadata` post operation.

This design ensures that our key-value store operates in a causally consistent manner, respecting the causal relationships of operations across different replicas and clients.
## Key-Value Store APIs
### View Operations

### Put request at /view with JSON body {"socket-address":"<IP:PORT>"} 
This endpoint adds a new replica to the view.  
If the <IP:PORT> is not already part of the view, add it to the view.  
Response code is 201 (Created).  
Response body is JSON {"result": "added"}.  
 Example
```
$ curl --request PUT --header "Content-Type: application/json" --data  
	'{"socket-address":<NEW-REPLICA>}' http://<EXISTING-REPLICA>/view  
	{"result": "added"} 
``` 
If the <IP:PORT> is already part of the view, then be idempotent and do nothing.  
Response is 200 (Ok).  
Response body is JSON {"result": "already present"}.
	
###  Get request at /view  

This endpoint retrieves the view from a replica.  
Retrieve the current view unconditionally.  
Response code is 200 (Ok).  
Response body is JSON {"view": ["<IP:PORT>", "<IP:PORT>", ...]}.  
The response body is a JSON object with a key "view" to a list of strings identifying the  
replicas in the view by IP address and port number. For example, if the view contains the  
three replicas 10.10.0.2:8090, 10.10.0.3:8090, and 10.10.0.4:8090 then the response body is:   {"view": ["10.10.0.2:8090", "10.10.0.3:8090", "10.10.0.4:8090"]}
### Delete request at /view with JSON body {"socket-address":"<IP:PORT>"}
This endpoint removes an existing replica from the view.  
If the <IP:PORT> is already part of the view, then remove it.  
Response is 200 (Ok).  
Response body is JSON {"result": "deleted"}.  
If the <IP:PORT> is not already part of the view, then return an error.  
Response code is 404 (Not Found).  
Response body is JSON {"error": "View has no such replica"}.
### Key-Value Operations
### Put request at /kvs/key with JSON body
Request body is JSON {"value": value, "causal-metadata": V}.  
	V is null when the PUT does not depend on prior writes.  
 Response is one of:  
 201 (Created) {"result": "created", "causal-metadata": V}  
 200 (Ok) {"result": "replaced", "causal-metadata": V}  
 400 (Bad Request) {"error": "PUT request does not specify a value"}  
 400 (Bad Request) {"error": "Key is too long"}  
 503 (Service Unavailable) {"error": "Causal dependencies not satisfied; try again later"}

### Get request at /kvs/key with JSON body
Request body is JSON {"causal-metadata": V}.  
 The V is null when the client does not know of prior writes.  
 Response is one of:  
 200 (Ok) {"result": "found", "value": "value", "causal-metadata": V}  
	The V indicates a causal dependency on the PUT of key,value.  
 404 (Not Found) {"error": "Key does not exist"}  
 503 (Service Unavailable) {"error": "Causal dependencies not satisfied; try again later"}
### Delete request at /kvs/key with JSON body
Request body is JSON {"causal-metadata": V}.  
Response is one of:  
 200 (Ok) {"result": "deleted", "causal-metadata": V}  
	The V indicates a causal dependency on V and this DELETE.  
 404 (Not Found) {"error": "Key does not exist"}  
 503 (Service Unavailable) {"error": "Causal dependencies not satisfied; try again later"}
