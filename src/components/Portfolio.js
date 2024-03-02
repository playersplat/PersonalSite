import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___path], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              path
            }
          }
        }
      }
    }
  `);
  const projects = data.allMarkdownRemark.edges.map(edge => ({
    ...edge.node.frontmatter,
    id: edge.node.id
  }));
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projectsGrid">
        {projects.map((project) => (
          <div key={project.id} className="projectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={`/PersonalSite${project.path}`} rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
