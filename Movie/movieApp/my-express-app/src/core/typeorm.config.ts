import { DataSource } from 'typeorm';
import { config } from './env.config'; // To load environment variables

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'localhost', // MongoDB host or online service
  port: 27017, // MongoDB default port
  database: 'movieApp', // Database name
  username: '', // Optional for MongoDB
  password: '', // Optional for MongoDB
  synchronize: true, // Set to true in development for automatic schema sync
  logging: true, // Optional: log queries
  entities: [
    // Your entities will go here (e.g., Movie, User)
  ],
  useUnifiedTopology: true, // MongoDB connection option
  useNewUrlParser: true, // MongoDB connection option
});
