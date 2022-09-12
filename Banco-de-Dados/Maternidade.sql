CREATE DATABASE Maternidade;

CREATE TABLE Bebê(
	id int auto_increment not null,
    nome varchar(100),
    data_nascimento date,
    hora_nascimento time,
    primary key(id)
);

CREATE TABLE Mãe(
	id int auto_increment not null,
    nome varchar(100),
    primary key(id)
);

ALTER TABLE Bebê
add foreign key(id_Mãe)
references Mãe(id);

ALTER TABLE Bebê
add id_Mãe int not null;

INSERT INTO Bebê
VALUES
(default, 'Miguel','2022/03/01','14:00:00');
(default, 'Arthur','27/03/2022','01:00'),
(default, 'Théo','29/03/2022','05:47'),
(default, 'Heitor','05/04/2022','02:00'),
(default, 'Gael','05/04/2022','02:00'),
(default, 'Davi','05/04/2022','02:00'),
(default, 'Bernardo','06/05/2022','08:00'),
(default, 'Gabriel','15/05/2022','09:00'),
(default, 'Ravi','12/07/2022','12:00'),
(default, 'Noah','24/07/2022','16:00'),
(default, 'Samuel','25/07/2022','16:00'),
(default, 'Pedro','26/07/2022','10:00'),
(default, 'Benício','29/07/2022','17:42'),
(default, 'Benjamin','29/07/2022','18:11'),
(default, 'Matheus','01/08/2022','11:11'),
(default, 'Isaac','01/08/2022','11:11'),
(default, 'Anthony','05/08/2022','11:12'),
(default, 'Joaquim','12/08/2022','05:22'),
(default, 'Lucas','12/08/2022','08:29'),
(default, 'Lorenzo','27/08/2022','08:31'),
(default, 'Rafael','27/08/2022','13:14'),
(default, 'Nicolas','28/09/2022','13:16'),
(default, 'Henrique','30/08/2022','19:01'),
(default, 'Murilo','30/08/2022','23:59'),
(default, 'João Miguel','31/08/2022', '23:40'),
(default, 'Lucca','31/08/2022','23:12'),
(default, 'Guilherme','31/08/2022','10:12'),
(default, 'Henry','31/08/2022','13:19'),
(default, 'Bryan','31/08/2022','12:57');