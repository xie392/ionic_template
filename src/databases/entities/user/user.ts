import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('user')
export class User {
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

	@Column({ type: 'text', default: '', comment: '用户公钥' })
	publicKey!: string

	@Column({ type: 'text', default: '', comment: '用户私钥' })
	privateKey!: string

	@Column({ type: 'text', default: '', comment: '用户签名' })
	signature!: string
}
