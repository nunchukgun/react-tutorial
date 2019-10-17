import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import ButtonCounter from './components/exercises/ButtonCounter'
import Home from './components/tableOfContents/Home'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    app: {
        display: 'flex'
    }
})

class App extends React.Component {
    render = () => {
        const {classes} = this.props
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/counting">
                            <ButtonCounter />
                        </Route>
                        <Route path="/users">
                            <Users />
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

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default withStyles(styles)(App)
