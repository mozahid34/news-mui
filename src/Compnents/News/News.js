import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const News = (props) => {
    const[title, description, urlToImg] = props.news;
     
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title= {title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={urlToImg }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
      
    </Card>
    );
};

export default News;