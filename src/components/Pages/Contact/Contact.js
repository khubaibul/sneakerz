import React from 'react';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import Loading from '../../Shared/Loading';

const Contact = () => {

    useDynamicTitle("Contact")

    return (
        <div>
            <Loading />
        </div>
    );
};

export default Contact;