CREATE DATABASE DHSchool;

CREATE TABLE Area_do_Conhecimento(
	ID int auto_increment not null,
    NOME varchar(100),
    primary key(ID)
);

CREATE TABLE Cursos(
	ID int auto_increment not null,
    NOME varchar(100),
    ID_AREA int,
    primary key(ID),
    foreign key (ID_AREA) references Area_do_Conhecimento(ID)
);

CREATE TABLE Turmas(
	ID int auto_increment not null,
    NOME varchar(100),
    ID_CURSO int,
    primary key(ID),
    foreign key (ID_CURSO) references Cursos(ID)
);

CREATE TABLE Professores(
	ID int auto_increment not null,
    NOME varchar(100),
    primary key(ID)
);

CREATE TABLE Cursos_Professores(
	ID int auto_increment not null,
    ID_CURSO int,
    ID_PROFESSOR int,
    primary key(ID),
    foreign key (ID_CURSO) references Cursos(ID),
    foreign key (ID_PROFESSOR) references Professores(ID)
);

CREATE TABLE Turmas_Professores(
	ID int auto_increment not null,
    ID_TURMA int,
    ID_PROFESSOR int,
    primary key(ID),
    foreign key (ID_TURMA) references Turmas(ID),
    foreign key (ID_PROFESSOR) references Professores(ID)
);