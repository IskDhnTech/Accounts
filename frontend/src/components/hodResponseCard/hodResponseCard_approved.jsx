import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const hodResponseCard_approved=()=>{
  const submitHandler = async () => {
    // const validateWaNumber = await axios.post(
    //   `${_api}/validateWaNumber`,
    //   // `http://localhost:8600/validateWaNumber`,
    //   {
    //     sessionId: ssnId,
    //     tutorId: tutId,
    //     waNumber: waNumber,
    //   }
    // );
alert("entered")
    // if (validateWaNumber.data.success) {
    //   setWaChecked(true);
    // } else {
    //   setWaChecked(false);
    //   setWaCheckedError(true);
    // }
  };

  return (
    // 
    <Box  style={{border:"solid" ,backgroundColor:"white" ,width:"20rem",marginLeft:"30%",marginTop:"17rem" ,borderColor:"aliceblue"}}>
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
            PAYSL100001
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            Name : Shivanshu<br/>
            Amount : 50 INR <br />
            Details : Vegetable
          </Typography>
          
          <Typography style={{display:"flex"}}>
           

          

          <Button
            size="small"
            style={{flex:"30%", alignSelf:"center",height:"40px",marginLeft:"30px"}}
            variant="contained"
            onClick={submitHandler}
          >
            Approve
          </Button>
          </Typography>
        </CardContent>
        
      </React.Fragment>
    </Card>
  </Box>
  );
}


export default hodResponseCard_approved;