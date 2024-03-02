---
id: "1"
path: "/Detection"
title: 'Covid Proximity Detection'
description: 'Visual recognition application to detect close contact between a variety of people in a given area'
---
# Overview
OpenCV (also known as Open Computer Vision Library) is a real-time computer vision to allow tracking, recognition, and motion from video. It's extensively used for machine learning applications and the project detailed below are two different algorithms for tracking motion between various objects.
# Objective
Detect whether people have come into close contact with one another through the use of a stabilized video feed.

## Method 1 - Motion Differencing
A type of image processing approach to detect motion within different adjacent video frames. As such a way to detect if anything moves can be classified as "Moving" and still objects in the video can be disregarded. Some fine-tune adjustment will be needed to deal with the sensitivity and speed in which people move and how many frames a video camera can capture within a second. 

## Method 2: Cascade Classifier
A pipeline method using multiple positive images and an arbitrary negative concerted together. Detection algorithm is based on the Viola-Jones object detection framework to deal with moving objects.

### Features
