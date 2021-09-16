import React, { Component } from 'react';
import Nav from '../home/Nav';
import '../../App.css';
import {_saveQuestionAnswer} from '../../_DATA';
import {connect} from 'react-redux';
import {getUsers, getQuestions} from '../../store/actions/actionCreators';
import store from '../../store/index';

class AnswerPoll extends Component {
    state = {
        checked:'',
        disabled:true
    }
    handleChange = async (e) => {
        await this.setState({checked:e.target.value})
        this.setState({disabled:false})
    }
    handleSubmit = async () => {
        let newQuestionAnswer = {
            authedUser: this.props.authUser,
            qid: this.props.location.state.id,
            answer: this.state.checked
        }
        this.setState({disabled:true}) // when you use setState, automaticly re-render component
        await _saveQuestionAnswer(newQuestionAnswer).then(res  =>{
            store.dispatch(getQuestions(res.questions))
            store.dispatch(getUsers(res.users))
        })
    }

    render() {
        const question = this.props.location.state;
        return (
            <div>
            <Nav />
                <div className="container" style={{maxWidth: 550}}>
                    <div className="d-flex flex-column border">
                        <header className="h6 text-left p-2 head-style border-bottom">
                            <h6>{question.author} asks:</h6>
                        </header>
                        <div className="body d-flex flex-row align-items-end p-3 justify-content-around">
                            <img src="/images/avatars/cat.png" style={{width: 100}} alt={""}/>
                            <div className="question">
                                <h6 className="h6">Would you rather</h6>
                                <form onChange={this.handleChange} value={this.state.checked}
                                //  disabled={this.state.disabled}
                                 >
                                    <div className="mt-2 mb-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='optionOne'/>
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                            {question.optionOne.text}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="optionTwo" />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                            {question.optionTwo.text}
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" disabled={this.state.disabled}onClick={this.handleSubmit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>`
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        authUser:state.authReducer,
        questions:state.questionsReducer,
        users:state.usersReducer
    }
}
export default connect(mapStateToProps)(AnswerPoll);