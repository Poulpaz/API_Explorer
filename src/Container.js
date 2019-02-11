import React, { Component } from 'react';
import { PageList } from './PageList';
import { ItemDetails } from './ItemDetails';
import { Switch, Route } from "react-router-dom";

class Container extends Component {

  render() {
    return (
          <Switch>
            <Route exact path="/" component={PageList} />
            <Route path="/details/:idCard" component={ItemDetails} />
          </Switch>
    )
  }
}

export default Container;
