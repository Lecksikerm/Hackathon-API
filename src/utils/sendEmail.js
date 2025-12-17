
const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000
    });

    return transporter.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject,
        text
    });
};

module.exports = sendEmail;



