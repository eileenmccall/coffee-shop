import React from 'react';
import Product from './product';
import { StaticQuery, graphql } from 'gatsby';

export default function Products() {
  return (
    <StaticQuery
      query={graphql`
        {
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
      `}
      render={(data) => {
        return (
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col text-center mb-3">
                  <h1 className="display-4 text-capitalize font-weight-bold">Products</h1>
                </div>
              </div>

              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
