export const bo2GrenadePath = {
	get: {
		security: [{
			apiKeyAuth: []
		}],
		tags: ['BO2'],
		summary: 'Route to list BO2 grenades.',
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
				name: 'type',
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
							$ref: '#/schemas/bo2Grenade'
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
};
  