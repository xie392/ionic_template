import { injectable, inject } from 'inversify'
import { GroupMessagesEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class GroupMessagesService {
	constructor(
		@inject('GroupMessagesRepository')
		private readonly repo: Repository<GroupMessagesEntity>
	) {}
}
