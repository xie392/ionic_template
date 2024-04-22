import { MessageStatus, MessageType } from '@/shared/enum'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('group_messages')
export class GroupMessages {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ default: 0, comment: '对话id' })
	dialogId!: number

	@Column({ default: 0, comment: '消息id' })
	messageId!: number

	@Column({ default: '', comment: '发送者id' })
	senderId!: string

	@Column({ default: '', comment: '接收者id' })
	receiverId!: string

	@Column({ type: 'text', default: '', comment: '消息内容' })
	content!: string

	@Column({ default: MessageType.TEXT, comment: '消息类型' })
	type!: MessageType

	@Column({ default: MessageStatus.SENT, comment: '消息状态' })
	status!: MessageStatus

	@CreateDateColumn({ type: 'timestamp', name: 'createTime', comment: '创建时间' })
	createTime!: Date

	@CreateDateColumn({ type: 'timestamp', name: 'updateTime', comment: '更新时间' })
	updateTime!: Date

	@Column({ default: false, comment: '是否已经被删除' })
	isDelete!: boolean

	@Column({ default: false, comment: '是否已读' })
	isRead!: boolean

	@Column({ default: false, comment: '是否撤回' })
	isRevoke!: boolean

	@Column({ type: 'timestamp', name: 'revokeTime', comment: '撤回时间' })
	revokeTime!: string

	@Column({ default: '', comment: '撤回人id' })
	revokeBy!: string

	@Column({ default: '', comment: '消息附加信息, 例如图片url, 视频url等, json格式, 前端根据类型解析' })
	extra!: string

	@Column({ default: 0, comment: '回复消息id' })
	replyId!: number

	@Column({ default: 0, comment: '消息id' })
	groupId!: number

	@Column({ default: [], comment: 'at成员 id' })
	at!: string[]

	@Column({ default: false, comment: '是否 at 所有人' })
	atAll!: boolean
}
