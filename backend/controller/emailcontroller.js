import nodemailer from "nodemailer";
//jis user ne register kiya h uska email and password receive kiya h
// yh function call kha se hoga -  register component se
function sendMail(email, password) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Account",
    html: `
    <h1>Welcome to BlogWallah</h1>
    <p>Your account has been created successfully.</p>

    <p>Please click the button below to verify your account.</p>

    <a
      href="${process.env.CLIENT_URL}/verify/${email}"
      style="
        background:#4CAF50;
        color:white;
        padding:10px 20px;
        text-decoration:none;
        border-radius:5px;
      "
    >
      Verify Account
    </a>
  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
export default sendMail;
