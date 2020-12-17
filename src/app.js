import React, { useState, Suspense } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './pages/login';
import Register from './pages/register';
import Page404 from './pages/page404';
import Page500 from './pages/page500';
import Layout from './template/layout';

import Loader from './components/loader'

import './assets/bootstrap/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { ContextProvider, GlobalState } from './context/context'



function App() {
    const [state, setState]=useState(GlobalState)

    return (
        <ContextProvider value={[state, setState]}>
            <Suspense fallback={Loader}>
                <Switch>
                    <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
                    <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
                    <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
                    <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
                    <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
                    <Redirect to='/404'/>
                </Switch>
            </Suspense>
            <ToastContainer/>
        </ContextProvider>
    )
}

export default withRouter(App);
