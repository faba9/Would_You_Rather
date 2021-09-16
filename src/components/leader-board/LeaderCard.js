import userEvent from '@testing-library/user-event';
import React, { Component, Fragment } from 'react';
import '../../App.css';
class LeaderCard extends Component {
    render() {
        const res = this.props.answers +this.props.questions;
        console.log(res)
        return (
            <Fragment>
                <div className="d-flex flex-column">
                    <header className="h6 text-center p-2 head-style border-bottom">
                        <h6>{this.props.user.name}</h6>
                    </header>
                    <div className="body d-flex flex-row align-items-center justify-content-around p-2 flex-wrap">
                        <img src={this.props.user.avatarURL} style={{width: 100}} alt={""} />
                        <div className="question">
                            <p className="mt-1">Answered questions <span className="p-3 pt-0 pb-0"> {this.props.answers}</span></p>
                            <p className="mt-1">Created questions <span className="p-3 pt-0 pb-0"> {this.props.questions}</span></p>
                        </div>
                        <div className="score border text-center rounded  p-3 pt-2 pb-2">
                            <p>Score</p>
                            <p className="rounded-circle p-1 text-white bg-success">{this.props.score}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LeaderCard;