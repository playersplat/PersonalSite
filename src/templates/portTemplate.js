import React from 'react';
import { graphql} from 'gatsby';
import Header from '../components/header'; // Adjust the import path as necessary
import '../components/layout.css';
import { motion } from 'framer-motion';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };
  return (
    <div>
      <Header siteTitle={"Homepage"} />
      <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="portfolio-container"
    >
        <div className="portfolio">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </motion.div>
    </div>
  );
}
export const pageQuery = graphql`
  query PortfolioByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
