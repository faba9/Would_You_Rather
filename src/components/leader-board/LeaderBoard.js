import React, { Component } from 'react';
import '../../App.css';
import Nav from '../home/Nav';
import LeaderCard from './LeaderCard';
import Footer from '../home/Footer';
import {connect} from 'react-redux';

class LeaderBoard extends Component {
    score = (user) => {
        return user.questions.length + Object.values(user.answers).length
    }
    render() {
        const users = Object.values(this.props.users);
        const sortedUsers = users.sort((a, b) => this.score(b) - this.score(a));
        return (
            <div>
                <Nav/>
                <div className="container bg-light p-5 d-flex border mt-5 flex-wrap flex-column" style={{maxWidth:550}}>
                    <ul className="list-group">
                        {sortedUsers.map(user => {

                            return (
                                <li className="list-group-item p-0 mb-3 rounded-item" key={user.id}>
                                    <LeaderCard questions={user.questions.length} answers={Object.values(user.answers).length} score={user.questions.length+Object.values(user.answers).length} user={user}/>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        users:state.usersReducer
    }
}
export default connect(mapStateToProps)(LeaderBoard);