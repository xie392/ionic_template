import { Container } from 'inversify'
import { UserService } from './user.service'
import {
	ContactEntity,
	FriendMessagesEntity,
	GroupMessagesEntity,
	GroupMembersEntity,
	GroupNoticeEntity,
	GroupAtEntity,
	GroupEntity,
	UserEntity
} from '@/databases/entities'
import { Repository, EntityManager } from 'typeorm'
import {
	UserRepository,
	ContactRepository,
	FriendMessagesRepository,
	GroupMessagesRepository,
	GroupMembersRepository,
	GroupNoticeRepository,
	GroupRepository,
	GroupAtRepository,
	EntityManagerRepository
} from '@/databases/connection'
import { ContactService } from './contact.service'
import { FriendMessagesService } from './firend_messages.service'
import { GroupMessagesService } from './group_messages.service'
import { GroupMembersService } from './group_members.service'
import { GroupNoticeService } from './group_notice.service'
import { GroupService } from './group.service'
import { GroupAtService } from './group_at.service'

const container = new Container()

container.bind<UserService>(UserService).to(UserService)
container.bind<ContactService>(ContactService).to(ContactService)
container.bind<FriendMessagesService>(FriendMessagesService).to(FriendMessagesService)
container.bind<GroupMessagesService>(GroupMessagesService).to(GroupMessagesService)
container.bind<GroupMembersService>(GroupMembersService).to(GroupMembersService)
container.bind<GroupNoticeService>(GroupNoticeService).to(GroupNoticeService)
container.bind<GroupService>(GroupService).to(GroupService)
container.bind<GroupAtService>(GroupAtService).to(GroupAtService)

container.bind<Repository<UserEntity>>('UserRepository').toConstantValue(UserRepository)
container.bind<Repository<ContactEntity>>('ContactRepository').toConstantValue(ContactRepository)
container.bind<Repository<FriendMessagesEntity>>('FriendMessagesRepository').toConstantValue(FriendMessagesRepository)
container.bind<Repository<GroupMessagesEntity>>('GroupMessagesRepository').toConstantValue(GroupMessagesRepository)
container.bind<Repository<GroupMembersEntity>>('GroupMembersRepository').toConstantValue(GroupMembersRepository)
container.bind<Repository<GroupNoticeEntity>>('GroupNoticeRepository').toConstantValue(GroupNoticeRepository)
container.bind<Repository<GroupEntity>>('GroupRepository').toConstantValue(GroupRepository)
container.bind<Repository<GroupAtEntity>>('GroupAtRepository').toConstantValue(GroupAtRepository)
container.bind<EntityManager>('EntityManager').toConstantValue(EntityManagerRepository)

const userService = container.get<UserService>(UserService)
const contactService = container.get<ContactService>(ContactService)
const friendMessagesService = container.get<FriendMessagesService>(FriendMessagesService)
const groupMessagesService = container.get<GroupMessagesService>(GroupMessagesService)
const groupMembersService = container.get<GroupMembersService>(GroupMembersService)
const groupNoticeService = container.get<GroupNoticeService>(GroupNoticeService)
const groupService = container.get<GroupService>(GroupService)
const groupAtService = container.get<GroupAtService>(GroupAtService)

export {
	userService,
	contactService,
	friendMessagesService,
	groupMessagesService,
	groupMembersService,
	groupNoticeService,
	groupService,
	groupAtService
}
