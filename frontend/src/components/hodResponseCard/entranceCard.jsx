import * as React from "react";
import { useState } from "react";
// import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard({ _api, ssnId, tutId, setWaChecked,fetchDetails }) {
  const [waNumber, setWaNumber] = useState();
  const [waCheckedError, setWaCheckedError] = useState(false);
  const params=useParams()

  const changeHandler = (e) => {
    setWaNumber(e.target.value);
    setWaCheckedError(false);
  };

  const submitHandler = async () => {
    if(waNumber==="12345"){    
        fetchDetails(params.payslip_id)
        }else{      
          alert("incorrect passcode") 
        }
  };

  return (
    <Box  style={{border:"solid" ,backgroundColor:"white" ,width:"30rem",marginLeft:"32rem",marginTop:"17rem" ,borderColor:"aliceblue"}}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Enter
      </Typography> */}
            <Typography
              variant="h5"
              component="div"
              style={{ marginTop: "20px" }}
            >
              Enter Srcret Number
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              style={{ marginBottom: "20px" }}
            >
              
            </Typography>
            {/*<Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}

            {/* <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        /> */}
            <Typography style={{display:"flex"}}>
              {!waCheckedError && (
                <TextField
                type='number'
                style={{flex:"70%", justifySelf:"center",marginRight:"30px"}}
                  id="outlined-basic"
                  label="Secret Number"
                  variant="outlined"
                  onChange={changeHandler}
                  value={waNumber}
                />
              )}

              {waCheckedError && (
                <TextField
                  error
                  type='number'
                  style={{flex:"70%", justifySelf:"center",marginRight:"30px"}}
                  id="outlined-error-helper-text"
                  label="Secret Number"
                  onChange={changeHandler}
                  value={waNumber}
                  helperText="WhatsApp number is not matching."
                />
              )}

            <Button
              size="small"
              style={{flex:"30%", alignSelf:"center",height:"40px",marginLeft:"30px"}}
              variant="contained"
              onClick={submitHandler}
            >
              Submit
            </Button>
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button
              size="small"
              style={{ marginBottom: "20px" }}
              variant="contained"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </CardActions> */}
        </React.Fragment>
      </Card>
    </Box>
  );
}