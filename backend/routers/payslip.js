const router = require("express").Router()
const payslip = require("../models/Payslip");
const hod =require("../models/Hods");
const nodemailer =require("nodemailer")

//adding new payslip
router.post("/new_payslip", async (req, res) => {
    try {
      const find_hod=await hod.findOne({
        department:req.body.department
      })
      const find_payslip_id=await payslip.find();
      console.log({find_payslip_id})
      let updated_payslip_id;
      if(find_payslip_id){
        const pay_id=find_payslip_id[find_payslip_id?.length-1]?.payslip_id;
        let pay_var=(+pay_id.slice(5))+1
        updated_payslip_id="PAYSL"+pay_var

      }else{
        updated_payslip_id="PAYSL1000001";
      }
        const payload ={
            payslip_id:updated_payslip_id,
            name:req.body.name,
            email_id:req.body.email_id,
            phone:req.body.phone,
            department:req.body.department,
            details:req.body.details,
            amount:req.body.amount,
            cost_center:req.body.cost_center, 
            hod:find_hod?.name,

        }
      const payslip_add = new payslip(payload);
        const payslip_save = await payslip_add.save()
      res
        .status(200)
        .json({payslip_save});
    } catch (err) {
        console.log({err})
      res.status(500).json(err);
    }
  });



//send email notification to acc department and person filling form
router.post("/payslip_mail_send", async (req, res) => {
    try {
      // sending mail to tutor
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "iskdhn.technical@gmail.com",
          pass: "wggbgqqhfwaiaint",
        },
      });
  
      let mailOptions = {
        from: "iskdhn.technical@gmail.com",
        to: req.body.reciever_mailId,
        subject: `${req.body.subject}`,
        html: `<h1><b>${
          req.body.payslip_id
        }</b></h1><br/>
        
          Name : ${req.body.name} <br/>
          Department : ${req.body.department} <br/>
          Email : ${req.body.email_id} <br/>
          Phone : ${req.body.phone} <br/>
          Cost Center : ${req.body.cost_center} <br/>
          Amount :₹ ${req.body.amount} <br/>
          Details :<br/> ${req.body.details} <br/>
          
        <br /><p>Thanks,</p><p>Accounts Department</p><p>Email: iskdhn.technical@gmail.com, Contact: +917255918744</p><br/><br /><footer><p>Copyright © 2020 Tutorpoint. All rights reserved Abhay Education Pvt. Ltd.</p></footer>`,
      };
  
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
  
    //   if (req.body.medium == "mail") {
    //     const updateSession = await Session.findOneAndUpdate(
    //       { session_id: req.body.sessionId },
    //       {
    //         $push: { notified_tutors: req.body.notified_tutors },
    //       },
    //       {
    //         upsert: true,
    //         new: true,
    //         setDefaultsOnInsert: true,
    //       }
    //     );
    //     console.log(updateSession);
    //   }
  
      // const updateTutor = await Session.updateOne(
      //   { session_id: req.body.sessionId, "notified_tutors.tutor_id": req.body.tutorId },
      //   { $set: { "notified_tutors.$.medium" : 'wa-mail' } }
      // );
  
      res.status(200).json("Email sent");
    } catch (err) {
      console.log(err);
      res.status(500).json("Email not sent");
    }
  });



  // let mailOptions = {
  //   from: "shiv7255918@gmail.com",
  //   to: req.body.email,
  //   subject: `${req.body.param1} | ${req.body.param3}`,
  //   html: `<center><img src="https://tutorpoint.in/assets/images/logo.png" style="width: 125px" /></center><br /><br /><p><b>Dear ${
  //     req.body.name
  //   },</b></p><p>We have a session for you.</p><p>Session ID: ${
  //     req.body.param2
  //   }</p><p>Subject/Topic name: ${req.body.param3}</p><p>Date and Time ${
  //     req.body.templateName.includes("live_session_tutor_notify")
  //       ? ""
  //       : "(Deadline)"
  //   }: ${req.body.param4}</p><p>Duration: ${
  //     req.body.templateName.includes("live_session_tutor_notify")
  //       ? req.body.param5
  //       : "N/A"
  //   }</p><p>We will pay you ${
  //     req.body.param6
  //   }</p><p>Are you confident in this subject? Can you perform very well in this session? If yes, then press on the below button to show your interest. Please check the study materials after you press the button below.</p><button style='background-color: #59C173; padding: 10px 18px; border: 1px solid #59C173; border-radius: 20px'><a href="https://tutor-response.tutorpoint.in/${
  //     req.body.param7
  //   }" target="_blank" style='text-decoration: none; color: #ffff'>I am Interested</a></button><p>Please wait after you show your interest. We will get back to you shortly to get your confirmation for this session. 
  //   Disclaimer:</p><p><b>1.Never take these sessions casually. They impact your ratings.</b></p><p><b>2. Showing interest doesn't mean that we have assigned the session to you.</b></p><p>To stop receiving Whatsapp notifications from us, send an official email to us.</p><br /><p>Thanks,</p><p>Team Tutorpoint</p><p>Email: support@tutorpoint.in, Contact: +917761093194</p><br/><br /><footer><p>Copyright © 2020 Tutorpoint. All rights reserved Abhay Education Pvt. Ltd.</p></footer>`,
  // };

  module.exports =router
  