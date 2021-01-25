import React, {Component} from 'react';
import Account from "../helpers/Account";
import {Redirect} from "react-router";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  componentDidMount() {
    const token = Account.getToken()
    if (!token) {
      this.setState({redirect: true})
    }
  }

  render() {
    const {redirect} = this.state;
    if (redirect) {
      return <Redirect to='/login'/>;
    }
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

export default Wrapper;