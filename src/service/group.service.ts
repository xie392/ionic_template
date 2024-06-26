import { injectable, inject } from 'inversify'
import { GroupEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class GroupService {
	constructor(
		@inject('GroupRepository')
		private readonly repo: Repository<GroupEntity>
	) {}
}
