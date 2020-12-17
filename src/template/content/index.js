import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import Loader from '../../components/loader'
import routes from '../routes'

function Content() {
    return (
        <div id='cl-content' className='cl-content'>
            <Suspense fallback={<Loader/>}>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        {
                            routes.map((route, index)=>{
                                return route.component && (
                                    <Route 
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props)=>(
                                            <route.component {...props}/>
                                        )}
                                    />
                                )
                            })
                        }
                        <Redirect to='/404'/>
                    </Switch>
                </AnimatePresence>
            </Suspense>
        </div>
    )
}

export default React.memo(Content)
