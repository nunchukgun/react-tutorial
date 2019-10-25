import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import ButtonCounter from './components/exercises/button-counter/ButtonCounter'
import BCSolution from './components/solutions/button-counter/ButtonCounterSolution'
import StateAndFuncsAsProps from './components/exercises/state-func-props/StateAndFuncsAsProps'
import StateAndFuncsAsPropsSolution from './components/solutions/state-func-props/StateAndFuncsAsPropsSolution'
import Home from './components/tableOfContents/Home'

class App extends React.Component {
    render = () => {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/counting">
                            <ButtonCounter />
                        </Route>
                        <Route path="/counting-solution">
                            <BCSolution />
                        </Route>
                        <Route path="/state-func-props">
                            <StateAndFuncsAsProps/>
                        </Route>
                        <Route path="/state-func-props-solution">
                            <StateAndFuncsAsPropsSolution/>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
