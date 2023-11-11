import React from 'react';
import './App.css';
import Login from './Component/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './Component/Home';
// import EmployeeDetailsPage from './Component/EmployeeDetailsPage';

const queryClient = new QueryClient()

function App() {
  return (
  
      <QueryClientProvider client={queryClient}>
          <div className="App">
          <BrowserRouter>
            <Routes>
               <Route path="/" Component={Login}/> 
               <Route path="/Home" Component={Home}/> 
               {/* <Route path="/EmployeeList:id" Component={EmployeeDetailsPage}/>  */}
             </Routes>
         </BrowserRouter>
          </div>
      </QueryClientProvider>

  );
}

export default App;
