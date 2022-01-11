import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'ignytek@gmail.com',
    Destination: {
      ToAddresses: ['ignytek@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from me',
        },
      },
      Subject: {
        Data: 'Test Email',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
