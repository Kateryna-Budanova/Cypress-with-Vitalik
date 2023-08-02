// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err) => !err.message.includes("SecurityError: Failed to register a ServiceWorker for scope ('https://business.stage.dzing.com/') with script ('https://business.stage.dzing.com/service-worker.js'): The script has an unsupported MIME type ('text/html')."))