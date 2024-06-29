import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NEXT_PUBLIC_MAIL_EMAIL,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
} as SMTPTransport.Options);

type SendEmailDto = {
    sender: Mail.Address;
    receipients: Mail.Address[];
    subject: string;
    message: string;
    html: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, receipients, subject, message, html } = dto;

    return await transport.sendMail({
        from: sender,
        to: receipients,
        html: html,
        text: message,
        subject: subject,
    });
};
