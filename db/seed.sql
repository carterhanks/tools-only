drop table users, matches, messages;


CREATE TABLE users (
	user_id serial primary KEY NOT NULL,
	email varchar(50) NOT NULL UNIQUE,
	password varchar(50) NOT NULL,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) not null,
	age integer not null,
	bio varchar(500) NOT NULL,
	profile_photo_url VARCHAR(255) NOT NULL,
	location VARCHAR(255) NOT NULL
);



CREATE TABLE matches (
	matched_id serial primary key NOT NULL,
	user_one_id integer NOT NULL,
	user_two_id integer NOT NULL,
	user_one_decision BOOLEAN NOT NULL,
	user_two_decision BOOLEAN NOT NULL
);



CREATE TABLE messages (
	message_id serial primary key NOT NULL,
	match_id integer NOT NULL,
	message varchar(500) NOT NULL,
	timestamp DATE NOT NULL,
	img_url VARCHAR(255) NOT NULL
);



ALTER TABLE matches add FOREIGN KEY (user_one_id) REFERENCES users(user_id);
ALTER TABLE matches add FOREIGN KEY (user_two_id) REFERENCES users(user_id);
ALTER TABLE messages add FOREIGN KEY (match_id) REFERENCES matches(matched_id);



INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('In.ornare.sagittis@iderat.com','Geoffrey','Carissa','Yen',48,'urna. Nullam','eu odio tristique pharetra. Quisque','61913');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('per.conubia.nostra@mattis.edu','Nasim','Kim','Alexis',67,'et pede. Nunc sed orci lobortis augue scelerisque','Sed eu nibh vulputate mauris','63872');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('Quisque.porttitor@enimSuspendissealiquet.org','Valentine','Petra','Karina',22,'posuere at,','erat semper rutrum. Fusce dolor','336831');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('hendrerit.a.arcu@loremipsum.org','Wing','Stacey','Imogene',51,'Sed congue,','ornare placerat, orci lacus vestibulum','156682');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('Integer@Seddiamlorem.ca','Callum','Zenia','Darryl',56,'quis, tristique','ligula. Nullam enim. Sed nulla','82578');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('ut@purus.co.uk','Hu','Susan','Kaden',75,'in sodales elit erat vitae risus. Duis a','mollis nec, cursus a, enim.','37483');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('ac@luctusutpellentesque.ca','Brian','Irma','Kylan',32,'fames','Lorem ipsum dolor sit amet,','55235');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('facilisis@montesnascetur.net','Carter','Fay','Caryn',46,'ornare. Fusce mollis.','facilisis facilisis, magna tellus faucibus','20412');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('eget@ornare.ca','Yardley','Nadine','Gail',46,'malesuada malesuada. Integer id magna','diam dictum sapien. Aenean massa.','43960');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('ultrices.a.auctor@gravida.ca','Brady','September','Geraldine',49,'dictum eu, placerat eget, venenatis a, magna. Lorem','Donec fringilla. Donec feugiat metus','1248 JP');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('Donec.egestas@eu.org','Solomon','Patience','Dahlia',45,'ante. Maecenas','accumsan sed, facilisis vitae, orci.','127074');
INSERT INTO "users" (email,password,first_name,last_name,age,bio,profile_photo_url,location) VALUES ('non.ante.bibendum@magnisdisparturient.net','Randall','Erica','Erin',23,'nec','Donec at arcu. Vestibulum ante','552404');



INSERT INTO "matches" (user_one_id,user_two_id,user_one_decision,user_two_decision) VALUES (4,4,'false','false');
INSERT INTO "matches" (user_one_id,user_two_id,user_one_decision,user_two_decision) VALUES (1,10,'true','false');
INSERT INTO "matches" (user_one_id,user_two_id,user_one_decision,user_two_decision) VALUES (9,5,'true','false');
INSERT INTO "matches" (user_one_id,user_two_id,user_one_decision,user_two_decision) VALUES (7,1,'true','false');
INSERT INTO "matches" (user_one_id,user_two_id,user_one_decision,user_two_decision) VALUES (9,5,'true','false');



INSERT INTO "messages" (match_id,message,timestamp,img_url) VALUES (5,'Maecenas mi felis, adipiscing','May 3, 2022','nonummy ut, molestie in, tempus');
INSERT INTO "messages" (match_id,message,timestamp,img_url) VALUES (4,'cursus in, hendrerit consectetuer, cursus et,','May 6, 2021','sed pede nec ante blandit');
