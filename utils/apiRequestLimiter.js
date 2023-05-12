const rateLimit = require("express-rate-limit");

// Use the limit rule as an application middleware
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
});
module.exports = apiRequestLimiter;
