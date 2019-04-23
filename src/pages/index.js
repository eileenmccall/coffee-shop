import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from '../components/backgroundSection';
import Info from '../components/info';

import { graphql } from 'gatsby';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular Joe's" styleClass="default-background"/>
    <Info/>
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

export default IndexPage
