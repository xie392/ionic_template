import { injectable, inject } from 'inversify'
import { GroupMembersEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class GroupMembersService {
	constructor(
		@inject(GroupMembersEntity)
		private readonly repo: Repository<GroupMembersEntity>
	) {}
}
