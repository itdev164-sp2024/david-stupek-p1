import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const Project = ({ data }) => {
    const project = data.contentfulProject; // Accessing data directly for a single project

    return (
        <Layout>
            <div key={project.id}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                {project.demoVideo && project.demoVideo.file && project.demoVideo.file.url ? (
                    <video controls>
                        <source src={project.demoVideo.file.url} type={project.demoVideo.file.contentType} />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p>No demo video available</p>
                )}
                <Link to={project.githubUrl}>Check it out on GitHub!</Link>
                <p>Created at: {project.createdAt}</p>
            </div>
        </Layout>
    )
}

export default Project;

export const pageQuery = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      title
      description
      demoVideo {
        file {
          url
          contentType
        }
      }
      createdAt
      githubUrl
    }
  }
`
