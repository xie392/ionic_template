import { injectable, inject } from 'inversify'
import { GroupNoticeEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class GroupNoticeService {
	constructor(
		@inject(GroupNoticeEntity)
		private readonly repo: Repository<GroupNoticeEntity>
	) {}
}
