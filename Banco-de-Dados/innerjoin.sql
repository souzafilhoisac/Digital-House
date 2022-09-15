USE movies_db;
select title from series;

SELECT series.title, genres.name FROM series inner join genres on series.genre_id = genres.id;

SELECT * FROM actor_episode;

SELECT * FROM movies ORDER BY title;

SELECT episodes.title, actor_episode.actor_id, actors.first_name, actors.last_name 
FROM episodes 
JOIN actor_episode 
ON episodes.id = actor_episode.episode_id
JOIN actors
ON actors.id = actor_episode.actor_id;

SELECT DISTINCT movies.title, actors.first_name, actors.last_name
FROM actors
JOIN actor_movie 
ON actors.id = actor_movie.actor_id
JOIN movies
ON movies.id = actor_movie.movie_id
WHERE movies.id =3 OR movies.id = 4;

SELECT movies.title, genres.name,
COALESCE(genres.name, 'sem gênero') as new
FROM movies
LEFT JOIN genres 
ON genres.id = movies.genre_id
ORDER BY movies.title;

SELECT * FROM series;

SELECT title, release_date, end_date,
DATEDIFF (end_date, release_date) AS Duração
FROM series;

SELECT first_name, last_name
FROM actors
WHERE LENGTH(first_name) > 6
ORDER BY first_name ASC;

SELECT COUNT(*) FROM episodes;

SELECT * FROM seasons;

SELECT series.title, COUNT(seasons.number)
FROM series
JOIN seasons
ON series.id = seasons.serie_id
GROUP BY series.title;

SELECT genres.name, COUNT(genres.id) AS TOTAL_MOVIES
FROM genres
LEFT JOIN movies
ON genres.id = movies.genre_id
WHERE TOTAL_MOVIES >= 3
GROUP BY genres.name
ORDER BY genres.name;

SELECT genres.name, COUNT(genres.id) AS TOTAL_MOVIES
FROM genres
JOIN movies
ON genres.id = movies.genre_id
GROUP BY genres.name
HAVING TOTAL_MOVIES >= 3;

