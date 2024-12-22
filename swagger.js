const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specify OpenAPI version if needed
    info: {
      title: 'Task API001234'
      ,
      version: '1.0.0',
      description: 'Task API Documentation',
    },
  },
  apis: ['./routes/*.js'], // Path to API documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDocs,
};

