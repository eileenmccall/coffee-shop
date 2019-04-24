import React from 'react';
import Image from 'gatsby-image';

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card" style={{ minHeight: '100%' }}>
        <Image fluid={product.image.fluid} className="card-image-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
