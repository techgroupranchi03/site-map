import React from 'react';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <> 
            {/* Helmet for managing document head */}
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Welcome to the Home Page" />
                <link rel="canonical" href="/" />
            </Helmet>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Welcome to the Home Page</h1>
                <p>This is the basic home page of your application.</p>
                <button onClick={() => alert('Button clicked!')}>Click Me</button>
            </div>
        </>
    );
};

export default Home;