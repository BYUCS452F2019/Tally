// Require and initialize outside of your main handler

const mysql = require('serverless-mysql')({
  config: {
    database: process.env.AURORA_DB_NAME,
    user: process.env.AURORA_USERNAME,
    password: process.env.AURORA_PASSWORD,
    host: process.env.AURORA_HOST,
    port: process.env.AURORA_PORT
  }
});

// Async query handler
exports.sqs = async (event, context) => {
  // Get your query
  const record = event.Records[0];
  const { query } = JSON.parse(record.body);
  
  // Run your query
  let results = await mysql.query(query);

  // Run clean up function
  await mysql.end();

  // Return the results
  return results;
};

// Sync query handler
exports.query = async (event, context) => {
  // Get your query
  const data = event.body ? JSON.parse(event.body) : {};
  const { query } = data;
  
  // Run your query
  let results = await mysql.query(query);

  // Run clean up function
  await mysql.end();

  // Return the results
  return results;
};
