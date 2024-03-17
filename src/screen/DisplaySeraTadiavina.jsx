import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import data from '../data/sera.js'

function DisplaySeraTadiavina() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
      {
        data.map((sera , index) => (
          <Card key={index} style={{ margin: '16px', width: '300px' }}>
            <CardMedia component="img" height="280" image={sera.image} alt={sera.nomSera} />
            
                <CardContent>
                
                    <Typography variant="body2" color="text.secondary">
                        Contact: {sera.Contact}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                        Description: {sera.Description}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                        Prix: {sera.prixSera}
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

export default DisplaySeraTadiavina;
