import { swaggerComponents } from './components/swagger-components';
import { swaggerPaths } from './paths/swagger-paths';
import { swaggerSchemas } from './schemas/swagger-schemas';

export const swaggerConfig = {
	openapi: '3.0.0',
	info: {
		title: 'call-of-dutty-api',
		description: 'The call-of-duty-api project is an api developed by friends to provide simple and concrete information about games from this franchise that we love so much. I hope you put our work to good use and we are open to any suggestions.',
		version: '1.0.0'
	},
	servers: [{
		url: '/api'
	}],
	tags: [
		{
			name: 'BO2'
		}
	],
	paths: swaggerPaths,
	schemas: swaggerSchemas,
	components: swaggerComponents
};
