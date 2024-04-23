import { Container } from 'inversify'

import { UserService } from './user.service'
import { UserEntity } from '@/databases/entities'
import { Repository, EntityManager } from 'typeorm'
import { UserRepository, EntityManagerRepository } from '@/databases/connection'
// import { ContactService } from './contact.service'
// import { FriendMessagesService } from './firend_messages.service'
// import { GroupMessagesService } from './group_messages.service'
// import { GroupMembersService } from './group_members.service'
// import { GroupNoticeService } from './group_notice.service'
// import { GroupService } from './group.service'

const container = new Container()

container.bind<UserService>(UserService).to(UserService)

container.bind<Repository<UserEntity>>('UserRepository').toConstantValue(UserRepository)
container.bind<EntityManager>('EntityManager').toConstantValue(EntityManagerRepository)

// container.bind<ContactService>('ContactService').to(ContactService)
// container.bind<FriendMessagesService>('FriendMessagesService').to(FriendMessagesService)
// container.bind<GroupMessagesService>('GroupMessagesService').to(GroupMessagesService)
// container.bind<GroupMembersService>('GroupMembersService').to(GroupMembersService)
// container.bind<GroupNoticeService>('GroupNoticeService').to(GroupNoticeService)
// container.bind<GroupService>('GroupService').to(GroupService)

const userService = container.get<UserService>(UserService)
// const contactService = container.get<ContactService>('ContactService')
// const friendMessagesService = container.get<FriendMessagesService>('FriendMessagesService')
// const groupMessagesService = container.get<GroupMessagesService>('GroupMessagesService')
// const groupMembersService = container.get<GroupMembersService>('GroupMembersService')
// const groupNoticeService = container.get<GroupNoticeService>('GroupNoticeService')
// const groupService = container.get<GroupService>('GroupService')

export {
	userService
	// contactService,
	// friendMessagesService,
	// groupMessagesService,
	// groupMembersService,
	// groupNoticeService,
	// groupService
}
