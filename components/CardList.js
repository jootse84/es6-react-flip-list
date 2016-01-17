import React, { Component, PropTypes } from 'react'
import Card from './Card'

export default class CardList extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-xs-offset-3 col-xs-6 col-sm-offset-1 col-sm-10">
                    {this.props.cards.map(function (element, i) {
                        return (
                            <Card
                              key={'card' + i}
                              img={element.img} />
                        );
                    })}
                </div>
            </div>
        );
    }
}
