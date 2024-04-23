import { injectable, inject } from 'inversify'
import { ContactEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class ContactService {
	constructor(
		@inject(ContactEntity)
		private readonly repo: Repository<ContactEntity>
	) {}
}
