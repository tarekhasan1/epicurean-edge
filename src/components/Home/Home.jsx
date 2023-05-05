import React from 'react';
import Header from '../Header/Header';
import Chefs from '../Chefs/Chefs';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import CustomerTestimonials from '../CustomerTestimonials/CustomerTestimonials';
import PreBookSection from '../PreBookSection/PreBookSection';
import Banner from '../Banner/Banner';

const Home = () => {

    const chefs = useLoaderData();
    console.log('chefs data:', chefs);
    return (
        <div>
        <Banner></Banner>
            <div className='container  mx-auto chef-card row m-0 p-2'>
            <div className="row justify-content-center">
            <div className="col-md-8 text-center my-4">
              <h1 className='heading-color'>Thailand's Best Food Crafters</h1>
              <p className='mb-5 pb-3 text-center'>Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.</p>
            </div>
          </div>
            {
                chefs.map(chef => <Chefs chef={chef} key={chef.id}></Chefs>)
            }
            </div>
            <div className='container-fluid my-5 testimonials-container'>
            <div className="row justify-content-center">
            <div className="col-md-8 text-center my-4">
              <h1 className='heading-color'>What Our Customers Say About Us</h1>
            </div>
          </div>
            <CustomerTestimonials></CustomerTestimonials>
            </div>
            <div>
            <PreBookSection></PreBookSection>
            </div>
        </div>
    );
};

export default Home;