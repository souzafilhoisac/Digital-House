INSERT INTO genres(name, ranking, active)
VALUES ('Pesquisa', '13', '1');

SELECT name FROM genres;
SELECT * FROM movies;
SELECT first_name, last_name, rating FROM actors;
SELECT title FROM series;

SELECT first_name, last_name, rating 
FROM actors
WHERE rating > 7.5;

SELECT first_name, last_name, rating 
FROM actors
LIMIT 10
OFFSET 20;

SELECT first_name, last_name
FROM actors
WHERE first_name LIKE 'Sam%';

SELECT title, rating, awards
FROM movies
WHERE rating > 7.5 && awards > 2;

SELECT title, rating
FROM movies
ORDER BY title ASC;

SELECT title
FROM movies
LIMIT 3;

SELECT title, rating
FROM movies
ORDER BY rating DESC
LIMIT 5;

SELECT title, rating, release_date
FROM movies
WHERE release_date BETWEEN '2004-01-01' AND '2008-12-31';

SELECT title, rating
FROM movies
WHERE title LIKE '%Harry Potter%';

UPDATE genres
SET name = 'Pesquisa Científica'
WHERE id = 13;

DELETE FROM genres WHERE id = '13';