import React, { useState,useEffect } from 'react'


const Theme = () => {
  const[theme, setTheme]=useState('light');
const toggleTheme = ()=>{
    if (theme === 'light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }
}
  useEffect(() => {
      document.body.className = theme;
   
  }, [theme]);
    return (
    <>
    <div className={ `theme ${theme}`}></div>
        <button className='btnTheme' onClick={toggleTheme}>Dark</button>
        </>
    )
}

export default Theme