import { FriendRelation, MessageStatus, MessageType } from '@/shared/enum'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity('contact')
export class Contact {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ default: '', comment: '用户id' })
	userId!: string

	@Column({ default: '', comment: '用户昵称' })
	nickName!: string

	@Column({ default: '', comment: '用户头像' })
	avatar!: string

	@Column({ default: '', comment: '用户手机号' })
	phone!: string

	@Column({ default: '', comment: '用户邮箱' })
	email!: string

	@Column({ default: '', comment: '用户备注' })
	remark!: string

	@Column({ default: '', comment: '用户标签' })
	tag!: string

	@Exclude({ toPlainOnly: true })
	@Column({ default: false, comment: '是否阅后即焚' })
	isBurn!: boolean

	@Column({ default: FriendRelation.FRIEND, comment: '好友关系' })
	relation!: number

	// TODO: Add more columns
}
