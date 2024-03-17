//afficher les sera  enutilisant MaterialUI
import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import data from '../data/sera.js'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allSera } from '../Redux/Actions/ActionSera.js';

function ProductList() {
  const seraList = useSelector((state)=> state.allSera)
  const seras = seraList.sera
  
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    dispatch(allSera())
  },[dispatch])
 
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
          {
             seras.map((sera , index) => (
                <Card key={index} style={{ margin: '16px', width: '300px' }}>
                   
                    <CardMedia component="img" height="280" image={sera.image} alt={sera.nameSera} />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Contact: {sera.contact}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description: {sera.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Prix: {sera.price}
                      </Typography>
                    </CardContent>
                   
                    <CardActions>
                      <Button size="small" color="primary">
                        Seraina
                      </Button>
                    </CardActions>
               
                </Card>
              ))
              }
    </div>
  );
}

export default ProductList;
