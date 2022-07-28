
import React,{useEffect, useState} from 'react';
import moment from 'moment'
import axios from 'axios'
import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography,Button} from '@mui/material';
import { Clock as ClockIcon } from '../../../icons/clock';
import { Download as DownloadIcon } from '../../../icons/download';
import Modal from '../modal'

export const ProductCard = ({ product, ...rest }) => {
const [properClientTime,setProperClientTime]=useState()
// const [openModal,setOpenModal]=useState(false)


useEffect(()=>{
  console.log({timetest:product.client_time})
  let clientTime1= moment(product.client_time).format('lll');
  setProperClientTime(clientTime1)

},[])




return(
  <>
  {/* <Modal keepMounted /> */}
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>

    <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
         
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h6"
          >
          Payslip Id: <span style={{color:"black",fontSize:"15px",fontWeight:"700" }}>{product.payslip_id}</span>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
         
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h6"
          >
          <span style={{color:"darkOrange",fontSize:"15px",fontWeight:"700" }}>{product.createdAt}</span>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
        
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h5"
            
          >
           Type: <span style={{color:  "green" ,fontSize:"15px",fontWeight:"700" }}>{product.type}</span>
            
          </Typography>
          
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h5"
            
          >
           Name: <span style={{color:"green",fontSize:"15px",fontWeight:"700" }}>{product.name}</span>
            
          </Typography>
          
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h5"
            
          >
           Phone: <span style={{color:"green" ,fontSize:"15px",fontWeight:"700" }}>{product.phone}</span>
            
          </Typography>
          
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h5"
            
          >
           Email: <span style={{color:"green",fontSize:"15px",fontWeight:"700" }}>{product.email}</span>
            
          </Typography>
        </Grid>
      </Grid>
   
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >

    {/* <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        style={{color:"rgb(80, 72, 229)" ,fontSize:"35px"}}
      >
        {product.type}
      </Typography> */}
      


     
        {/* <Avatar
          alt="Product"
          src={product.media}
          variant="square"
        /> */}
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        style={{color:"black" ,fontSize:"30px"}}
      >
     Details
      </Typography>
      <div style={{height:"125px",overflowY:"scroll"}}>
     {product.details && product.details.map((el)=> <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        
      >
      
       <span>{el.item}</span><span>{el.quantity}</span><span>{el.amount}</span>
      </Typography>)}
      </div>
      {/* <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.subject}
      </Typography> */}
      {/* <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {product.client_comments}
      </Typography> */}
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <ClockIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
           <span style={{fontSize: '20px',fontWeight: '600' ,color:"rgb(80, 72, 229)"}}>Amount</span>{" "}<span style={{fontSize: '25px',fontWeight: '600' ,color:"black"}}>{product?.amount ? ((product.amount))+" "+product.currency : '---'}</span>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <DownloadIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
            
          >
            <Button>Paid</Button>
            <Button>Settled</Button>
            <Button>Printed</Button>
            {/* <Modal keepMounted product={product} /> */}
            {/* <span style={{fontSize: '20px',fontWeight: '600' ,color:"rgb(80, 72, 229)"}}>Amount</span>{" "}<span style={{fontSize: '25px',fontWeight: '600' ,color:"black"}}>{"$"+product.client_amount}</span> */}
            
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
  </>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}};
