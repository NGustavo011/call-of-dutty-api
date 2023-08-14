export const bo2AttachmentPath = {
	get: {
		security: [{
			apiKeyAuth: []
		}],
		tags: ['BO2'],
		summary: 'Route to list BO2 attachments.',
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
				name: 'gunType',
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
							$ref: '#/schemas/bo2Attachment'
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
  