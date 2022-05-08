import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Main from './layouts/publicLayouts/Main';
import routeConfig from './routes/PublicRoute';

import './utils/scss/base/index.scss';
import { FallBackView } from './layouts/Loading/LoadingComponent';
import LoadingPage from './layouts/Loading/LoadingPage';

const { routes, renderRoutes } = routeConfig;

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <div className="App">
                    <Router>
                        <Suspense fallback={<FallBackView />}>
                            <Switch>
                                <Main>
                                    {renderRoutes(routes, isAuth)}
                                </Main>
                            </Switch>
                            <Redirect from={'/'} to={'/home'} />
                        </Suspense>
                    </Router>
                </div>
            )
            }
        </>
    );
}

export default App;
