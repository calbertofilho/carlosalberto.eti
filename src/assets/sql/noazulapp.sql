DROP DATABASE noazulapp;

CREATE DATABASE noazulapp CHARACTER SET latin1 COLLATE latin1_swedish_ci;
ALTER DATABASE noazulapp CHARSET=Latin1 COLLATE=latin1_swedish_ci;

USE noazulapp;

CREATE TABLE IF NOT EXISTS `tb_users` (
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NOT NULL,
    `user_pwd` VARCHAR(255) NOT NULL,
    `user_email` VARCHAR(50) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE INDEX `UK_user_name` (`user_name` ASC) VISIBLE,
    CONSTRAINT `PK_user_id` PRIMARY KEY (`user_id`)
);
INSERT INTO `tb_users` (`user_name`, `user_pwd`, `user_email`) VALUES ('Carlos Filho', AES_ENCRYPT('227567', 'CFilho@@!@'), 'calbertofilho@gmail.com');
SELECT * FROM `tb_users`;
SELECT `user_id`, `user_name`, AES_DECRYPT(`user_pwd`, 'CFilho@@!@') AS `passwd`, `user_email`, `created_at` FROM `tb_users`;

CREATE TABLE IF NOT EXISTS `tb_payment_methods` (
	`payment_method_id` INT NOT NULL AUTO_INCREMENT,
    `payment_method_description` VARCHAR(100) NOT NULL,
    CONSTRAINT `PK_payment_method_id` PRIMARY KEY(`payment_method_id`)
);
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Boleto bancário');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Cartão de crédito');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Cartão de débito');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Cheque');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('DDA');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Débito automático');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Espécie');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('PIX');
INSERT INTO `tb_payment_methods` (`payment_method_description`) VALUES ('Transferência');
SELECT * FROM `tb_payment_methods`;

CREATE TABLE IF NOT EXISTS `tb_categories` (
	`category_id` INT NOT NULL AUTO_INCREMENT,
    `category_description` VARCHAR(100) NOT NULL,
    `category_color` VARCHAR(6) NOT NULL,
    `category_expense` BOOLEAN NOT NULL,
    `category_user_id` INT NOT NULL,
    CONSTRAINT `PK_category_id` PRIMARY KEY(`category_id`),
    INDEX `FK_category_user` (`category_user_id` ASC) VISIBLE,
    CONSTRAINT `FK_category_user` FOREIGN KEY(`category_user_id`) REFERENCES `tb_users`(`user_id`)
);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Capitalização', 'a3a948', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Compras', 'edb92e', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Comunicação', 'f85931', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Cuidado pessoal', 'ce1836', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Despesa financeira', '009989', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Dívida', '668284', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Doação', 'e04644', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Educação', 'aab3ab', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Empregado doméstico', 'ffbe40', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Empréstimo', 'e6ac27', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Financiamento', '6a4a3c', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Imposto', 'ff9c5b', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Investimento', 'e0e4cc', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Lazer', 'ece5ce', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Mercado', 'fa2a00', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Moradia', '4dbce9', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Presente', '3fb8af', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Restaurante / Bar', '542437', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Saque', 'b576ad', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Saúde', '4dbce9', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Serviço', 'f07241', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Taxa / Tarifa', 'bcbcbc', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Transporte', '2e2633', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Vestuário', '668284', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Viagem', 'e8caa4', true, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('13º salário', '5d4157', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Abono de férias', '838689', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Adicional', 'a8caba', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Aluguel', 'cad7b2', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Aposentadoria / Pensão', 'ebe3aa', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Auxílio', 'e2f7ce', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Bonificação', '9de0ad', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Comissão', 'fad089', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Doação', '2e2633', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Empréstimo', 'a8caba', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Hora extra', 'c6a49a', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Investimento', 'b38184', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Provento', 'd4ee5e', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Reembolso', 'dad8a7', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Salário', 'e08e79', false, 1);
INSERT INTO `tb_categories` (`category_description`, `category_color`, `category_expense`, `category_user_id`) VALUES ('Trabalho temporário', '036564', false, 1);
SELECT * FROM `tb_categories`;

CREATE TABLE IF NOT EXISTS `tb_account_types` (
	`account_type_id` INT NOT NULL AUTO_INCREMENT,
    `account_type_description` VARCHAR(100) NOT NULL,
    CONSTRAINT `PK_account_type_id` PRIMARY KEY(`account_type_id`)
);
INSERT INTO `tb_account_types` (`account_type_description`) VALUES ('Conta corrente');
INSERT INTO `tb_account_types` (`account_type_description`) VALUES ('Conta de pagamentos');
INSERT INTO `tb_account_types` (`account_type_description`) VALUES ('Conta salário');
INSERT INTO `tb_account_types` (`account_type_description`) VALUES ('Dinheiro');
INSERT INTO `tb_account_types` (`account_type_description`) VALUES ('Investimentos');
INSERT INTO `tb_account_types` (`account_type_description`) VALUES ('Poupança');
SELECT * FROM `tb_account_types`;

CREATE TABLE IF NOT EXISTS `tb_accounts` (
    `account_id` INT NOT NULL AUTO_INCREMENT,
    `account_name` VARCHAR(200) NOT NULL,
    `account_description` VARCHAR(200) NULL DEFAULT NULL,
    `account_type_id` INT NOT NULL,
    `account_color` VARCHAR(6) NOT NULL,
    `account_amount` FLOAT NOT NULL DEFAULT 0.0,
    `account_user_id` INT NOT NULL,
    CONSTRAINT `PK_account_id` PRIMARY KEY (`account_id`),
    INDEX `FK_account_type` (`account_type_id` ASC) VISIBLE,
    INDEX `FK_account_user` (`account_user_id` ASC) VISIBLE,
    CONSTRAINT `FK_account_type` FOREIGN KEY(`account_type_id`) REFERENCES `tb_account_types`(`account_type_id`),
    CONSTRAINT `FK_account_user` FOREIGN KEY(`account_user_id`) REFERENCES `tb_users`(`user_id`)
);
INSERT INTO `tb_accounts` (`account_name`, `account_type_id`, `account_color`, `account_user_id`) VALUES ('Carteira', 4, 'b7d968', 1);
SELECT * FROM `tb_accounts`;

CREATE TABLE IF NOT EXISTS `tb_transactions` (
    `transaction_id` INT NOT NULL AUTO_INCREMENT,
    `transaction_description` VARCHAR(400) NOT NULL,
    `transaction_category_id` INT NOT NULL,
    `transaction_payment_method_id` INT NOT NULL,
    `transaction_due_date` DATETIME NOT NULL,
    `transaction_payment_date` DATETIME NULL DEFAULT NULL,
    `transaction_value` FLOAT NOT NULL,
    `transaction_account_id` INT NOT NULL,
    `transaction_user_id` INT NOT NULL,
    CONSTRAINT `PK_transaction_id` PRIMARY KEY (`transaction_id`),
    INDEX `FK_transaction_category` (`transaction_category_id` ASC) VISIBLE,
    INDEX `FK_transaction_payment_method` (`transaction_payment_method_id` ASC) VISIBLE,
    INDEX `FK_transaction_account` (`transaction_account_id` ASC) VISIBLE,
    INDEX `FK_transaction_user` (`transaction_user_id` ASC) VISIBLE,
    CONSTRAINT `FK_transaction_category` FOREIGN KEY(`transaction_category_id`) REFERENCES `tb_categories`(`category_id`),
    CONSTRAINT `FK_transaction_payment_method` FOREIGN KEY(`transaction_payment_method_id`) REFERENCES `tb_payment_methods`(`payment_method_id`),
    CONSTRAINT `FK_transaction_account` FOREIGN KEY(`transaction_account_id`) REFERENCES `tb_accounts`(`account_id`),
    CONSTRAINT `FK_transaction_user` FOREIGN KEY(`transaction_user_id`) REFERENCES `tb_users`(`user_id`)
);
INSERT INTO `tb_transactions` (`transaction_description`, `transaction_category_id`, `transaction_payment_method_id`, `transaction_due_date`, `transaction_value`, `transaction_account_id`, `transaction_user_id`) VALUES ('Salário', 40, 7, STR_TO_DATE('01/10/2021', '%d/%m/%Y'), 4500, 1, 1);
INSERT INTO `tb_transactions` (`transaction_description`, `transaction_category_id`, `transaction_payment_method_id`, `transaction_due_date`, `transaction_value`, `transaction_account_id`, `transaction_user_id`) VALUES ('McDonalds', 18, 2, STR_TO_DATE('05/10/2021', '%d/%m/%Y'), 32.12, 1, 1);
INSERT INTO `tb_transactions` (`transaction_description`, `transaction_category_id`, `transaction_payment_method_id`, `transaction_due_date`, `transaction_value`, `transaction_account_id`, `transaction_user_id`) VALUES ('Burger King', 18, 7, STR_TO_DATE('15/10/2021', '%d/%m/%Y'), 28, 1, 1);
INSERT INTO `tb_transactions` (`transaction_description`, `transaction_category_id`, `transaction_payment_method_id`, `transaction_due_date`, `transaction_value`, `transaction_account_id`, `transaction_user_id`) VALUES ('Aluguel Apto', 16, 6, STR_TO_DATE('26/10/2021', '%d/%m/%Y'), 2300, 1, 1);
SELECT `transaction_id`, `transaction_description`, `transaction_category_id`, `transaction_payment_method_id`, DATE_FORMAT(`transaction_due_date`, '%d/%m/%Y') AS due_date, DATE_FORMAT(`transaction_payment_date`, '%d/%m/%Y') AS payment_date, CONCAT('R$ ', FORMAT(`transaction_value`, 2, 'de_DE')) AS value, `transaction_account_id`, `transaction_user_id` FROM `tb_transactions`;
SELECT * FROM `tb_transactions`;

SELECT
  `transaction_id` AS 'id',
  `transaction_description` AS 'description',
  `category_description` AS 'category',
  `payment_method_description` AS 'payment_method',
  DATE_FORMAT(`transaction_due_date`, '%d/%m/%Y') AS 'due_date',
  DATE_FORMAT(`transaction_payment_date`, '%d/%m/%Y') AS 'payment_date',
  CONCAT('R$ ', FORMAT(`transaction_value`, 2, 'de_DE')) AS 'value',
  `account_name` AS 'account',
  `user_name` AS 'user'
FROM
  `tb_transactions`,
  `tb_categories`,
  `tb_payment_methods`,
  `tb_accounts`,
  `tb_users`
WHERE
    `transaction_category_id` = `category_id`
  AND
    `transaction_payment_method_id` = `payment_method_id`
  AND
    `transaction_account_id` = `account_id`
  AND
    `transaction_user_id` = `user_id`;
