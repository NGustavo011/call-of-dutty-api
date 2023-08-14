export const bo2MapSchema = {
	type: 'array',
	items: {
		properties: {
			name: {
				type: 'string'
			},
			bundle: {
				type: 'string'
			},
			location: {
				type: 'string'
			},
			date: {
				type: 'string'
			},
			terrain: {
				type: 'string'
			},
			modes: {
				type: 'string'
			},
			typeOfCombat: {
				type: 'string'
			},
			icon: {
				type: 'string'
			},
			hudIcon: {
				type: 'string'
			}
		}
	}
};
  