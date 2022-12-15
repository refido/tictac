import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

function App() {
  return (
    // <AppWrapper>
    //   <Header />
    //   <div className="app__body">
    //     <Sidebar />
    //   </div>
    // </AppWrapper>

    // <Login></Login>

    <Signup></Signup>

  );
}
const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`
export default App;