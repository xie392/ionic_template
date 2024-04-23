import { injectable, inject } from 'inversify'
import { UserEntity } from '@/databases/entities'
import { Repository, EntityManager } from 'typeorm'
import { plainToInstance } from 'class-transformer'

@injectable()
export class UserService {
	constructor(
		@inject('UserRepository')
		private readonly repo: Repository<UserEntity>,
		@inject('EntityManager')
		private readonly manager: EntityManager
	) {}

	/**
	 * 查找用户
	 * @param {string} id 用户 id
	 * @returns {Promise<UserEntity>}
	 */
	async findUserById(id: number): Promise<UserEntity> {
		const result = await this.repo.findBy({ id })
		return result[0]
	}

	/**
	 * 添加用户
	 * @param {UserEntity} user 用户实体
	 * @returns {Promise<UserEntity>}
	 */
	async createUser(user: UserEntity): Promise<UserEntity> {
		// const data = plainToInstance(UserEntity, user, { ignoreDecorators: true })
		// this.repo.save(user)
		// const result = await this.manager.transaction(async (transactionalEntityManager) => {
		// 	return await transactionalEntityManager.save<UserEntity>(data)
		// })
		// console.log('result', result)
		return await this.repo.save(user)
	}

	/**
	 * 更新用户
	 * @param {UserEntity} user 用户实体
	 * @returns {Promise<UserEntity>}
	 */
	async updateUser(user: UserEntity): Promise<UserEntity> {
		return await this.repo.save(user)
	}

	/**
	 * 删除用户
	 * @param {number} id 用户 id
	 * @returns {Promise<void>}
	 */
	async deleteUser(id: number): Promise<void> {
		await this.repo.delete(id)
	}

	/**
	 * 获取所有用户
	 * @returns {Promise<UserEntity[]>}
	 */
	async getAllUsers(): Promise<UserEntity[]> {
		return await this.repo.find()
	}
}
