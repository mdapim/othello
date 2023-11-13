/* eslint-disable */
import * as AWS from '@aws-sdk/client-ses'

const SESSION_CONFIG = {
  credentials: {
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY
  },
  region: process.env.REACT_APP_AWS_REGION
}
// eslint-disable-next-line
const sesClient = new AWS.SESClient(SESSION_CONFIG)

export default async function sendEmail(recipientEmail, details) {
  const params = {
    Source: process.env.REACT_APP_AWS_SES_SENDER,
    Destination: {
      ToAddresses: [recipientEmail]
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
  // eslint-disable-next-line
  try {
    // eslint-disable-next-line
    const sendEmailCmd = new AWS.SendEmailCommand(params)
    // eslint-disable-next-line
    const res = await sesClient.send(sendEmailCmd)
    return 'sent'
  } catch (error) {
    return 'failed'
  }
}
