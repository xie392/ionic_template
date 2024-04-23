import { injectable, inject } from 'inversify'
import { FriendMessagesEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class FriendMessagesService {
	constructor(
		@inject('FriendMessagesRepository')
		private readonly repo: Repository<FriendMessagesEntity>
	) {}
}
