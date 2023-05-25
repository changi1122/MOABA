CREATE TABLE `survey` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`description` TEXT NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`group_category` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`main_content_order` INT(11) NULL DEFAULT NULL,
	`meeting_category` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`start_date_time` DATETIME(6) NULL DEFAULT NULL,
	`submit_deadline` DATETIME(6) NULL DEFAULT NULL,
	`title` TEXT NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
