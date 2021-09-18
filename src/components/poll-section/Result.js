import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Nav from '../home/Nav';
import '../../App.css';

class Result extends Component {
    render() {
        const users = Object.values(this.props.users);
        const question = this.props.location.state;
        const imageLink = users.filter(user => user.id === question.author)
        const votes = question.optionOne.votes.length + question.optionTwo.votes.length

        const percentage = (number) => {
            return number / votes *100;
        }

        return (
            <div>
                <Nav />
                <div className="container" style={{maxWidth: 500}}>
                    <div className="d-flex flex-column border">
                        <header className="h6  p-2 head-style border-bottom">
                            <h6>{question.author} asks:</h6>
                        </header>
                        <div className="row align-items-start p-3 justify-content-around flex-wrap text-center">
                            <img src={imageLink[0].avatarURL} style={{width: 100}} alt={""} className="col-3"/>
                            <div className="col-8 p-0 ">
                                <p className="h5">Results</p>
                                <p className="h6 mt-1">Would you rather</p>
                                
                                <div className="border-bottom question-res p-2 head-style text-center mt-4">
                                    <p className="mb-1">{question.optionOne.text}</p>
                                    <p className="mb-1">{question.optionOne.votes.length} out of votes {votes}</p>
                                    <meter className="style-meter mb-1" max="100" value={question.optionOne.votes.length>0 ?percentage(question.optionOne.votes.length):"0"}></meter>
                                </div>

                                <div className="border-bottom question-res p-2 head-style text-center mt-4">
                                    <p className="mb-1">{question.optionTwo.text}</p>
                                    <p className="mb-1">{question.optionTwo.votes.length} out of votes {votes}</p>
                                    <meter className="style-meter mb-1" max="100" value={question.optionTwo.votes.length>0 ?percentage(question.optionTwo.votes.length):"0"}></meter>
                                </div>

                                <Link to='/home' className="mt-3 btn btn-secondary">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        users:state.usersReducer
    }
}
export default connect(mapStateToProps)(Result);