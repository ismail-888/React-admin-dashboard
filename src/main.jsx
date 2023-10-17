import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Bar from './pages/bar/Bar';
import Calendar from './pages/calendar/Calendar';
import Faq from './pages/faq/Faq';
import Form from './pages/form/Form';
import Geography from './pages/geography/Geography';
import Invoices from './pages/invoices/Invoices';
import Line from './pages/line/Line';
import Pie from './pages/pie/Pie';
import Contact from './pages/contact/Contact';
import NotFound from './pages/not_found/NotFound';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* index ye3ni l path li ana m7adadu fo2 */}
      <Route index element={<Dashboard />} /> 
      <Route path='team' element={<Team/>} /> 
      <Route path='contact' element={<Contact/>} /> 
      <Route path='bar' element={<Bar/>} /> 
      <Route path='calendar' element={<Calendar/>} /> 
      <Route path='faq' element={<Faq/>} /> 
      <Route path='form' element={<Form/>} /> 
      <Route path='geography' element={<Geography/>} /> 
      <Route path='invoices' element={<Invoices/>} /> 
      <Route path='line' element={<Line/>} /> 
      <Route path='pie' element={<Pie/>} /> 





      <Route path='*' element={<NotFound/>} /> 
      
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
