import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { GroupNoticeEntity } from './group_notice'

@Entity('group')
export class GroupEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'bigint', default: 0, comment: '群 id' })
	groupId!: number

	@Column({ type: 'varchar', default: '', comment: '群名称' })
	groupName!: string

	@Column({ type: 'varchar', default: '', comment: '群头像' })
	groupAvatar!: string

	@Column({ type: 'bigint', default: 1, comment: '群成员数量' })
	memberCount!: number

	// 群公告
	@OneToMany(() => GroupNoticeEntity, (notice) => notice.group)
	notice!: GroupNoticeEntity[]
}
