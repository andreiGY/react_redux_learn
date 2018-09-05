import React, { Component } from 'react';
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Page} from '../components/Page';
import {setYear} from '../actions/PageActions';
//import logo from '../logo.svg';
//import './App.css';
import '../index.css'


class App extends Component {
  render() {
    const {user, page, setYearAction} = this.props;

    return (
      <div className="app">
        <header className="App-header">
          <h1 className="my_header">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
      </div>
    );
  }
}
//           <img src={logo} className="App-logo" alt="logo" /> 

const mapStateToProps = store => {
  //console.log(store);
  return {
    user: store.user,
    page: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year), [1])
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (App);
