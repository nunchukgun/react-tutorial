import React from 'react'
import RouterLink from '../util/RouterLink'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    gridContainer: {
        marginTop: 20
    }
})

class ContentsList extends React.Component {
    render = () => {
        const {classes} = this.props
        
        return (
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={6}>
                    <Button component={RouterLink} to={'/counting'} variant={'outlined'} color={'primary'}>
                        Counting With State
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button component={RouterLink} to={'/counting-solution'} variant={'outlined'} color={'primary'}>
                        Counting With State (Solution)
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button component={RouterLink} to={'/state-func-props'} variant={'outlined'} color={'primary'}>
                        State and Funcs as Props
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button component={RouterLink} to={'/state-func-props-solution'} variant={'outlined'} color={'primary'}>
                        State and Funcs as Props (Solution)
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button component={RouterLink} to={'/intro-to-redux'} variant={'outlined'} color={'primary'}>
                        Intro to Redux
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button component={RouterLink} to={'/intro-to-redux-solution'} variant={'outlined'} color={'primary'}>
                        Intro to Redux (Solution)
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ContentsList)