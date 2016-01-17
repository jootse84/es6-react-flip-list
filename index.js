import React, { Component, PropTypes } from 'react'
import CardList from './components/CardList'
import 'babel-core/polyfill'
import { render } from 'react-dom'
import './bower_components/bootstrap/less/bootstrap.less'

var list = [{
    "img": "./images/travel1.jpg"
  },{
    "img": "./images/travel2.jpg"
  },{
    "img": "./images/travel3.jpg"
  },{
    "img": "./images/travel4.png"
  },{
    "img": "./images/travel5.jpg"
  }];

class List extends Component {
    _dummy(params) {
        console.log('dummy')
    }

    render() {
        return (
            <CardList
                cards={list}
              />
        )
    }
}

render(
  <List></List>,
  document.getElementById('root')
)
