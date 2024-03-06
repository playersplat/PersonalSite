import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };
  const projects = data.allMarkdownRemark.edges.map(edge => ({
    ...edge.node.frontmatter,
    id: edge.node.id
  }));
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="portfolio"
    >
      <h2>My Portfolio</h2>
      <div className="projectsGrid">
        {projects.map((project) => (
          <div key={project.id} className="projectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={project.path} rel="noopener noreferrer">View Project</Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
