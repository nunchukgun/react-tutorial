import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import ContentsList from './ContentsList'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    main: {
        backgroundColor: theme.palette.background.default,
        content: {
            flexGrow: 1,
            padding: theme.spacing(6),
        },
        width: '100%',
        height: '100%'
    },
    card: {
        margin: '5% 15%',
        textAlign: 'center'
    }
})

class Home extends React.Component {
    
    render = () => {
        const {classes} = this.props
        
        return (
            <main className={classes.main}>
                <Card className={classes.card}>
                    <CardHeader title={'React Tutorial'} subheader={"Let's learn!"}/>
                    <CardContent>
                        <Typography variant={'h3'}>
                            Table of Contents
                        </Typography>
                        <Divider/>
                        <ContentsList/>
                    </CardContent>
                </Card>
            </main>
        )
    }
}

export default withStyles(styles)(Home)
