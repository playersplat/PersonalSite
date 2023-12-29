import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Brian Bui</h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="B" defaultTitle={false}/>

export default IndexPage
