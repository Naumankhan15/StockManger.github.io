import nodemailer from "nodemailer";

class mailapi 
{
  sendmail(userDetails) 
  {
    var v_url= "http://localhost:5000/verifyuser?email="+userDetails.email
    console.log(v_url);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "yourpassword",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: userDetails.email,
      subject: "verification mail stock manager",
      html:
        "<h1>Welcome to stock manager</h1><P>you have successfully registered to our site</P><h2>Username : " +
        userDetails.email +
        " </h2><h2>Password : " +
        userDetails.password +
        " </h2><h3>Click on the link below to verify account</h3>"+v_url
};

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}
export default new mailapi();
