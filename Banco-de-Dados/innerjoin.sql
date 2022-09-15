USE movies_db;
select title from series;

SELECT series.title, genres.name FROM series inner join genres on series.genre_id = genres.id;

SELECT * FROM actor_episode;

SELECT episodes.title, actor_episode.actor_id, actors.first_name, actors.last_name 
FROM episodes 
JOIN actor_episode 
ON episodes.id = actor_episode.episode_id
JOIN actors
ON actors.id = actor_episode.actor_id;