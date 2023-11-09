import * as AWS from '@aws-sdk/client-ses'
import 'dotenv/config'

const SESSION_CONFIG = {
  credentials: {
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.ACCESS_KEY
  },
  region: process.env.AWS_REGION
}

const sesClient = new AWS.SESClient(SESSION_CONFIG)

export default async function sendEmail(recipientEmial, details) {
  const params = {
    Source: process.env.AWS_SES_SENDER,
    Destination: {
      ToAddresses: [recipientEmial]
    },
    ReplyToAddress: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
          <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px;">
            <div style="background-color: #fff; border-radius: 10px; padding: 20px;">
              <h2 style="color: #333; margin-bottom: 20px;">Customer Reservation Details</h2>
              <p style="font-weight: bold; margin: 10px 0;">Full Name: ${details.name}</p>
              <p style="font-weight: bold; margin: 10px 0;">Phone Number: ${details.phone}</p>
              <p style="font-weight: bold; margin: 10px 0;">Email Address: ${details.email}</p>
              <p style="font-weight: bold; margin: 10px 0;">Event Time: ${details.time}</p>
              <p style="font-weight: bold; margin: 10px 0;">Booking Date: ${details.date}</p>
              <div style="border-top: 1px solid #ccc; padding-top: 10px;">
                <p style="font-weight: bold; margin: 10px 0;">Additional Information:</p>
                <p style="margin: 10px 0;"> ${details.message}</p>
              </div>
            </div>
          </body>   
          `
        },
        Text: {
          Charset: 'UTF-8',
          Data: `
          Customer Reservation Details

          Full Name: ${details.name}
          Phone Number: ${details.phone}
          Email Address: ${details.email}
          Event Time: ${details.time}
          Booking Date: ${details.date}
          
          Additional Information:
          ${details.message} 
          `
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `New Enquiry Request on ${details.date}</h3>`
      }
    }
  }

  try {
    const sendEmailCmd = new AWS.SendEmailCommand(params)
    const res = await sesClient.send(sendEmailCmd)
    console.log('Email has been sent!', res)
  } catch (error) {
    console.log('error sending email', error)
  }
}
const details = {
  name: 'John Doe',
  phone: '(555) 555-5555',
  email: 'johndoe@example.com',
  time: '7:00 PM',
  date: 'November 15, 2023',
  message:
    "We'd like a table for four by the window, and it's our anniversary celebration."
}
sendEmail('mikkay1@outlook.com', details)
