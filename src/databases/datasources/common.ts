import { DataSource, type DataSourceOptions } from 'typeorm'
import sqliteParams from '../sqlite_params'
import * as entities from '../entities/common'
import * as migrations from '../migrations/common'

const dbName = 'coss-common-sqlite'

const dataSourceConfig: DataSourceOptions = {
	name: 'commonConnection',
	type: 'capacitor',
	driver: sqliteParams.connection,
	database: dbName,
	mode: 'no-encryption',
	entities: entities,
	migrations: migrations, //["../migrations/author/*{.ts,.js}"]
	subscribers: [],
	logging: [/*'query',*/ 'error', 'schema'],
	synchronize: false, // !!! 如果设置为“true”，您将丢失数据库中的所有数据
	migrationsRun: false
}
export const dataSource = new DataSource(dataSourceConfig)

export default {
	dataSource,
	dbName
}
