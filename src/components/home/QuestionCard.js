import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class QuestionCard extends Component {
    render() {
        const question = this.props.question;
        const users = Object.values(this.props.users);
        const imageLink = users.filter(user => user.id === question.author)
        return (
            <div>
                {this.props.question?
                    <div className="d-flex flex-column">
                        <header className="h6  p-2 head-style border-bottom">
                            <h6>{question.author} asks:</h6>
                        </header>
                        <div className="body row align-items-center p-3 justify-content-around flex-wrap text-center">
                            <img src={imageLink[0].avatarURL} style={{width: 100}} alt={""} className="col-3"/>
                            <div className="question col-8">
                                <h6 className="h6">Would you rather</h6>
                                <p className="mt-1">{question.optionOne.text} or...</p>
                                <Link to={{pathname: `/answerpoll/${question.id}`, state:question}} className="btn btn-success">Answer Poll</Link>
                            </div>
                        </div>
                    </div>
                :null}
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        users:state.usersReducer
    }
}
export default connect(mapStateToProps)(QuestionCard);