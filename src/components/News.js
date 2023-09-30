import React, { Component } from 'react'
import Newscomp from './Newscomp'
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize: 6,
    category:'general'
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  capitalizeFirstLetter= (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super();
    console.log("hello");
    this.state = {
      articles: [],
      page: 1,
      pageSize:this.pageSize
    }
    // document.title = `MetroBulletin-${this.capitalizeFirstLetter(this.props.category)}`;938ab22941474281a91cc7d4f4168bce
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults })
  }
  handleNextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {//so if zero results that is total results will be less than one nothing will happen
    } else {
      this.setState({
        page: this.state.page + 1
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles })
    }
  }
  handlePreviousPage = async () => {
    this.setState({
      page: this.state.page - 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })
  }

  render() {
    return (
      <div className='container my-3' style={{margin:'40px 0px;'}}>
        <h1>Metro Bulletin-
        <small class="text-muted">Top Headlines</small>
        </h1>
        <div className='row my-6  '>
          {this.state.articles.map((element) => {
            // console.log(element);
            return <div className='col col-sm-4' key={element.url}>
              <Newscomp title={element.title ? element.title.slice(0, 85) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt}/>
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-light btn-outline-dark">&larr;Previous</button>
          <button type="button" onClick={this.handleNextPage} className="btn btn-light btn-outline-dark " >Next &rarr;</button>
        </div>
      </div>
    )
  }
}
