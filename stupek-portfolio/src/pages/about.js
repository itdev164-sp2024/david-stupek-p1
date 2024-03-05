import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact
    return (
        <Layout>
            <Seo title="About Webstupek" />
            <h1>Friendly neighborhood web developer</h1>
            <p>{`${company} was started by ${name} in 2024.`}</p>
            <p>{`At ${company} all we do is dev.`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                src="https://i.ibb.co/6nkc0N1/aiLogo.jpg"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alat="David Stupek Portfolio"
                style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
            </Layout>
    )
}

export default About
export const query = graphql`
query siteMetadataContact
{
  site {
    siteMetadata {
      contact{
        name,
        company,
        address
      }
    }
  }
}
`