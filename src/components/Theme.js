import React, { useState,useEffect } from 'react'
import moon from '../img/moon.svg'

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
        <button className='btnTheme' onClick={toggleTheme}><img className='moon' src={moon} alt='dark mode'/>Dark</button>
        </>
    )
}

export default Theme