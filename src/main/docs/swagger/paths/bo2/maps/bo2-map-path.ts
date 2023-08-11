export const bo2MapPath = {
    get: {
      security: [{
        apiKeyAuth: []
      }],
      tags: ['BO2'],
      summary: 'Route to list BO2 maps.',
      parameters: [
        {
          in: 'query',
          name: 'name',
          required: false,
          schema: {
            type: 'string'
          }
        },
        {
          in: 'query',
          name: 'bundle',
          required: false,
          schema: {
            type: 'string'
          }
        }
      ],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/bo2Map'
              }
            }
          }
        },
        404: {
          $ref: '#components/notFound'
        },
        500: {
          $ref: '#components/serverError'
        }
      }
    }
  }
  