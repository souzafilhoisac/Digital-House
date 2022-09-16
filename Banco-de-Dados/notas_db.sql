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
