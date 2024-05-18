import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import SignInPage from "./views/SignInPage"
import { Provider } from "react-redux"
import store from './redux/store'
import { createContext,useState } from "react"
import RegisterPage from "./views/RegisterPage"
 
export const loginData=createContext({loginUser:{},setLoginUser:()=>{}}) 
function App() {
 const [loginUser, setLoginUser] = useState({})
  return (
    <loginData.Provider value={{loginUser,setLoginUser}}>
      <Provider store={store}>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign in" element={<SignInPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    </Provider>
    </loginData.Provider>
  )
}

export default App
