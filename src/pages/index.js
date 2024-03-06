import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ContentBox from "../components/ContentBox"; // Import the new component
import Portfolio from '../components/Portfolio'; 
import { motion } from 'framer-motion';
const IndexPage = () => {
  // State to control the animation
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if the animation has already been played
    const hasAnimatedIndex = window.localStorage.getItem('hasAnimatedIndex');
    
    if (!hasAnimatedIndex) {
      // If not, animate the index content and set the flag in local storage
      setShouldAnimate(true);
      window.localStorage.setItem('hasAnimatedIndex', 'true');
    }
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 } // Adjust the duration as needed
    }
  };

  return (
    <Layout>
      <Seo title="B" defaultTitle={false}/>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`${styles.textCenter} ${shouldAnimate ? "content-slide-in" : ""}`}
        >       
         <h1>Brian Bui</h1>
        <ContentBox />
        <Portfolio />
        </motion.div>
            </Layout>
  )
}

export default IndexPage
