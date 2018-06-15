use brokerageportal;

SET FOREIGN_KEY_CHECKS=0; DROP table app_roles ;
DROP table app_users ;
DROP table match_table ;
DROP table match_entry ;
SET FOREIGN_KEY_CHECKS=1; 

CREATE TABLE app_roles(
  role_id bigint(20) NOT NULL AUTO_INCREMENT,
  description varchar(255) DEFAULT NULL,
  role_name varchar(255) DEFAULT NULL,
  role_level int(3),
  PRIMARY KEY (role_id)
);

CREATE TABLE  app_users(
user_id bigint(7) NOT NULL auto_increment,
  first_name varchar(25) NOT NULL,
  last_name varchar(25) DEFAULT NULL,
  password varchar(125) NOT NULL,
  username varchar(50) NOT NULL,
  mobile_number bigint(15) NOT NULL unique,
  account_status varchar(10) NOT NULL,
  amount_balance bigint(10),
  role_id bigint(20) not null,
  CONSTRAINT app_users_rolefk  FOREIGN KEY (role_id) REFERENCES app_roles (role_id),
  PRIMARY KEY (user_id)
);




INSERT INTO app_roles (role_id, role_name, description,role_level) VALUES (1, 'STANDARD_USER', 'Team Member',3);
INSERT INTO app_roles (role_id, role_name, description,role_level) VALUES (4, 'ADMIN_USER', 'Admin',9);

create table match_table(
match_id bigint(5) NOT NULL AUTO_INCREMENT,
team_a varchar(25) NOT NULL,
team_b varchar(25) NOT NULL,
match_date Date NOT NULL,
description varchar(50) ,
match_winner varchar(25),
primary key(match_id)
);

create table match_entry(

entry_id bigint(9) NOT NULL auto_increment,
match_id bigint(5) not null,
user_id bigint(7) NOT NULL,
match_rate bigint(5) not null,
entry_type varchar(7) ,
bet_amount bigint(10) NOT NULL,
bet_team varchar(25) NOT NULL,
match_amount bigint(10),
CONSTRAINT match_id_fk FOREIGN KEY (match_id) REFERENCES match_table (match_id),
CONSTRAINT CHK_entrytype check(entry_type  in ( 'PLAY','EATING')),
CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES app_users (user_id),
primary key(entry_id)
);



insert into app_users values(1,'naveen',
'cm','$2a$10$IRWBqbrrNrIyCn/8jwQ2muvNNbkGPpwTLZxJUk.Y2wOxy5WKauw8.','naveen','9963707060','Active',1000000,4);





