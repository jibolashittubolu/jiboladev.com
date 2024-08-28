import React from 'react'
import { useEffect } from 'react'

const useCheckDarkMode = () => {

    useEffect(() => {

        const checkDarkMode = () => {
            if ((localStorage.getItem('color-theme') === 'dark' )|| (!('color-theme' in localStorage) || window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                return document.documentElement.classList.add('dark');
            } 
            else {
                document.documentElement.classList.remove('dark')
            }
        }
        checkDarkMode()
    
    //   return () => {
    //   }
    }, [])
    

//   return (
//     <div>useCheckDarkMode</div>
//   )
}

export default useCheckDarkMode