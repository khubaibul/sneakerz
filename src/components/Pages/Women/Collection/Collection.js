import React from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import Loading from '../../../Shared/Loading';

const Collection = () => {

    useDynamicTitle("Collection")

    return (
        <div>
            <Loading />
        </div>
    );
};

export default Collection;