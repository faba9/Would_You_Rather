import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import {logout} from '../../store/actions/actionCreators';
import store from '../../store/index';
import {connect} from 'react-redux';

function Nav(props) {
    const [show, setShow]=React.useState(false);
    const handleClick = () =>{
        store.dispatch(logout())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light flex-row-reverse nav-style p-0">
            <div className="d-flex flex-wrap">
                <p className="navbar-brand " style={{fontSize: '1rem', fontWeight:'bold'}} >{props.authUser}</p>
                <Link className="navbar-brand logout" style={{fontSize: '1rem'}} to="/" onClick={handleClick}>Logout<i className="fa fa-sign-out" /></Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  onClick={()=>setShow(!show)} style={{outline: 'none'}}>
            <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse nav-between" id="navbarNav" style={show?{display:"block"}:{display:'none'}} >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link font-weight-bold text-dark h6">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/newpoll" className="nav-link font-weight-bold text-dark h6">New Poll</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/leaderboard" className="nav-link font-weight-bold text-dark h6">Leader Board</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) =>{
    return {
        authUser:state.authReducer
    }
}
export default connect(mapStateToProps)(Nav);