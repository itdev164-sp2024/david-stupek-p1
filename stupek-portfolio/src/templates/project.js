import React from 'react'
import { graphql } from 'gatsby'
import Layout  from '../components/layout'

const Project = ({ data }) => {
    const { title } = data.contentfulProject;

    return (
        <Layout>
            <h1>{ title }</h1>
        </Layout>
    )
}

export default Project;

export const pageQuery = graphql`
query ProjectQuery($slug: String!){
    contentfulProject(slug: {eq: $slug}) {
        title
        slug
    }
}
`