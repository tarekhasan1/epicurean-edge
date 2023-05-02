import React from 'react';
import Header from '../Header/Header';
import Chefs from '../Chefs/Chefs';
import './Home.css'

const Home = () => {
    return (
        <div>
        <Header></Header>
            <div className='chef-card row m-0'>
            <h2 className='text-center my-3'>Our Food Crafters</h2>
            <Chefs></Chefs>
            <Chefs></Chefs>
            <Chefs></Chefs>
            <Chefs></Chefs>
            <Chefs></Chefs>
            <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;