import React, { Component } from 'react'


export class Newsitem extends Component {

 

  render() {
    let {title,description,imageUrl,newsUrl,publishedat,author} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://mms.businesswire.com/media/20220712005073/en/654576/23/LSVP_Horizontal_Logo-80.jpg":imageUrl} className="card-img-top" alt="..." style={{height:"157px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Published at { new Date(publishedat).toGMTString() } by {author?author:"unknown"}</small>
          </div>
          </div>
      </div>
    )
  }
}

export default Newsitem
