CREATE TABLE `survey_answer` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`answer` TEXT NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`answer_date` DATETIME(6) NULL DEFAULT NULL,
	`answer_int` INT(11) NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
