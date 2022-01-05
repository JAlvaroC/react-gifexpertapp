import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setcatergories}) => {
    const [inputValue, setInputValue] = useState('')
    const hanleInputChannge=(e)=>{
    //  console.log(e.target.value)    
     setInputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log('SUBMIT HECHO')
        if (inputValue.trim().length>2) {
            
            setcatergories(cats=>[inputValue,...cats]);
            setInputValue('');
        }
    }
    return (
      
        // <>
        //   <h1>{inputValue}</h1>
        //     {/* <h2>AddCategory</h2> */}
        //     <input
        //     type="text"
        //      value={inputValue}
        //      onChange={hanleInputChannge}
        //     />

        // </>
        <form onSubmit={handleSubmit}>
          <h1>{inputValue}</h1>
            {/* <h2>AddCategory</h2> */}
            <input
            type="text"
             value={inputValue}
             onChange={hanleInputChannge}
            />

        </form>
    )
}
AddCategory.propTypes={
    setcatergories:PropTypes.func.isRequired
}