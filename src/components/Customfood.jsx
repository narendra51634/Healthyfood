import { useState } from 'react'
import style from './Customfood.module.css'
const Customfood = ({hendalChangeInput,hendalChangeClick,inputValue,errorMsg}) => {
   
    
    return (
        <>
        <input 
        type="text"   
        value={inputValue}      
        className={`${style.nkTextField} form-control`}
        onChange={hendalChangeInput}
        />
        <p>{errorMsg}</p>
        <button name="add" onClick={hendalChangeClick} className={`${style.nkButton} btn btn-info`}> add</button>
        </>
    )
} 
export default Customfood;