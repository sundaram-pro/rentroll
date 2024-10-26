import { DataSource } from 'typeorm';
import * as SQLite from 'expo-sqlite';
import { User } from './entities/User';
import { Property } from './entities/Property';
import { Tenant } from './entities/Tenant';

const db = SQLite.openDatabaseSync('rentroll.db');

export const AppDataSource = new DataSource({
  database: 'rentroll.db',
  driver: SQLite,
  entities: [User, Property, Tenant],
  synchronize: true,  // Synchronizes entities with the database on startup
});
