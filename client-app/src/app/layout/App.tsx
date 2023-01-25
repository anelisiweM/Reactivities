import React, { useEffect } from 'react';
import {  Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/dashboard/details/ActivityDetails';
import ActivityList from '../../features/activities/dashboard/ActivityList';

function App() {

  const location = useLocation();
  
   return (
    <>
 {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{marginTop:'7em'}}>
          <Routes>
            <Route  path='/' element={<HomePage />} />
            <Route path='/activities' element={<ActivityDashboard />} />
            <Route path='/activities/:id' element={<ActivityDetails/>} />
            <Route key={location.key} path={'/createActivity'|| '/manage/id'} element={<ActivityForm />} />

          </Routes>
          </Container>
          </>
  )}

  </>
   );
}

export default observer (App);
