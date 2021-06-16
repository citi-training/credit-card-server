'use strict';

//const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  //const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
 

  const params = {
    TableName: "Transactions",
    Item: {
      id: data.id,
      employee_id: data.employee_id,
      date: data.date,
      card_number: data.card_number,
      business_name: data.business_name,
      amount: data.amount
    },
  };

  // write the transaction to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the transaction item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
