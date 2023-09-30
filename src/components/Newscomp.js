import React, { Component } from 'react'


export default class Newscomp extends Component {
    
  render() {
    let{title,description,imageUrl,newsUrl,author,time} = this.props;
    return (
      <div className='my-3'>
        <div className="card border-dark" style={{width: "18rem;"}}>
        <img src={imageUrl? imageUrl : "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A="} className="card-img-top" alt="..."/>
          <div className="card-body ">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small className="text-body-secondary">Last Updated {new Date(time).toGMTString()} by {author?author:"Unknown"} </small></p>
            <a href={newsUrl} target="_blank"className="btn btn-sm active"  aria-pressed="true">Read More...</a>
          </div>
        </div>
      </div>
    )
  }
}
