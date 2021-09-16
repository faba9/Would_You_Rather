import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {login} from '../store/actions/actionCreators';
import store from '../store/index';
import {Link} from "react-router-dom";

class Sign extends Component {
    state = {
        selected : '',
        disabled:true
    }
    handleChange = (e) => {
        this.setState({selected:e.target.value, disabled:false})
    }
    handleClick = () =>{
        store.dispatch(login(this.state.selected))
    }
    render() {
        const users = Object.values(this.props.users);
        return (
            <div className="container-fluid ">
                <div className="container d-flex justify-content-center text-center align-items-center flex-wrap container-style border" style={{maxWidth: 500, padding: 0}}>
                    <div className="bg-light border-bottom w-100">
                        <h6 className="pt-2 mb-0 ">Welcome to the Would You Rather App!</h6>
                        <p>Please sign in to continue</p>
                    </div>
                    <div className="p-2 w-100">
                        <img src="/images/avatars/animals.png" style={{width: 270}} alt={""} />
                    </div>

                    <div className="p-4 w-100">
                        <h5 className="text-success">Sign In</h5>
                        <select id="check" className="form-select" onChange={this.handleChange} value={this.state.selected}>
                            <option value="" disabled={'disabled'}  >Select a Friend</option>
                            {users.map(user => {
                                return (
                                    <option value={user.id} key={user.id}>{user.name}</option>
                                );
                            })}
                        </select>
                        {this.state.disabled
                        ?<button id="btncheck" className="btn btn-success w-100 mt-3" type="button" disabled={this.state.disabled}>Login</button>
                        :<Link className="btn btn-success w-100 mt-3" onClick={this.handleClick} to="/home">Login</Link>
                        }
                    
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        users:state.usersReducer,
        authUser:state.authReducer
    }
}
export default connect(mapStateToProps)(Sign);