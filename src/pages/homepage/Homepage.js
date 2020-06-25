import React from 'react';
import Directory from '../../components/directory/Directory';
// import './homepage.scss';
import { HomepageContainer } from './homepage.style';

const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
