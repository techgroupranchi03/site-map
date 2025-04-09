import React from 'react';
import { Helmet } from 'react-helmet-async';


const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer</title>
        <meta name="description" content="Disclaimer for the website." />
        <link rel="canonical" href="/disclaimer" />
      </Helmet>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Disclaimer</h1>
        <p>
          The information provided on this website is for general informational purposes only.
          All content is provided in good faith; however, we make no representation or warranty
          of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any information on the site.
        </p>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind
          incurred as a result of the use of the site or reliance on any information provided on the site.
          Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>
      </div>
    </>
  );
};

export default Disclaimer;