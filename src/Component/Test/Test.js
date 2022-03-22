import React, { useState } from 'react';

const Test = (props) => {
    // const {count} = props;
    // console.log(count);

    const [count, setCount] = useState(0);

    // const minus = () => {
    //     if (count > 0){
    //         const newCount = count - 1;
    //         setCount(newCount)
    //     }
       
    // }
    // const plus = () => {
    //    const newCount = count + 1;
    //    setCount(newCount)
    // }

   
   
    return (
        <div>
            <h1>{count}</h1>
            <div className="count mt-5">
            <button onClick={() => setCount(count + 1)} className='ms-3 p-3'>+</button>
            <button onClick={() =>count>0?setCount(count - 1):setCount(0)} className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;