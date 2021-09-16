import QuestionCard from './QuestionCard';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Questions extends Component {
    render() {
        const questions = Object.values(this.props.questions);
        const Answered = [];
        const Unanswered = [];
        questions.forEach(question => {
            if (question.optionOne.votes.includes(this.props.authUser) || question.optionTwo.votes.includes(this.props.authUser)){
                Answered.push(question)
            } else {
                Unanswered.push(question)
            }
        });

        return (
            <div>
                <section className='container bg-light p-5 pb-0 d-flex border mt-5 flex-wrap flex-column' style={{maxWidth: 550}}>
                    
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Unanswered
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <ul className="list-group">
                                    {Unanswered.length>0?Unanswered.map(question => {
                                        return (
                                            <li className="list-group-item p-0 mb-3 rounded-item" key={question.id}><QuestionCard question={question}/></li>
                                        );
                                    }):<p className="text-center">No Unanswered Questions</p>
                                    }
                                </ul>
                            </div>
                            </div>
                        </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Answered
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul classname="list-group">
                                    {Answered.length>0?Answered.map(question => {
                                        return (
                                            <li className="list-group-item p-0 mb-3 rounded-item" key={question.id}><QuestionCard question={question}/></li>
                                        );
                                    }):<p className="text-center">No Answered Questions</p>
                                    }
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        questions:state.questionsReducer,
        authUser:state.authReducer
    }
}
export default connect(mapStateToProps)(Questions);