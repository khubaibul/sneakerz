import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - Limited Edition | Sneakerz`;
    }, [title])
};


export default useDynamicTitle;