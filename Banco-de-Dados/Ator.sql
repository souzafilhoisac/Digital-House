CREATE TABLE ator(
	id int auto_increment not null,
    nome varchar(100),
    sobrenome varchar(100),
    primary key(id)
);

CREATE TABLE filme_ator(
	id int auto_increment not null,
    primary key(id)
);

INSERT INTO filme
VALUES
(default, 'Thor: Amor e Trovão', 2022, 120),
(default, 'Thor: Amor e Trovão', 2022, 120),
(default, 'O Homem do Norte', 2022, 137),
(default, 'O Homem nas Trevas', 2016, 88);

INSERT INTO ator
VALUES
(default, 'Stephen', 'Lang'),
(default, 'Jane', 'Levy'),
(default, 'Dylan', 'Minnette'),
(default, 'Daniel', 'Zavatto'),
(default, 'Natalie', 'Portman'),
(default, 'Christian', 'Bale'),
(default, 'Chris', 'Hemsworth'),
(default, 'Matt', 'Damon'),
(default, 'Russel', 'Crowe'),
(default, 'Anya', 'Taylor-Joy'),
(default, 'Alexander', 'Skarsgard'),
(default, 'Willian', 'Defoe'),
(default, 'Nicole', 'Kidman'),
(default, 'Ethan', 'Hawke');

SELECT * FROM filme;

SELECT nome, sobrenome FROM ator;

ALTER TABLE filme_ator
add id_filme int not null;

ALTER TABLE filme_ator
add id_ator int not null;

ALTER TABLE filme_ator 
add foreign key(id_filme)
references filme(id);

ALTER TABLE filme_ator 
add foreign key(id_ator)
references ator(id);

