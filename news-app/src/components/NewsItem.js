import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    var { title, description, imageURL, gotoURL, author, timeGen, source } =
      this.props;
    return (
      <div className="card" style={{ marginTop: "1rem" }}>
        <span
          class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: "1", left: "85%" }}
        >
          {source["name"]}
        </span>
        <img
          src={imageURL}
          className="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              On {new Date(timeGen).toGMTString()}
            </small>
          </p>
          <a
            href={gotoURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
