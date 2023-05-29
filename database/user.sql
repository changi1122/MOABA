CREATE TABLE `users` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`created_at` DATETIME(6) NULL DEFAULT NULL,
	`deleted_at` DATETIME(6) NULL DEFAULT NULL,
	`email` VARCHAR(512) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`is_banned` BIT(1) NOT NULL,
	`is_deleted` BIT(1) NOT NULL,
	`is_locked` BIT(1) NOT NULL,
	`password` VARCHAR(300) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`role` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`username` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`attempt_id` BIGINT(20) NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `UK_r43af9ap4edm43mmtq01oddj6` (`username`) USING BTREE,
	UNIQUE INDEX `UK_hs4tqdsqdhq87k2mo6w4yhl71` (`attempt_id`) USING BTREE,
	CONSTRAINT `FKs4rjqs4udaere8q7udq91fg19` FOREIGN KEY (`attempt_id`) REFERENCES `moaba`.`attempt` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
