import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/backgroundSection';
import Info from '../components/info';

import { graphql } from 'gatsby';

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="About Us" styleClass="about-background" />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
