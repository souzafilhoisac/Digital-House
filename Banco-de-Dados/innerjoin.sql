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

