import { DataSource } from 'typeorm'
import dataSource from './connection'
// import commonDataSource from './datasources/common'
import sqliteParams from './sqlite_params'

export const initializeDataSources = async () => {
	// 检查 sqlite 连接一致性
	await sqliteParams.connection.checkConnectionsConsistency().catch((e) => {
		console.log(e)
		return {}
	})

	// 循环遍历数据源
	for (const mDataSource of [dataSource]) {
		// 初始化
		await mDataSource.dataSource.initialize()
		if (mDataSource.dataSource.isInitialized) {
			// 运行迁移
			await mDataSource.dataSource.runMigrations()
		}
		if (sqliteParams.platform === 'web') {
			await sqliteParams.connection.saveToStore(mDataSource.dbName)
		}
	}
}

export const getCountOfElements = async (connection: DataSource, entity: any): Promise<number> => {
	// 获取实体的存储库
	const repository = connection.getRepository(entity)
	// 使用count()方法查询表中元素的个数
	const count = await repository.count()

	return count
}
