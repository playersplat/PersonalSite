import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// Empty IndexPage component with black background
const IndexPage = () => (
  <Layout>
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Minimal content or none */}
    </div>
  </Layout>
)

// Head export for page metadata
export const Head = () => <Seo title="Home" />

export default IndexPage
