import React from 'react';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import Loading from '../../Shared/Loading';

const Men = () => {

    useDynamicTitle("Men")

    return (
        <div>
            <Loading />
        </div>
    );
};

export default Men;