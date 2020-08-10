import React from 'react'
import RouterLink from '../util/RouterLink'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
  gridContainer: {
    marginTop: 20,
  },
})

const RouterButton = (props) => {
  const { path, text } = props
  return (
    <Button
      component={RouterLink}
      to={path}
      variant={'outlined'}
      color={'primary'}
      style={{ width: '100%' }}
    >
      {text}
    </Button>
  )
}

const ContentsList = (props) => {
  const { classes } = props

  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item xs={6}>
        <RouterButton path={'/counting'} text={'Counting With State'} />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={'/counting-solution'}
          text={'Counting With State (Solution)'}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={'/state-func-props'}
          text={'State and Funcs as Props'}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={'/state-func-props-solution'}
          text={'State and Funcs as Props (Solution)'}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton path={'/intro-to-redux'} text={'Intro to Redux'} />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={'/intro-to-redux-solution'}
          text={'Intro to Redux (Solution)'}
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ContentsList)
