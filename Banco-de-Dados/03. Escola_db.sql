CREATE DATABASE escola;
USE escola;

CREATE TABLE alunos (
  id int unsigned NOT NULL AUTO_INCREMENT,
  nome varchar(200) NOT NULL,
  sobrenome varchar(200) NOT NULL,
  ano_matricula int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE professores (
  id int unsigned NOT NULL AUTO_INCREMENT,
  nome varchar(200) NOT NULL,
  sobrenome varchar(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE areas (
  id int unsigned NOT NULL AUTO_INCREMENT,
  tipo varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cursos (
  id int unsigned NOT NULL AUTO_INCREMENT,
  nome varchar(200) NOT NULL,
  area_id int unsigned NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY area_foreing (area_id) REFERENCES areas(id)
);

CREATE TABLE turmas (
  id int unsigned NOT NULL AUTO_INCREMENT,
  duracao int NOT NULL,
  ano_inicio int NOT NULL,
  semestre tinyint(1) NOT NULL,
  curso_id int unsigned NOT NULL,
  professor_id int unsigned NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY curso_foreing (curso_id) REFERENCES cursos(id),
  FOREIGN KEY professor_foreing (professor_id) REFERENCES professores(id)
);

CREATE TABLE alunos_has_turmas (
  id int unsigned NOT NULL AUTO_INCREMENT,
  aluno_id int unsigned NOT NULL,
  turma_id int unsigned NOT NULL,
  numero_faltas int,
  PRIMARY KEY (id),
  FOREIGN KEY aluno_foreing (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY turma_foreing (turma_id) REFERENCES turmas(id)
);

SELECT nome, ano_matricula FROM alunos;

USE escola;

SELECT * FROM alunos;

SELECT nome
FROM alunos
ORDER BY ano_matricula DESC
LIMIT 3;

SELECT nome
FROM alunos
WHERE ano_matricula = '2020'
LIMIT 3;

SELECT *
FROM turmas
WHERE ano_inicio BETWEEN '2018-01-01' AND '2020-12-31';

SELECT *
FROM cursos
WHERE nome LIKE '%desenvolvimento%';

USE escola;

SELECT * FROM alunos;

SELECT alunos.nome, alunos_has_turmas.numero_faltas
FROM alunos
JOIN alunos_has_turmas
ON alunos.id = alunos_has_turmas.aluno_id
WHERE alunos_has_turmas.numero_faltas > 5
ORDER BY alunos.nome;

SELECT alunos.nome, alunos.sobrenome, alunos_has_turmas.numero_faltas
FROM alunos
JOIN alunos_has_turmas
ON alunos.id = alunos_has_turmas.aluno_id
WHERE alunos_has_turmas.numero_faltas >= 10;

SELECT COUNT(ano_inicio) 
FROM turmas
WHERE ano_inicio = 2020;

