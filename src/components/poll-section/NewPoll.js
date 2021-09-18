import React, { Component } from "react";
import "../../App.css";
import Nav from "../home/Nav";
import { _saveQuestion } from "../../_DATA";
import { connect } from "react-redux";
import store from "../../store";
import { getQuestions, getUsers } from "../../store/actions/actionCreators";
import {Link} from "react-router-dom";

class NewPoll extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value});
  };
  
  handleSubmit = async () => {
    if (this.state.optionOne.length > 0 && this.state.optionTwo.length > 0) {
      let newQuestion = {
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
        author: this.props.authUser,
      };
      await _saveQuestion(newQuestion).then((res) => {
        store.dispatch(getQuestions(res.questions));
        store.dispatch(getUsers(res.users))
      });
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <div
          className="container bg-light p-4 pb-0 border mt-5 "
          style={{ maxWidth: 550 }}
        >
          <header>
            <p className="h5 poll-head">Create a New Poll</p>
          </header>

          <p>Complete the question:</p>
          <p className="h6">Would you rather...</p>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="optionOne"
                placeholder="Enter Option One"
                value={this.state.optionOne}
                onChange={this.handleChange}
              />
            </div>
            <p className="text-center h6 mt-1 mb-1">Or</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="optionTwo"
                placeholder="Enter Option Two"
                value={this.state.optionTwo}
                onChange={this.handleChange}
              />
            </div>
            {this.state.optionOne.length > 0 && this.state.optionTwo.length > 0?
              <Link
              type="submit"
              className="btn btn-success w-100 mt-3 mb-3"
              onClick={this.handleSubmit}
              disabled={this.state.optionOne.length > 0 && this.state.optionTwo.length > 0? false:true}
              to="/home"
            >
              Submit
            </Link>
            :
            <button
              type="submit"
              className="btn btn-success w-100 mt-3 mb-3"
              disabled={'disabled'}
            >
              Submit
            </button>
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authUser: state.authReducer,
    questions: state.questionsReducer,
  };
};
export default connect(mapStateToProps)(NewPoll);
