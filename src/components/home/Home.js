import React, { Component } from 'react';
import '../../App.css';
import Nav from './Nav'
import Questions from './Questions';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Questions/>
                <Footer/>
            </div>
        );
    }
}

export default Home;