import React from 'react';
import { Link, Outlet} from 'react-router-dom';

// import AboutUsHistory from './AboutUsHistory';

const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We have the capabilities and experience to deliver the products you need to move forward.</p>
      <div className="row">
        <div className='col-md-4'>
            <div className='card'>
                <h5 className='card-title'>History</h5>
                <p className='card-text'> Discover company history
                </p>
                <Link to="/about-us/history" className="btn btn-primary">Learn More</Link>
            </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AboutUs;
