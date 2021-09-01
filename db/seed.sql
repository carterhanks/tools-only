drop table users, matches, messages;

CREATE TABLE users (
	user_id serial primary key,
	email varchar(50) NOT NULL UNIQUE,
	password varchar(50) NOT NULL,
	name varchar(30) NOT NULL,
	bio varchar(500) NOT NULL,
	profile_photo_url VARCHAR(255) NOT NULL,
	location VARCHAR(255) NOT NULL
);


CREATE TABLE matches (
	matched_id serial primary key, /*This is when the below two are true/equal/matched*/
	liked_id integer NOT NULL, /*This is when I have liked someone's profile*/
	liker_id integer NOT NULL /*This is when someone has liked my profile*/
);


CREATE TABLE messages (
	message_id serial primary key,
	match_id integer NOT NULL,
	message varchar(500) NOT NULL,
	timestamp DATE NOT NULL,
	img_url VARCHAR(255) NOT NULL
);


ALTER TABLE matches ADD CONSTRAINT matches_fk0 FOREIGN KEY (liked_id) REFERENCES users(user_id);
ALTER TABLE matches ADD CONSTRAINT matches_fk1 FOREIGN KEY (liker_id) REFERENCES users(user_id);

ALTER TABLE messages ADD CONSTRAINT messages_fk0 FOREIGN KEY (match_id) REFERENCES matches(matched_id);

INSERT INTO users (email,password,name,bio,profile_photo_url,location) VALUES ('enim.diam.vel@acipsumPhasellus.org','James','Peter','Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.','enim nisl elementum purus, accumsan','7837'),('Nunc.quis.arcu@pedePraesenteu.com','Hiram','Judah','a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis','magna. Phasellus dolor elit, pellentesque','30565'),('non.dapibus.rutrum@ultricesaauctor.co.uk','Laith','Matthew','cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna.','Nunc sed orci lobortis augue','41665'),('urna.justo@velitPellentesqueultricies.edu','Denton','Kuame','ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non','Sed diam lorem, auctor quis,','4920'),('eget@sitamet.net','Rashad','Elliott','lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed','arcu ac orci. Ut semper','5187'),('sociis@orci.net','Edan','Cyrus','eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec','Aliquam erat volutpat. Nulla facilisis.','79911'),('consequat.enim@non.com','Davis','Kasimir','ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices.','ac tellus. Suspendisse sed dolor.','50526-50071'),('orci@nectempusmauris.edu','Eric','Colorado','magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo','elit elit fermentum risus, at','5295'),('cursus.a@dignissim.ca','Reed','Keegan','dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem','mi, ac mattis velit justo','596779'),('dapibus@vel.edu','Rooney','Kamal','eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla.','malesuada. Integer id magna et','92336');

INSERT INTO matches (liked_id,liker_id) VALUES (5,3);
INSERT INTO matches (liked_id,liker_id) VALUES (4,2);
INSERT INTO matches (liked_id,liker_id) VALUES (9,5);
INSERT INTO matches (liked_id,liker_id) VALUES (7,7);
INSERT INTO matches (liked_id,liker_id) VALUES (1,1);
INSERT INTO matches (liked_id,liker_id) VALUES (9,5);
INSERT INTO matches (liked_id,liker_id) VALUES (7,6);
INSERT INTO matches (liked_id,liker_id) VALUES (6,10);
INSERT INTO matches (liked_id,liker_id) VALUES (3,9);
INSERT INTO matches (liked_id,liker_id) VALUES (8,10);
INSERT INTO matches (liked_id,liker_id) VALUES (2,7);
INSERT INTO matches (liked_id,liker_id) VALUES (10,5);
INSERT INTO matches (liked_id,liker_id) VALUES (5,4);
INSERT INTO matches (liked_id,liker_id) VALUES (3,8);
INSERT INTO matches (liked_id,liker_id) VALUES (6,10);

INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (9,'lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada','Dec 13, 2021','Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (7,'nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet.','Jan 15, 2022','lacinia orci, consectetuer euismod est arcu ac orci. Ut semper');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (3,'Aenean eget metus. In nec','Oct 13, 2020','gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (4,'ligula elit, pretium et, rutrum non, hendrerit id,','Dec 24, 2020','nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (8,'ultrices a, auctor non,','Aug 15, 2021','tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (14,'ultricies dignissim','Jul 22, 2021','volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis.');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (14,'in aliquet','Jul 3, 2022','lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (4,'iaculis, lacus pede sagittis augue, eu tempor','Jan 27, 2022','Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque.');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (15,'nulla. Integer vulputate, risus a ultricies','Dec 15, 2020','In condimentum. Donec at arcu. Vestibulum ante ipsum primis in');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (7,'Cras','Oct 31, 2021','vitae aliquam eros turpis non enim. Mauris quis turpis vitae');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (5,'habitant','Feb 21, 2022','lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (3,'Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh','Apr 28, 2022','ornare lectus justo eu arcu. Morbi sit amet massa. Quisque');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (5,'eu eros. Nam consequat dolor','Mar 14, 2021','pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (5,'imperdiet dictum magna. Ut','Jan 11, 2021','lobortis tellus justo sit amet nulla. Donec non justo. Proin');
INSERT INTO messages (match_id,message,timestamp,img_url) VALUES (12,'non,','Jun 22, 2021','fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed');
