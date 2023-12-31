import dotenv from 'dotenv';

dotenv.config();

export default {
	port: process.env.PORT ?? 3333,
	databaseUrl: process.env.DATABASE_URL ?? 'postgresql://pato:pato11@localhost:5432/cod?schema=public',
};