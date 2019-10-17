import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import ButtonCounter from './components/exercises/ButtonCounter'
import BCSolution from './components/solutions/ButtonCounterSolution'
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
