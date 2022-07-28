import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
// import Account from "./account";
// import History from "../components/dashboard/pending";
// import BookSession from "./book_session";
// import Dashboard from "./index";
// import axios from "axios";
// import { decode as atob, encode as btoa } from "base-64";
// import Settings from "./settings";
import UpcomingSessions from "../components/dashboard/approved/approved";
// import DashboardService from "../../../services/dashboard-service";
// // import AuthService from "../../../services/auth-service";
// import Payment from "./payment";
// import SessionRequests from "./session_requests";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 265;

const Dashboard_main = () => {
  // const [privateSec, setPrivateSec] = useState([]);
  // const [sessionUser, setSessionUser] = useState([]);
  const [settledPaysl, setSettledPaysl] = useState([]);
  const [printedPaysl, setPrintedPaysl] = useState([]);
  const [pendingPaysl, setPendingPaysl] = useState([]);
  const [approvedPaysl, setApprovedPaysl] = useState([]);
  const [paidPaysl, setPaidPaysl] = useState([]);
  const [queriedPaysl, setQueriedPaysl] = useState([]);
 
  // const [totalSessions, setTotalSessions] = useState();
  const [isPage, setIsPage] = useState(true);
  // const [readNoti, setReadNoti] = useState(false);

  const history = useHistory();

  const [values, setValues] = useState({
    tutor_id: "",
    name: "",
    email: "",
    rating: "",
    profilePic: "",
    watsNumber: "",
    dateOfBirth: "",
    dept: "",
    semester: "",
    university: "",
    facebookUsername: "",
    country: "",
    city: "",
    writer: "",
    countryCode: "",
    profilePic: "",
    accountName: "",
    accountNo: "",
    ifsc: "",
    upi_id: "",
    passbook: "",
    pan: "",
    panPic: "",
    paymentDetails_status: "",
    newNotification: "",
  });

  const [sessionValues, setSessionValues] = useState({
    type: "",
    subject: "",
    deadline: "",
    client_time: "",
    work_status: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const fetchPaymentDetails=async ()=>{
    const fetchPayment=await axios.get("http://localhost:8800/api/payslip/fetch_all_payslip_type1",{
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
    })
    if(fetchPayment.data){
      let det=fetchPayment.data;
      console.log({test:det?.Approved})
      setPendingPaysl(det?.Pending)
      setApprovedPaysl(det?.Approved)
      setQueriedPaysl(det?.Queried)
      setSettledPaysl(det?.Settled)
      setPaidPaysl(det?.Paid)
      setPrintedPaysl(det?.Printed)
    }
  }

  useEffect(()=>{
    fetchPaymentDetails()
    
    let appObj=[
      {
        payslip_id:"PAYSL10001",
        name:"shivanshu",
        phone:"917255918744",
        type:"billed",
        amount:"100",
        currency:"INR",
        email:"shiv7255@gmail.com",
        department:"purchasing",
        hod:"pankaj pr",
        status:"approved",
        createdAt:"2/11/12",
        details:[{item:"sugar",quantity:"20kg",amount:"20INR"},{item:"sugar",quantity:"20kg",amount:"20INR"},{item:"sugar",quantity:"20kg",amount:"20INR"},{item:"sugar",quantity:"20kg",amount:"20INR"}]
      },
      {
        payslip_id:"PAYSL10002",
        name:"shivanshu",
        phone:"917255918744",
        type:"advance",
        email:"shiv7255@gmail.com",
        department:"purchasing",
        hod:"pankaj pr",
        amount:"100",
        currency:"INR",
        status:"approved",
        createdAt:"2/11/12",
        details:[{item:"sugar",quantity:"20kg",amount:"20INR"},{item:"sugar",quantity:"20kg",amount:"20INR"},{item:"sugar",quantity:"20kg",amount:"20INR"},{item:"sugar",quantity:"20kg",amount:"20INR"}]
      },

    ]
    setApprovedPaysl(appObj)
  },[])

//   // fetch profile
//   const fetchTutorProfile = async () => {
//     let tutorId1 = JSON.parse(localStorage.getItem("tutor")).saveTutor.tutor_id;
//     // const fetchProfile= {email:window.localStorage.getItem('email')})
//     await axios
//       .get(`https://device6chatapi.el.r.appspot.com/api/tutorweb/getTutorDetails/${tutorId1}`)
//       .then(
//         (response) => {
//           // setPrivateSec(response.data);
//           if (response.data && response.data.length != 0) {
//             let binaryProfilePic = response?.data?.profilePic?.data;
//             let picObject = btoa(
//               new Uint8Array(binaryProfilePic).reduce(function (data, byte) {
//                 return data + String.fromCharCode(byte);
//               }, "")
//             );
//             let binaryPassbookPic = response?.data?.Bank?.passbook?.data;
//             let passbookObject = btoa(
//               new Uint8Array(binaryPassbookPic).reduce(function (data, byte) {
//                 return data + String.fromCharCode(byte);
//               }, "")
//             );
//             let binaryPanPic = response?.data?.panPic?.data;
//             let panObject = btoa(
//               new Uint8Array(binaryPanPic).reduce(function (data, byte) {
//                 return data + String.fromCharCode(byte);
//               }, "")
//             );

//             console.log({ profilePicTest1: picObject });
//             console.log({ profilePicTest2: passbookObject });
//             console.log({ profilePicTest3: panObject });
//             let profilePicProper = `data:image/jpeg;base64,${picObject}`;
//             let passbookPicProper = `data:image/jpeg;base64,${passbookObject}`;
//             let panPicProper = `data:image/jpeg;base64,${panObject}`;
//             let countryCodeVal1 = response?.data?.countryCode?.slice(2, -1);
//             let watsNo = response?.data?.wa_id?.replace(countryCodeVal1, "");
//             console.log({ testCountryCode: countryCodeVal1, watsNo });
//             // let nameWithoutUC=response?.data?.name.replace("_"," ")
//             // let usernameWithoutUC=response?.data?.Bank?.acc_name?.replace("_"," " )

//             setValues({
//               tutor_id: response?.data?.tutor_id,
//               name: response?.data?.name?.replace("_", " "),
//               email: response?.data?.email,
//               university: response?.data?.academic_info[0]?.college,
//               dept: response?.data?.dept,
//               semester: response?.data?.semester,
//               facebookUsername: response?.data?.socialmedia,
//               profilePic: profilePicProper,
//               countryCode: response?.data?.countryCode,
//               watsNumber: watsNo,
//               country: response?.data?.country,
//               city: response?.data?.city,
//               accountName: response?.data?.Bank?.acc_name?.replace("_", " "),
//               accountNo: response?.data?.Bank?.acc_no,
//               ifsc: response?.data?.Bank?.ifsc_code,
//               upi_id: response?.data?.Bank?.upi_id,
//               passbook: passbookPicProper,
//               pan: response?.data?.pan,
//               panPic: panPicProper,
//               dateOfBirth: response?.data?.dateOfBirth,
//               writer: response?.data?.writer,
//               paymentDetails_status: response?.data?.paymentDetails_status,
//               tags: response?.data?.tags,
//               newNotification: response?.data?.newNotification,
//             });

//             let getLocalSt = JSON.parse(localStorage.getItem("tutor"));
//             // let getProfileLocalSt=JSON.parse(localStorage.getItem('tutor')).saveTutor;
//             let localStObject = {
//               ...getLocalSt,
//               saveTutor: response.data,
//             };
//             console.log({ resp1: response.data });
//             let tutorStringified = JSON.stringify(localStObject);
//             localStorage.setItem("tutor", tutorStringified);
//             console.log({ profile199: response.data });
//             console.log("profile pic fetched");
//           } else {
//             alert(
//               "Not getting profile details. Please again refresh this page"
//             );
//           }
//         },
//         (error) => {
//           console.log("Private page", error.response);
//           alert("User data not found!");
//           // Invalid token
//           if (error.response && error.response.status === 400) {
//             AuthService.logout();
//             history.push("/SignIn");
//             window.location.reload();
//           }
//         }
//       );
//     // console.log({tutorInfo})
//     // setValues({
//     //   tutor_id:tutorInfo.tutor_id,
//     //   name:tutorInfo.name,
//     //   email:tutorInfo.email,
//     //   rating:tutorInfo.rating,
//     // })
//   };

//   useEffect(() => {
//     fetchTutorProfile();
//     let tutStatus = JSON.parse(localStorage.getItem("tutor")).saveTutor
//       .tutStatus;
//     if (tutStatus === "db" || tutStatus === "exl") {
//       setIsPage(true);
//     } else {
//       setIsPage(false);
//     }
//   }, [readNoti]);

//   //fetch session
//   const fetchUserSession = async () => {
//     // DashboardService.fetchTutorSession().then(
//     axios
//       .post(`https://device2api.el.r.appspot.com/api/sessionsWeb/private/fetchTutorSession`, {
//         tutor_id: JSON.parse(window.localStorage.getItem("tutor")).saveTutor
//           .tutor_id,
//       })
//       .then(
//         (response) => {
//           if (
//             response.data.allSessions &&
//             response.data.allSessions.length != 0
//           ) {
//             let sessionAr = response?.data?.sessionData;
//             let upcomingSessionUser = response?.data?.upcomingSessionData;
//             let allsession1 = response?.data?.allSessions;

//             // sessionAr.sort((a, b) => new Date(a.client_time) - new Date(b.client_time));
//             // allsession1.sort((a, b) => new Date(b.client_time) - new Date(a.client_time));
//             console.log({ testSessionAr: sessionAr });
//             setSessionUser(sessionAr);
//             setUpcomingSessionUser(upcomingSessionUser);
//             setAllSessions(allsession1);

//             console.log({ sessionAr: sessionAr });
//             console.log("session user fetched");

//             let liveCount = 0;
//             let assignCount = 0;
//             upcomingSessionUser.map((el) => {
//               if (el.type === "Live Session") {
//                 liveCount += 1;
//               } else {
//                 assignCount += 1;
//               }
//             });

//             setTotalSessions(allsession1?.length);

//             setUpcomingLiveSession(liveCount);
//             setUpcomingAssignment(assignCount);
//           } else {
//             console.log(
//               "not getting session user . please again refresh this page"
//             );
//           }
//         },
//         (error) => {
//           console.log("Private page", error.response);
//           // Invalid token
//           if (error.response && error.response.status === 403) {
//             // AuthService.logout();
//             // history.push("/SignIn");
//             // window.location.reload();
//           }
//         }
//       );
//   };

//   //fetch session
//   const fetchNotifiedSession = async () => {
//     // DashboardService.fetchTutorSession().then(
//     axios
//       .post(`https://device2api.el.r.appspot.com/api/sessionsWeb/private/fetchNotifiedSession`, {
//         tutor_id: JSON.parse(window.localStorage.getItem("tutor")).saveTutor
//           .tutor_id,
//       })
//       .then(
//         (response) => {
//           if (
//             response.data.notifiedData &&
//             response.data.notifiedData.length != 0
//           ) {
//             let sessionAr = response?.data?.notifiedData;
//             // let upcomingSessionUser = response?.data?.upcomingSessionData;
//             // let allsession1 = response?.data?.allSessions;

//             // sessionAr.sort((a, b) => new Date(a.client_time) - new Date(b.client_time));
//             // allsession1.sort((a, b) => new Date(b.client_time) - new Date(a.client_time));
//             console.log({ testSessionAr: sessionAr });
//             setNotifiedSession(sessionAr);
//             // setUpcomingSessionUser(upcomingSessionUser);
//             // setAllSessions(allsession1);

//             console.log({ sessionAr: sessionAr });
//             console.log("session user fetched");
//             setOpen(false)
            
//           } else {
//             console.log(
//               "not getting session user . please again refresh this page"
//             );
//             setOpen(false)
//           }
//         },
//         (error) => {
//           console.log("Private page", error.response);
//           // Invalid token
//           if (error.response && error.response.status === 403) {
//             // AuthService.logout();
//             // history.push("/SignIn");
//             // window.location.reload();
//           }
//           setOpen(false)
//         }
//       );
//   };

//   useEffect(() => {
//     if (values.tutor_id !== null && values.tutor_id !== ""){
//       setOpen(true)
//       fetchUserSession();
//     fetchNotifiedSession();
//   }
//   }, [values.tutor_id, readNoti]);

  return (
    <div>
      {isPage && (
        <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           Iskcon Dhanbad Accounts
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Billed', 'Approved', 'Queried'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Paid', 'Settled', 'Printed'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          <div>
            {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
            {/* <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              // onClick={()=>setOpen(false)}
            >
              <CircularProgress color="inherit" />
            </Backdrop> */}
          </div>
          {/* <BrowserRouter>
            <Switch>
            
              <Route  path="/dashboard/approved"> */}
                <UpcomingSessions
                  // values={values}
                  // profilePic={values.profilePic}
                  upcomingSessionUser={approvedPaysl}
                  // paymentDetails_status={values.paymentDetails_status}
                  // readNoti={readNoti}
                  // setReadNoti={setReadNoti}
                />
              {/* </Route> */}
              {/* <Route exact path="/dashboard/approved">
                <UpcomingSessions
                  values={values}
                  profilePic={values.profilePic}
                  upcomingSessionUser={upcomingSessionUser}
                  paymentDetails_status={values.paymentDetails_status}
                  readNoti={readNoti}
                  setReadNoti={setReadNoti}
                />
              </Route>
              <Route exact path="/dashboard/queried">
                <UpcomingSessions
                  values={values}
                  profilePic={values.profilePic}
                  upcomingSessionUser={upcomingSessionUser}
                  paymentDetails_status={values.paymentDetails_status}
                  readNoti={readNoti}
                  setReadNoti={setReadNoti}
                />
              </Route>
           
              <Route exact path="/dashboard/settled">
                <History
                  values={values}
                  profilePic={values.profilePic}
                  sessionUser={sessionUser}
                  paymentDetails_status={values.paymentDetails_status}
                  readNoti={readNoti}
                  setReadNoti={setReadNoti}
                />
              </Route>
              <Route exact path="/tutor_dashboard/paid">
                <History
                  values={values}
                  profilePic={values.profilePic}
                  sessionUser={sessionUser}
                  paymentDetails_status={values.paymentDetails_status}
                  readNoti={readNoti}
                  setReadNoti={setReadNoti}
                />
              </Route>
              <Route exact path="/tutor_dashboard/printed">
                <History
                  values={values}
                  profilePic={values.profilePic}
                  sessionUser={sessionUser}
                  paymentDetails_status={values.paymentDetails_status}
                  readNoti={readNoti}
                  setReadNoti={setReadNoti}
                />
              </Route> */}
             
            {/* </Switch>
          </BrowserRouter> */}
          {/* <h1>Dashboard</h1> */}
          </Box>
    </Box>
        </>
      )}
      {!isPage && (
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <h1 style={{ color: "black" }}>404</h1>
          <h1 style={{ color: "black" }}>Not Found</h1>
          <br />
          <h3 style={{ color: "black" }}>Invalid Grant!!</h3>
        </div>
      )}
    </div>
  );
};

export default Dashboard_main;
