import { Grid } from '@mui/material';
import { Box, Item } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [news, setNews] = useState()
    useEffect( () => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=027161a93a4749838213e9e46d2c18c3')
            .then(res => res.json())
            .then(data => setNews(data.aricles))
    },[])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}> 
      <Grid container spacing={2}>
{
        news.map(nw => <Grid item xs = {2} >
            <News news = {nw} ></News>
            </Grid> )
} 
      </Grid>
    </Box>
        </div>
    );
};

export default Newspaper;