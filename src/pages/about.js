import { Link, graphql } from "gatsby"
import React from 'react'
import Layout from '../components/Layout'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as styles from '../styles/home.module.css'
import self from '../images/thumbs/self.jpg'

export default function About({data}) {
    return (
        <Layout>
        <div>
            <h1>About Me</h1>



            <p>Hello! My name is Stephen and I am a data engineer who's goal it is to help make decisions that have positive and lasting impacts on people's lives</p>
            <p>I enjoy spending my free time traveling, scuba diving, and surfing. If you can't find me traveling the world or in the ocean you will find me with friends and family or reading a book </p>
            <p>A versatile individual with experience collecting, transforming, and organizing data for analysis to help make informed decisions. Excellent understanding and proficiency of platforms for effective data analyses, including SQL, spreadsheets, Tableau, and R. Strong communication, organizational, and analytical skills. Recently completed the Google Data Analytics Certificate- a rigorous, hands-on program that covers the entire scope of the data analysis process.</p>
                <div>
                <GatsbyImage image={getImage(data.file)} alt="self" />
                </div>

        </div>
        </Layout>
    )
}

export const query = graphql`
  query self {
    file(relativePath: { eq: "self.jpg" }) {
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