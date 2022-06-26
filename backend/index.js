const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("started11")
})

const PORT = process.env.PORT || 8800
app.listen(PORT, () => {
  console.log("Backend server is running!", PORT);
});