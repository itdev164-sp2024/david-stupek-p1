import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {
        data.allContentfulProject.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/project/${edge.node.slug}/`}>{edge.node.title}</Link>
            <div>
              <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
           
          </li>
        ))
      }
    </ul>
  </Layout>
)


/**  <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
      {
        allContentfulProject {
          edges {
            node {
              id
              title
              slug
              description
              heroImage {
                gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR, width: 300)
              }
            }
          }
        }
      }
`
