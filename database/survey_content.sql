CREATE TABLE `survey_content` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`body` MEDIUMTEXT NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`orders` INT(11) NULL DEFAULT NULL,
	`subtitle` TEXT NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`type` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`survey_id` BIGINT(20) NULL DEFAULT NULL,
	`answer_id` BIGINT(20) NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `UK_8k75494fia46eyquty8dkb13b` (`answer_id`) USING BTREE,
	INDEX `FK3nausnpb8e91l6p99hk5gt6lg` (`survey_id`) USING BTREE,
	CONSTRAINT `FK3nausnpb8e91l6p99hk5gt6lg` FOREIGN KEY (`survey_id`) REFERENCES `moaba`.`survey` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
	CONSTRAINT `FK44ag2e7o05n8524h67gv6cgio` FOREIGN KEY (`answer_id`) REFERENCES `moaba`.`survey_answer` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
