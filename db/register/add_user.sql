insert into users (email, password, name, bio, profile_photo_url, location) values
($1, $2, $3, $4, $5, $6)
returning *;
