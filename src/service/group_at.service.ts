import { injectable, inject } from 'inversify'
import { GroupAtEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class GroupAtService {
	constructor(
		@inject('GroupAtRepository')
		private readonly repo: Repository<GroupAtEntity>
	) {}
}
