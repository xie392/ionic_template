import { FriendRelation } from '@/shared/enum'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('contact')
export class ContactEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', default: '', comment: '用户id' })
	userId!: string

	@Column({ type: 'varchar', default: '', comment: '用户昵称' })
	nickName!: string

	@Column({ type: 'varchar', default: '', comment: '用户头像' })
	avatar!: string

	@Column({ type: 'varchar', default: '', comment: '用户手机号' })
	phone!: string

	@Column({ type: 'varchar', default: '', comment: '用户邮箱' })
	email!: string

	@Column({ type: 'varchar', default: '', comment: '用户备注' })
	remark!: string

	@Column({ type: 'varchar', default: '', comment: '用户标签' })
	tag!: string

	@Column({ type: 'boolean', default: false, comment: '是否阅后即焚' })
	isBurn!: boolean

	@Column({ type: 'int', default: FriendRelation.FRIEND, comment: '好友关系' })
	relation!: number

	@Column({ type: 'varchar', default: '', comment: '好友分组' })
	group!: string

	@Column({ type: 'boolean', default: false, comment: '是否消息免打扰' })
	isMute!: boolean

	@Column({ type: 'int', default: 10, comment: '阅后即焚时间' })
	burnTime!: number

	@Column({ type: 'bigint', default: 0, comment: '对话id' })
	dialogId!: number

	@Column({ type: 'text', default: '', comment: '用户签名' })
	signature!: string

	@Column({ type: 'text', default: '', comment: '用户公钥' })
	publicKey!: string

	@Column({ type: 'text', default: '', comment: '用户共享密钥' })
	sharedKey!: string
}
