import React, { Component, PropTypes } from 'react'
import '../styles/Card.less'

export default class Card extends Component {
    render () {
        return (
            <div className="col-sm-4 flip-card">
                <a
                  href="#portfolioModal4"
                  className="flip-card-link"
                  data-toggle="modal">
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"/>
                        </div>
                    </div>
                    <img
                      src={this.props.img}
                      className="front"
                      alt="" />
                    <img
                      src={this.props.img}
                      className="back"
                      alt="" />
                </a>
            </div>
        );
    }
}
