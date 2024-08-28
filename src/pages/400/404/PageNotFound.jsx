import { Link } from 'react-router-dom'
import './pageNotFound.scss'
import React from 'react'
import { Error, Warning } from '@mui/icons-material'

const PageNotFound = () => {
  return (
    <div class="w-full flex flex-col items-center dark:bg-black">
      <div class=" min-h-screen dark:bg-black dark:text-gray-300 flex flex-col justify-center gap-4 w-10/12 ">

        <div class="flex flex-col gap-4">
          <div>oops, this page does not exist (or has been moved to a different url) </div>
          <hr class="border-2"/>
          <div class="flex items-center gap-2">
            <span class="leading-none flex items-center justify-center text-5xl" >
              <Warning fontSize='1rem' />
            </span>
            <span>error code: 404</span>
          </div>
          <hr class="border-2"/>
          <div class="bg-neutral-200 p-2 rounded-md dark:bg-neutral-900 w-max">
            <Link to="/">
              Go Home
            </Link>
          </div>
        </div>


      </div>

    </div>

  )
}

export default PageNotFound