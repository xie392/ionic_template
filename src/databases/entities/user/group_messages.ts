import { MessageStatus, MessageType } from '@/shared/enum'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('group_messages')
export class GroupMessages {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'bigint', default: 0, comment: '对话id' })
	dialogId!: number

	@Column({ type: 'bigint', default: 0, comment: '消息id' })
	messageId!: number

	@Column({ type: 'varchar', default: '', comment: '发送者id' })
	senderId!: string

	@Column({ type: 'varchar', default: '', comment: '接收者id' })
	receiverId!: string

	@Column({ type: 'text', default: '', comment: '消息内容' })
	content!: string

	@Column({ type: 'int', enum: MessageType, default: MessageType.TEXT, comment: '消息类型' })
	type!: MessageType

	@Column({ type: 'int', enum: MessageStatus, default: MessageStatus.SENT, comment: '消息状态' })
	status!: MessageStatus

	@CreateDateColumn({ type: 'numeric', name: 'createTime', comment: '创建时间' })
	createTime!: number

	@CreateDateColumn({ type: 'numeric', name: 'updateTime', comment: '更新时间' })
	updateTime!: number

	@Column({ type: 'boolean', default: false, comment: '是否已经被删除' })
	isDelete!: boolean

	@Column({ type: 'boolean', default: false, comment: '是否已读' })
	isRead!: boolean

	@Column({ type: 'boolean', default: false, comment: '是否撤回' })
	isRevoke!: boolean

	@Column({ type: 'numeric', name: 'revokeTime', comment: '撤回时间' })
	revokeTime!: number

	@Column({ type: 'varchar', default: '', comment: '撤回人id' })
	revokeBy!: string

	@Column({ type: 'text', default: '', comment: '消息附加信息, 例如图片url, 视频url等, json格式, 前端根据类型解析' })
	extra!: string

	@Column({ type: 'int', default: 0, comment: '回复消息id' })
	replyId!: number

	@Column({ type: 'int', default: 0, comment: '消息id' })
	groupId!: number

	@Column({ type: 'simple-array', default: [], comment: 'at成员 id' })
	at!: string[]

	@Column({ type: 'boolean', default: false, comment: '是否 at 所有人' })
	atAll!: boolean
}
