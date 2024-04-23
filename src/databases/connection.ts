import { DataSource, Repository, type DataSourceOptions } from 'typeorm'
import sqliteParams from './sqlite_params'
import * as entities from './entities'
import * as migrations from './migrations'

// Author Database Name
const dbName = 'coss-sqlite'

const dataSourceConfig: DataSourceOptions = {
	name: 'cossConnection',
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

const UserRepository = dataSource.getRepository(entities.UserEntity)
const ContactRepository = dataSource.getRepository(entities.ContactEntity)
const FriendMessagesRepository = dataSource.getRepository(entities.FriendMessagesEntity)
const GroupMessagesRepository = dataSource.getRepository(entities.GroupMessagesEntity)
const GroupMembersRepository = dataSource.getRepository(entities.GroupMembersEntity)
const GroupNoticeRepository = dataSource.getRepository(entities.GroupNoticeEntity)
const GroupRepository = dataSource.getRepository(entities.GroupEntity)

const EntityManagerRepository = dataSource.manager

export {
	UserRepository,
	ContactRepository,
	FriendMessagesRepository,
	GroupMessagesRepository,
	GroupMembersRepository,
	GroupNoticeRepository,
	GroupRepository,
	EntityManagerRepository
}

export default {
	dataSource,
	dbName
}
