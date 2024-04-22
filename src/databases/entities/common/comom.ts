import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('common')
export class Common {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', default: '', comment: '用户id' })
	userId!: string

	@Column({ type: 'varchar', default: '', comment: '邮箱' })
	email!: string

	@Column({ type: 'varchar', default: '', comment: '密码' })
	password!: string
}
