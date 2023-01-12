import React from 'react';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import Loading from '../../Shared/Loading';

const About = () => {

    useDynamicTitle("About Us")

    return (
        <div>
            <Loading />
        </div>
    );
};

export default About;