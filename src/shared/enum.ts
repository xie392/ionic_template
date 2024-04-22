/**
 * 消息类型枚举
 * @enum {number}
 */
export enum MessageType {
	/** 错误消息 */
	ERROR = -1,
	/** 无内容 */
	NONE = 0,
	/** 文本 */
	TEXT = 1,
	/** 音频 */
	AUDIO = 2,
	/** 图片 */
	IMAGE = 3,
	/** 标注 */
	LABEL = 4,
	/** 通知 */
	NOTICE = 5,
	/** 文件 */
	FILE = 6,
	/** 视频文件 */
	VIDEO = 7,
	/** 表情回复 */
	EMOJI = 8,
	/** 语音通话消息 */
	VOICE = 9,
	/** 视频通话消息  */
	CALL = 10,
	/** 撤回消息 */
	REVOKE = 11,
	/** 取消标注 */
	CANCEL_LABEL = 12
}

/**
 * 消息状态枚举
 * @enum {number}
 */
export enum MessageStatus {
	/** 发送中 */
	SENDING = 0,
	/** 已发送 */
	SENT = 1,
	/** 发送失败 */
	FAILED = 2
}

/**
 * 好友关系
 * @enum {number}
 */
export enum FriendRelation {
	/** 已删除或不存在 */
	STRANGER = 0,
	/** 好友 */
	FRIEND = 1,
	/** 黑名单 */
	BLACKLIST = 2
}
