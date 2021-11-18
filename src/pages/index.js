import { Link, graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import {GatsbyImage, getImage} from "gatsby-plugin-image"

export default function Home({data}) {
console.log(data)


  return (
  <Layout>
      <section className={styles.header}>
        <div className= {styles.hero}>
            <h3>Hi, my name is </h3>
            <h1>Stephen Broadus</h1>
            <h2>I work with data</h2>
            <p>I am a data engineer specializing in building models to analize information.</p>
            <Link className = {styles.btn} to="/projects">My Portfolio Projects</Link>

        </div>

        <div>
            <img className= {styles.photoSelf} src="/self.jpg" alt="site banner" style={{ maxWidth: '50%'}}/>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>Data Scientist & Developer </p>



        </div>
        <GatsbyImage image={getImage(data.file)} alt="Banner" />
      </section>
  </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.jpg" }) {
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




