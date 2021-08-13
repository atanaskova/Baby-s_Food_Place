import React from 'react';
import '../../styles/Dashboard.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => {
    return(
        <div>
            <Header />
            <div>
                <Dashboard />
            </div>
            <Footer />
        </div>
    )
}

export default Main; 