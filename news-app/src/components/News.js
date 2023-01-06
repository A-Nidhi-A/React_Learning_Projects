import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    console.log("hello from const");
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalSize: 0,
    };
    document.title = `${this.capitalizeFirstLetter(props.category)} - NewsOwl`;
  }

  // fetchData() {
  //   console.log("Our data is fetched");
  //   this.setState({
  //     articles: [
  //       {
  //         source: {
  //           id: "cnn",
  //           name: "CNN",
  //         },
  //         author: "Kristen Holmes",
  //         title:
  //           "Trump calls for the termination of the Constitution in Truth Social post - CNN",
  //         description:
  //           "Former President Donald Trump called for the termination of the Constitution to overturn the 2020 election and reinstate him to power Saturday in a continuation of his election denialism and pushing of fringe conspiracy theories.",
  //         url: "https://www.cnn.com/2022/12/03/politics/trump-constitution-truth-social/index.html",
  //         urlToImage:
  //           "https://media.cnn.com/api/v1/images/stellar/prod/221202111239-donald-trump-file-110722.jpg?c=16x9&q=w_800,c_fill",
  //         publishedAt: "2022-12-04T12:29:00Z",
  //         content:
  //           "Former President Donald Trump called for the termination of the Constitution to overturn the 2020 election and reinstate him to power Saturday in a continuation of his election denialism and pushing … [+2665 chars]",
  //       },
  //       {
  //         source: {
  //           id: "the-washington-post",
  //           name: "The Washington Post",
  //         },
  //         author: "Annabelle Timsit, Meryl Kornfield, Kendra Nichols",
  //         title: "Russia-Ukraine war latest updates - The Washington Post",
  //         description:
  //           "Russia and Ukraine criticized a planned Western price cap of $60 per barrel on Russian oil, with Moscow saying it goes too far and Kyiv saying it's not enough.",
  //         url: "https://www.washingtonpost.com/world/2022/12/04/russia-ukraine-war-latest-updates/",
  //         urlToImage:
  //           "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X26NXR7ST6D67BJBTDBAIUZ2EQ.jpg&w=1440",
  //         publishedAt: "2022-12-04T09:34:00Z",
  //         content:
  //           "The United States expects the reduced tempo in fighting in Ukraine to continue over the coming months, Director of National Intelligence Avril Haines said. Her assessment comes as the Washington-base… [+7118 chars]",
  //       },
  //     ],
  //     loading: true,
  //   });
  // }
  async UpdateFunc() {
    console.log("inside update");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a30fd4b57dbf4bb5a905d16e0df0ff0e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let parseData = await fetch(url);

    let Data = await parseData.json();
    this.setState({
      articles: Data.articles,
      loading: false,
      totalSize: Data.totalResults,
    });
  }

  handleNext = async () => {
    console.log("next clicked");
    await this.setState({
      page: this.state.page + 1,
    });
    this.UpdateFunc();

    // await this.setState({
    //   page: this.state.page + 1,
    // });
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a30fd4b57dbf4bb5a905d16e0df0ff0e&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // this.setState({ loading: true });
    // let parseData = await fetch(url);
    // let Data = await parseData.json();
    // this.setState({
    //   articles: Data.articles,

    //   loading: false,
    // });
  };

  handlePrevious = async () => {
    console.log("previous clicked");
    await this.setState({
      page: this.state.page - 1,
    });
    this.UpdateFunc();

    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=a30fd4b57dbf4bb5a905d16e0df0ff0e&page=${
    //     this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let parseData = await fetch(url);
    //   let Data = await parseData.json();
    //   this.setState({
    //     articles: Data.articles,
    //     loading: true,
    //     page: this.state.page - 1,
    //     loading: false,
    //   });
  };

  async componentDidMount() {
    console.log("in side componenet did mound");
    console.log(this.state);

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a30fd4b57dbf4bb5a905d16e0df0ff0e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let parseData = await fetch(url);

    let Data = await parseData.json();
    this.setState({
      articles: Data.articles,
      loading: false,
      totalSize: Data.totalResults,
    });
  }

  render() {
    console.log("Inside render");

    return (
      <div className="container my-5">
        <h2 className="my-4">
          <center>
            NewsOwl - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </center>
        </h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {/* <div>
            {this.state.articles
              ? this.state.articles.map((ele) => {
                  return ele.title;
                })
              : "there ois some error"}
          </div> */}
          {/* {this.state.articles.map((ele) => {
            <NewsItem
              title={ele.title}
              description={ele.description}
              imageURL={ele.urlToImage}
              goToURL={ele.url}
            />;
          })} */}

          {this.state.articles
            ? this.state.articles.map((ele) => {
                return (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={ele.url}>
                    <NewsItem
                      title={ele.title}
                      description={
                        ele.description
                          ? ele.description.length > 100
                            ? ele.description.slice(0, 100) + "..."
                            : ele.description.slice(0, 100)
                          : "No Description..."
                      }
                      imageURL={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                      }
                      gotoURL={ele.url}
                      author={ele.author}
                      timeGen={ele.publishedAt}
                      source={ele.source}
                    />
                  </div>
                );
              })
            : console.log("No News Updates")}
        </div>
        <div className="row my-3">
          <div className="col-auto me-auto">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-sm btn-dark"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
          </div>
          <div className="col-auto">
            <button
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalSize / this.props.pageSize)
              }
              type="button"
              className="btn btn-sm btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
