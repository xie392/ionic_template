import { injectable, inject } from 'inversify'
import { ContactEntity } from '@/databases/entities'
import { Repository } from 'typeorm'

@injectable()
export class ContactService {
	constructor(
		@inject('ContactRepository')
		private readonly repo: Repository<ContactEntity>
	) {}
}
