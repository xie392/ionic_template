import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { Group } from './group'

@Entity('group_notice')
export class GroupNotice {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'bigint', default: 0, comment: '群 id' })
	groupId!: number

	@Column({ type: 'varchar', default: '', comment: '公告标题' })
	title!: string

	@Column({ type: 'text', default: '', comment: '公告内容' })
	content!: string

	@CreateDateColumn({ type: 'numeric', default: () => 'CURRENT_TIMESTAMP', comment: '公告时间' })
	time!: number

	@Column({ type: 'varchar', default: '', comment: '公告作者id' })
	authorId!: string

	@ManyToOne(() => Group, (group) => group.notice, {
		cascade: ['insert']
	})
	group!: Group
}
