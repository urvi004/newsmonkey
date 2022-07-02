
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left: '80%', zIndex:'1'}}>{source}</span>
          <img src={!imgUrl?"https://static.toiimg.com/thumb/msid-92591751,width-1070,height-580,imgsize-27896,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imgUrl} 
               className="card-img-top"
               alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small classname="text-muted">By-{!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem