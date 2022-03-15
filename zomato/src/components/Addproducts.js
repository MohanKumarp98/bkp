import React from 'react'
import { TextField, Box, Typography, Paper, Grid, Checkbox, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './Login';

const useStyles = makeStyles({
    paperStyle: {
        margin: "20px auto",
        marginBottom:"10px",
        borderRadius: "10px"
    },
    email: {
        width: "350px",
        margin: "18px",
        borderColor: "red",
    },
    type: {
        marginTop: "30px",
        marginBottom: "10px",
        color:"grey",
        paddingTop:'20px'
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

function Addproducts() {
    const newer = useStyles()
   
  return (
    <div>
         <Router>
        <div>
            <Grid container>
                <Grid item sm={4}>
                </Grid>
                <Grid item sm={4}>
                    <Paper elevation={20} className={newer.paperStyle}>

                        <Typography variant="h4" className={newer.type}>Add Products</Typography>
                        <Box component="form">

                            <TextField id="outlined-basic" className={newer.email} label="Dish Name"
                                variant="outlined" placeholder='Product Name' type="text" />

                            <TextField id="outlined-basic" className={newer.email} label="Price"
                                variant="outlined" placeholder='Price' type="number" />
                           
                           <TextField id="outlined-basic" className={newer.email} label="Image Url"
                                variant="outlined" placeholder='Image Url' type="text" />

                           <TextField id="outlined-basic" className={newer.email} label="Resturant Name"
                                variant="outlined" placeholder='Resturant Name' type="text" />
                           {/* <Avatar src={} alt=" "></Avatar> */}
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
        
    </div>
  )
}

export default Addproducts