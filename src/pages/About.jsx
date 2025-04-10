import React from 'react';
import { Helmet } from 'react-helmet-async';


const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Learn more about us on this page." />
                <link rel="canonical" href="/about" />
            </Helmet>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>About Us</h1>
                <p> The Welcome to our application! We aim to provide the best services to our users.</p>
                <p>Our team is dedicated to delivering high-quality solutions tailored to your needs.</p>
            </div>
        </>
    );
};

export default About;