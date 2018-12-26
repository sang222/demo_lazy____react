import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routers from './routers'
import Main from './components/Main'

import './App.css';

class App extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <Router>
                <Main>
                    <React.Suspense fallback={this.loading()}>
                        <Switch>
                            { routers.map((router,i) => {
                                return (
                                    <Route
                                        key={i}
                                        exact={router.exact}
                                        path={router.path}
                                        render={props =>
                                            React.createElement(router.component, {
                                                ...props
                                            })}
                                    />
                                )
                            }) }
                        </Switch>
                    </React.Suspense>
                </Main>
            </Router>
        );
    }
}

export default App;
