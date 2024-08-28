import "./app.scss";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate} from "react-router-dom";

import PageNotFound from "./pages/400/404/PageNotFound.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeToggler from './components/ThemeToggler/ThemeToggler.jsx'
import useCheckDarkMode from "./hooks/useCheckDarkMode/useCheckDarkMode.js";
import { Email, GitHub, LinkedIn, MailOutline, Settings, WorkHistory } from "@mui/icons-material";



const MainPage = () => {



  return (
    <div class="w-full flex flex-col items-center dark:bg-black">
      <div class=" min-h-screen dark:bg-black dark:text-gray-300 flex flex-col justify-center gap-4 w-10/12 ">

       {/* <ThemeToggler /> */}
        {/* <div> 
          <label class="inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
          </label>
        </div> */}


        <div class="bg-white dark:bg-black flex flex-col gap-2 text-center text-lg">
          {/* <h1 class="text-gray-900 dark:text-white">Dark mode</h1> */}
          <p class="text-gray-600 dark:text-white">
          Welcome to my portfolio site! 🚧 
          </p>
          <p class="text-gray-600 dark:text-gray-300">
          My name is Moboluwarin E. Jibola-Shittu
          </p>
          <p class="text-gray-600 dark:text-gray-300">Exciting updates are on the way  
              <Settings fontSize='1rem'/>.
             For now, feel free to connect with me on.. 👋</p>
        </div>
        
        <div class="flex flex-col gap-6">
          <div class="text-gray-900 dark:text-white text-center mt-8">
            
            <a 
            class="text-gray-900 dark:text-gray-300"
            href="https://www.linkedin.com/in/jibolashittubolu"
            target="_blank" rel="noopener noreferrer"
            >
              <div>
              <LinkedIn fontSize='1rem'/>
              </div>
              <div   class="bg-neutral-200 p-2 rounded-md dark:bg-neutral-900">LinkedIn</div>
              {/* LinkedIn */}
            </a>
          </div>
          <div class="text-gray-900 dark:text-gray-300 text-center">
            {/* <span class="leading-none flex items-center justify-center"> */}
              {/* <Email fontSize='1rem'/> */}
            {/* </span> */}
            <a 
            href="mailto:jibolashittubolu@gmail.com?subject=Inquiry%20about%20Services&body=Dear%20Moboluwarin%2C%0A%0AI%20have%20some%20inquiry%20about%20your%20services%20at...jiboladev.com"
            rel="noopener noreferrer"
            >
              <div> <Email fontSize='1rem'/> </div>
              <div   class="bg-neutral-200 p-2 rounded-md dark:bg-neutral-900"> Send me an e-mail</div>
            </a>
          </div>
          <div class="text-gray-900 dark:text-gray-300 text-center">
            <a 
            href="https://github.com/jibolashittubolu"
            target="_blank" rel="noopener noreferrer"
            >
              <div>
                <GitHub fontSize='1rem'/>
              </div>
              <div   class="bg-neutral-200 p-2 rounded-md dark:bg-neutral-900"> GitHub </div>
            </a>
          </div>
          <div class="text-gray-900 dark:text-gray-300 text-center">
            <a 
            href="/assets/pdf/www.jiboladev.com.pdf"
            target="_blank" rel="noopener noreferrer"
            >
              <div>
                <WorkHistory fontSize='1rem'/>
              </div>
              <div 
              class="bg-neutral-200 p-2 rounded-md dark:bg-neutral-900"
              >
                My CV / Resume
              </div>              
            </a>
          </div>
        </div>


      </div>

    </div>

  )
}

// Scroll to top and bottom icon -absolute at right bottom

function AppMain() {

  const location = useLocation();
  useCheckDarkMode();
  return (
    <div className="root-div">
        <div className="root-div-inner">
          <ThemeToggler />
          <Routes  key={location.pathname}>

            <Route path='/'>
              <Route path="/" element={
                  <MainPage />
              }   />
              <Route path="*" element={<PageNotFound />}   /> 
              
            </Route>  
            
          </Routes>
        </div>
    </div>
  );
}


const App = () => {

  return (
    <BrowserRouter>    
        <AppMain />
    </BrowserRouter>
  )
}


export default App;
