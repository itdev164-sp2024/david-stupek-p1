import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact
    return (
        <Layout>
            <Seo title="Contact US" />
            <h1>Contact WebStupek</h1>
            <p>Please send all inquires to: </p>
            <div>{company}</div>
            <div>{`ATTN: ${name}`}</div>
            <div>{address}</div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <StaticImage
                    src="https://i.ibb.co/fNb13fr/Screenshot-2024-02-28-at-9-20-03-PM.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby Portfolio"
                    style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact 

export const query = graphql`
query siteMetadataContact
{
  site {
    siteMetadata {
      contact{
        name
        company
        address
      }
    }
  }
}
`
