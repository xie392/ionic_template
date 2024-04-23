import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { GroupMessagesEntity } from './group_messages'

@Entity('group_at')
export class GroupAtEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'bigint', default: 0, comment: '群消息 id' })
	messageId!: number

	@Column({ type: 'bigint', default: 0, comment: '群 id' })
	groupId!: number

	@Column({ type: 'varchar', default: '', comment: '用户 id' })
	userId!: string

	@Column({ type: 'varchar', default: '', comment: '用户昵称' })
	nickName!: string

	@ManyToOne(() => GroupMessagesEntity, (group) => group.at, {
		cascade: ['insert']
	})
	message!: GroupMessagesEntity
}
