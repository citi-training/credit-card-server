# credit-card-server


To run the back-end, navigate to the folder the project is stored in and enter "serverless deploy" in a command terminal. Next, various endpoints such as GET and POST will be outputted. Enter the corresponding endpoints in an API client such as Postman to view the output.

For the GET request, enter the unique transaction id from your table in the {id} field of the GET request.
For the POST request, enter the JSON object in the body section of Postman.

Be sure to enter the correct ARN in the serverless.yml file. The ARN can be found in the DynamoDB database.
