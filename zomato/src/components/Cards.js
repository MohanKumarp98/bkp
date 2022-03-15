import React, { useState } from 'react';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { Translate } from '@material-ui/icons';



export default function MediaCard() {
const [hover, SetHover] = useState()
//  let onHover=()=>{
//   SetHover(props.id)
//  }



  return (
    
    <Grid container xs={2} sm={3} md={3}>
`<Paper elevation={8} >
{/*  key={props.id} sx={hover===props.id ?{trnsform:Translate('50px','100px')}:{borderRadius:'10px'}} onMouseOver={onHover} */}
    {/* <Card sx={{ maxWidth: 345 }}> */}
      <CardMedia
        component="img"
        height="200"
        image="https://c.ndtvimg.com/2020-03/bthb68ug_virat-kohli-afp_625x300_27_March_20.jpg"
        alt="green iguana"
        sx={{borderRadius:"12px",padding:"5px",}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Share</Button>
        <Button size="small" variant="outlined" color="error">Add +</Button>
      </CardActions>
    {/* </Card> */}
    </Paper>
    </Grid>
  );
}
