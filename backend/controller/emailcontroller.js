// import nodemailer from "nodemailer";
//jis user ne register kiya h uska email and password receive kiya h
// yh function call kha se hoga -  register component se

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail(email) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verify Your Account",
      html: `
        <h1>Welcome to BLOSCOT</h1>

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
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.log("Email Error:", error);
  }
}

export default sendMail;


// function sendMail(email, password) {
//   var transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     connectionTimeout: 30000,
//     greetingTimeout: 30000,
//     socketTimeout: 30000,
//   });

//   var mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Verify Your Account",
//     html: `
//     <h1>Welcome to Bloscot</h1>
//     <p>Your account has been created successfully.</p>

//     <p>Please click the button below to verify your account.</p>

//     <a
//       href="${process.env.CLIENT_URL}/verify/${email}"
//       style="
//         background:#4CAF50;
//         color:white;
//         padding:10px 20px;
//         text-decoration:none;
//         border-radius:5px;
//       "
//     >
//       Verify Account
//     </a>
//   `,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// }
// export default sendMail;
