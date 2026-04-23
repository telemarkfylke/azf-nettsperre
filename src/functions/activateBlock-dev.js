const { app } = require("@azure/functions");
const { logger } = require("@vestfoldfylke/loglady");
const { misc } = require("../../config.js");
const { handleUserActions } = require("../lib/jobs/handleUserActions.js");

app.http("activateBlock-dev", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "activateBlock-dev",
  handler: async (_request, _context) => {
    const logPrefix = "activateBlock-dev";
    console.log(misc.email_domain);
    try {
      const response = await handleUserActions("activate");
      return { status: 200, jsonBody: response };
    } catch (error) {
      logger.errorException(error, "{logPrefix}", logPrefix);
      return { status: 400, body: error.message };
    }
  }
});
