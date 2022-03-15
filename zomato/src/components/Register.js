import React from 'react'
import { TextField, Box, Typography, Paper, Grid, Checkbox, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './Login';

const useStyles = makeStyles({
    paperStyle: {
        margin: "20px auto",
        borderRadius: "10px"
    },
    email: {
        width: "350px",
        margin: "18px",
        borderColor: "red",
    },
    type: {
        marginTop: "30px",
        marginBottom: "30px",
        paddingTop:"20px"
    },
    check: {
        textAlign: "left",
    },
    but1: {
        marginTop: "20px",
        marginBottom: "10px",
        width: "350px",
        height: "40px",
        backgroundColor: "rgb(239, 79, 95)",
        borderColor: "rgb(239, 79, 95)",
        color: "white",
    },
    already: {
        marginBottom: "5px",
        marginTop: "10px",
    },
    google: {
        margin: "13px",
        width: "350px",
        height: "40px",
        color: "rgb(239, 79, 95)"
    }
})


function Register() {
    const newer = useStyles()
    return (
        <Router>
        <div>
            <Grid container>
                <Grid item sm={4}>
                </Grid>
                <Grid item sm={4}>
                    <Paper elevation={20} className={newer.paperStyle}>
                        <Typography variant="h3" className={newer.type}>Register</Typography>
                        <Box component="form">

                            <TextField id="outlined-basic" className={newer.email} label="Email id"
                                variant="outlined" placeholder='Email Id' type="email" />

                            <TextField id="outlined-basic" className={newer.email} label="Password"
                                variant="outlined" placeholder='Password' type="password" />
                           
                           <TextField id="outlined-basic" className={newer.email} label="Mobile No"
                                variant="outlined" placeholder='Mobile Number' type="number" />
                           
                            <br></br>

                            <Grid container direction="row">
                                <Grid item sm={1}></Grid>
                                <Grid item sm={false}>
                                    <Checkbox size="medium" checkedIcon={<DoneIcon />}
                                        className={newer.check} />
                                </Grid>
                                
                                <Grid item sm={8}>
                                    <Typography variant="body2" align="left">
                                        I agree to Taste Bud's Terms of Service,
                                        Privacy Policy and Content Policies</Typography>
                                </Grid>
                                
                                <Grid item sm={2}></Grid>
                            </Grid>
                            <Button className={newer.but1} variant="contained">
                                Create Account</Button>
                           
                            <br></br>
                            
                            <Grid container>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={10}><hr></hr></Grid>
                                <Grid item sm={2}></Grid>
                            </Grid>

                            <Button className={newer.google}
                                startIcon={<Avatar style={{ height: "30px", width: "30px" }}
                                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png">
                                </Avatar>}
                                variant="outlined">
                                Continue with Google</Button>
                            <Typography className={newer.already}>Already have an
                                account?<Link to="/login">Log in</Link> </Typography>
                            <br></br>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={4}>

                </Grid>
            </Grid>
        </div>
        <Route path="/login" component={Login}/>
        </Router>
    )
}

export default Register