import { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Mobile Bazar`
    },[title])
};

export default UseTitle;