export const bo2AttachmentSchema = {
	type: 'array',
	items: {
		properties: {
			name: {
				type: 'string'
			},
			gunType: {
				type: 'array',
				items: {
					type: 'string'
				}
			},
			unlockedAt: {
				type: 'array',
				items: {
					type: 'string'
				}      
			},
			icon: {
				type: 'string'
			}
		}
	}
};
  