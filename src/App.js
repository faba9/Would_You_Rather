import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import React, { Component } from 'react';
import Sign from './components/Sign';
import Home from './components/home/Home';
import NewPoll from "./components/poll-section/NewPoll";
import LeaderBoard from "./components/leader-board/LeaderBoard";
import AnswerPoll from "./components/poll-section/AnswerPoll";
import Result from "./components/poll-section/Result";
import './App.css';
import {getUsers, getQuestions} from './store/actions/actionCreators';
import store from './store/index';
import {_getUsers, _getQuestions} from './_DATA';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    _getUsers().then(res =>{
      store.dispatch(getUsers(res))
    });
    _getQuestions().then(res => {
      store.dispatch(getQuestions(res))
    });
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Sign}></Route>
        {this.props.authUser == null
        ?<Redirect to="/" />
        :
        <div>
          <Route path="/home" component={Home}></Route>
          <Route path="/newpoll" component={NewPoll}></Route>
          <Route path="/leaderboard" component={LeaderBoard}></Route>
          <Route path="/answerpoll/:id" component={AnswerPoll}></Route>
          <Route path="/result/:id" component={Result}></Route>
        </div>}
      </Router>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
        authUser:state.authReducer
    }
}
export default connect(mapStateToProps)(App);