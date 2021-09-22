import { Link, graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import resume from '../images/resume.jpg'

export default function Resume({data}) {
console.log(data)


  return (
  <Layout>
        <GatsbyImage image={getImage(data.file)} alt="Resume" />
  </Layout>
  )
}

export const query = graphql`
  query Resume {
    file(relativePath: { eq: "resume.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
  `