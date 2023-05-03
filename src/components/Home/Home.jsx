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
            <h2 className='text-center my-4 pt-4'>Thailand's Best Food Crafters</h2>
            <p className='mb-5 pb-3 text-center'>Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.</p>
            {
                chefs.map(chef => <Chefs chef={chef} key={chef.id}></Chefs>)
            }
            </div>
        </div>
    );
};

export default Home;