import React, {Component} from 'react';
import Account from "../helpers/Account";
import {Redirect} from "react-router";
import memoizeOne from "memoize-one";

class WrapperWithoutToken extends Component {
  checkToken = memoizeOne(() => {
    const token = Account.getToken()
    if (token) {
      this.setState({redirect: true})
    }
  })

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  componentDidMount() {
    const token = Account.getToken()
    if (token) {
      this.setState({redirect: true})
    }
  }

  render() {
    this.checkToken()
    const {redirect} = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

export default WrapperWithoutToken;