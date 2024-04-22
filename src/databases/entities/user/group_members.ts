import { GroupRole } from '@/shared/enum'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('group_members')
export class GroupMembers {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'bigint', default: 0, comment: '群 id' })
	groupId!: number

	@Column({ type: 'varchar', default: '', comment: '用户id' })
	userId!: string

	@Column({ type: 'varchar', default: '', comment: '用户昵称' })
	nickName!: string

	@Column({ type: 'varchar', default: '', comment: '用户头像' })
	avatar!: string

	@Column({ type: 'varchar', default: '', comment: '用户群昵称' })
	groupNickName!: string

	@Column({ type: 'int', enum: GroupRole, default: GroupRole.MEMBER, comment: '角色' })
	relation!: GroupRole
}
