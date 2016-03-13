import React, { Component, PropTypes } from "react";

function numberWithCommas (num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default class Organization extends Component {
  static propTypes = {
    id: PropTypes.string,
    key: PropTypes.string,
    imageUrl: PropTypes.string,
    displayName: PropTypes.string,
    followers: PropTypes.number,
    children: PropTypes.array
  };

  constructor (props) {
    super(props);
  }

  render () {

    const {
      displayName,
      imageUrl,
      followers,
    } = this.props;

    const org =
      <div className="row">
        <div className="organization well well-skinny well-bg--light split-top-skinny clearfix">
          <div className="hidden-xs col-sm-2">
            <img src={imageUrl} alt={displayName + ".jpg"} />
          </div>
          <div className="col-xs-6 col-sm-6 display-name">
            {displayName}
          </div>
          <div className="col-xs-6 col-sm-4 utils-paddingright0"
                style={ {textAlign: "right"} }>
              {this.props.children}
          </div>
          <div className="hidden-xs social-box">
              {numberWithCommas(followers)}
          </div>
        </div>
      </div>;

    return org;
  }

}
