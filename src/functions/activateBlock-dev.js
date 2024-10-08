const { app } = require('@azure/functions');
const { logger } = require('@vtfk/logger')
const { handleUserActions } = require('../lib/jobs/handleUserActions.js')


app.http('activateBlock-dev', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'activateBlock-dev',
    handler: async (request, context) => {
        const logPrefix = 'activateBlock-dev'
        
        try {
            const response = await handleUserActions('activate')
            return { status: 200, jsonBody: response }
        } catch (error) {
            logger('error', [logPrefix, error])
            return { status: 400, body: error.message }
            
        }
    }
});
