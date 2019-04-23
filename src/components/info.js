import React from 'react';
import { Link } from 'gatsby';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div className="row">
              <div className="col text-center mb-3">
                <h1 className="display-4 text-capitalize font-weight-bold">Our Story</h1>
              </div>
            </div>
            <p className="lead text-muted mb-5">
              Sit down beside me to love someone or thing for real (amen) no no body's warmer to the touch than hers but
              you'll never. For so many years man has suffered the plague of isolation the leading lights of the age all
              wondered amongst themselves what i would do next guess i need a little love from every little square of my
              sweet little patchwork girlfriend. Down along the dixie line taking a break is dragging out a breakup too
              long down along the dixie line.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">About Page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
