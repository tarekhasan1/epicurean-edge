import React from 'react';
import Header from '../Header/Header';
import Chefs from '../Chefs/Chefs';
import './Home.css'
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefs = useLoaderData();
    console.log('chefs data:', chefs);
    return (
        <div>
        <Header></Header>
            <div className='chef-card row m-0 p-2'>
            <h2 className='text-center my-3'>Our Food Crafters</h2>
            {
                chefs.map(chef => <Chefs chef={chef} key={chef.id}></Chefs>)
            }
            </div>
        </div>
    );
};

export default Home;