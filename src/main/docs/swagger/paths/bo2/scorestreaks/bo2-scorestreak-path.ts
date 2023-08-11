export const bo2ScorestreakPath = {
    get: {
      security: [{
        apiKeyAuth: []
      }],
      tags: ['BO2'],
      summary: 'Route to list BO2 scorestreaks.',
      parameters: [
        {
          in: 'query',
          name: 'name',
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
                $ref: '#/schemas/bo2Scorestreak'
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
  