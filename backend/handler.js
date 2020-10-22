const awsServerlessExpr = require("aws-serverless-express");
const app = require("./src");

const server = awsServerlessExpr.createServer(app);

exports.handler = (event, context) =>
  awsServerlessExpr.proxy(server, event, context);
