import React, {useState} from 'react';
import {connect} from "react-redux";


function Home() {
  let [orders, setOrders] = useState({});

  return (
    <>
      <h1>Vivaldi Brabion</h1>
    </>
  );
}


const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;
