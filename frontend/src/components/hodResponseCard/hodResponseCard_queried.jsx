import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from 'axios'

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const HodResponseCard_queried=({payslipData})=>{

const [query,setQuery] = useState()
const [queryDone,setQueryDone] = useState(false)

const changeHandler = (event) =>{
  event.preventDefault()
  setQuery(event.target.value)
}
 
    const submitHandler = async () => {
      let payload={
        ...payslipData.data,
        query:query,
        status:"queried"
      }
      const query_func = await axios.post(
        `http://localhost:8800/api/payslip/payslip_query_raised`,
        payload
      );
       if(query_func.data){
        // window.location.replace()
        window.location.replace("/submitted")
       }else{
        alert("Some error occoured.Please try again!")
       }  
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
            {payslipData.data.payslip_id}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            Name : {payslipData.data.name}<br/>
            Contact No. :{payslipData.data.phone}<br/>
            Email. :{payslipData.data.email_id}<br/>
            Type :{payslipData.data.type}<br/>
            Department:{payslipData.data.department}<br/>
            Amount : {payslipData.data.amount} <br />
            Details : {payslipData.data.details}
          </Typography>
          <Typography style={{display:"flex", marginBottom:"20px"}}>
             
                <TextField
              
                style={{flex:"70%", justifySelf:"center"}}
                  id="outlined-basic"
                  label="Write your query"
                  variant="outlined"
                  onChange={changeHandler}
                  value={query}
                />
           
              </Typography>
          <Typography style={{display:"flex"}}>
          <Button
            size="small"
            style={{flex:"30%", alignSelf:"center",height:"40px",marginLeft:"30px"}}
            variant="contained"
            onClick={submitHandler}
          >
            Raise Query
          </Button>
          </Typography>
        </CardContent>
        
      </React.Fragment>
    </Card>
  </Box>
  );
}


export default HodResponseCard_queried;