import React, { Component } from 'react';
import Image from 'gatsby-image';

export default class menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: this.getCategories(props.items.edges)
    };

    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  getCategories(items) {
    const categories = items.map((item) => item.node.category);
    const categoryArr = Array.from(new Set(categories));
    return [ 'all', ...categoryArr ];
  }

  onCategoryChange(category) {
    this.setState({
      coffeeItems:
        category === 'all' ? this.state.items : this.state.items.filter((item) => item.node.category === category)
    });
    return;
  }

  render() {
    return (
      <section className="menu">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-3">
              <h1 className="display-4 text-capitalize font-weight-bold">Menu</h1>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-0 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => this.onCategoryChange(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {this.state.items.length > 0 ? (
            <div className="row mb-5">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                    <div>
                      <Image fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
