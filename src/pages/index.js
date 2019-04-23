import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/backgroundSection';
import Info from '../components/info';
import Menu from '../components/menu';
import Products from '../components/products';

import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular Joe's" styleClass="default-background" />
    <Info />
    <Menu items={data.menu} />
    <Products />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
