CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE utilizador(
id INT AUTO_INCREMENT NOT NULL,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE notas(
id INT AUTO_INCREMENT NOT NULL,
titulo VARCHAR(100) NOT NULL,
data_cria DATE NOT NULL,
data_ult_mod DATE NOT NULL,
descrição TEXT,
utilizador_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (utilizador_id) REFERENCES utilizador(id)
);

CREATE TABLE categorias_de_notas(
id INT AUTO_INCREMENT NOT NULL,
nome VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE notas_categorias_de_notas(
id INT AUTO_INCREMENT NOT NULL,
nota_id INT NOT NULL,
categoria_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (nota_id) REFERENCES notas(id),
FOREIGN KEY (categoria_id) REFERENCES categorias_de_notas(id)
);

SELECT * FROM categorias_de_notas;

SELECT * FROM notas;

SELECT * FROM notas_categorias_de_notas;

SELECT * FROM utilizador;

INSERT INTO utilizador
VALUES (id, nome, email),
(default, 'utilizador_teste_1','email_teste@example.com_1'),
(default, 'utilizador_teste_2','email_teste@example.com_1'),
(default, 'utilizador_teste_3','email_teste@example.com_1'),
(default, 'utilizador_teste_4','email_teste@example.com_1'),
(default, 'utilizador_teste_5','email_teste@example.com_1'),
(default, 'utilizador_teste_6','email_teste@example.com_1'),
(default, 'utilizador_teste_7','email_teste@example.com_1'),
(default, 'utilizador_teste_8','email_teste@example.com_1'),
(default, 'utilizador_teste_9','email_teste@example.com_1'),
(default, 'utilizador_teste_10','email_teste@example.com_1'),
(default, 'utilizador_teste_11','email_teste@example.com_1');

UPDATE categorias_de_notas
SET nome = 'finanças'
WHERE id = 1;

INSERT INTO notas
VALUES
(default, 'nota_001','2022/09/16', '2022/09/16','nota_001', '1'),
(default, 'nota_002','2022/09/16', '2022/09/16','nota_002', '2'),
(default, 'nota_003','2022/09/16', '2022/09/16','nota_003', '3'),
(default, 'nota_004','2022/09/16', '2022/09/16','nota_004', '4'),
(default, 'nota_005','2022/09/16', '2022/09/16','nota_005', '5'),
(default, 'nota_006','2022/09/16', '2022/09/16','nota_006', '6'),
(default, 'nota_007','2022/09/16', '2022/09/16','nota_007', '7'),
(default, 'nota_008','2022/09/16', '2022/09/16','nota_008', '8'),
(default, 'nota_009','2022/09/16', '2022/09/16','nota_009', '9'),
(default, 'nota_010','2022/09/16', '2022/09/16','nota_010', '10'),
(default, 'nota_011','2022/09/16', '2022/09/16','nota_011', '11');

INSERT INTO categorias_de_notas
VALUES (id, nome),
(default, 'musica'),
(default, 'dança'),
(default, 'teatro'),
(default, 'jornalismo'),
(default, 'política'),
(default, 'literatura'),
(default, 'esporte'),
(default, 'lazer'),
(default, 'saúde'),
(default, 'educação'),
(default, 'seguraça');

INSERT INTO notas_categorias_de_notas(id, nota_id, categoria_id)
VALUES
(default, '18', '1'),
(default, '19', '2'),
(default, '20', '3'),
(default, '21', '4'),
(default, '22', '5'),
(default, '23', '6'),
(default, '24', '7'),
(default, '25', '8'),
(default, '26', '9'),
(default, '27', '10');


