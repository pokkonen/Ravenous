import React from 'react';
import './Business.css';

class Business extends React.Component {
  constructor(props) {
    super(props)

    this.openMaps = this.openMaps.bind(this);
    this.openCompanyURL = this.openCompanyURL.bind(this);
  }

  openMaps() {
    window.open(`https://www.google.fi/maps/search/${this.props.business.address} ${this.props.business.city}`)
  }

  openCompanyURL() {
    window.open(this.props.business.url);
  }

  render() {
    return(
        <div className="Business">
          <div className="image-container">
            <img onClick={this.openCompanyURL}src={this.props.business.imageSrc} alt=''/>
          </div>
          <h2>{this.props.business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <a href=' ' onClick={this.openMaps}>{this.props.business.address}</a>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.state} {this.props.business.zipCode}</p>
            </div>
            <div className="Business-reviews">
              <h3>{this.props.business.category}</h3>
              <h3 className="rating">{this.props.business.rating} stars</h3>
              <p>{this.props.business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Business;
