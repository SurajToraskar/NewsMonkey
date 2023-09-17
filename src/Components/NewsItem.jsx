import React, { Component } from 'react';


class Newsitem extends Component {
    render() {
        let { title, description,imageUrl,url,author,date,source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card">
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{source}</span>
                    <img src={(!imageUrl) ?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{!author?"unknown":author} on {new Date(date).toGMTString() }  </small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem;