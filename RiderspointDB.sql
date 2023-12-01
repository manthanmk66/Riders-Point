drop table if exists rider_details;
drop table if exists status;
drop table if exists route_details;
drop table if exists pillion_details;
drop table if exists status_pillion;
drop table if exists pillion_route_details;



	
	create table rider_details(rider_id int primary key auto_increment,name 		varchar(30),mobile_no varchar(10),address varchar(100));
	create table status(status_id int primary key auto_increment,rider_id int, 		bike varchar(20), expense varchar(20),constraint fk_status_rid 			foreign key(rider_id) references rider_details(rider_id));
	create table route_details(route_id int primary key 					auto_increment,status_id int,start_point varchar(20), end_point 		varchar(20),travel_date date,start_time time, end_time 				time ,description varchar(100),constraint fk_rd_rid foreign 			key(status_id) references status(status_id));


	create table pillion_details(pillion_id int primary key 				auto_increment,name varchar(30),mobile_no varchar(10),address 			varchar(100));
	create table status_pillion(status_id int primary key 					auto_increment,pillion_id int,avg_expense varchar(20),constraint 		fk_statusp_rid foreign key(pillion_id) references 				pillion_details(pillion_id));
	create table pillion_route_details(route_id int not null unique,status_id 		int,start_point varchar(20), end_point varchar(20),travel_date 			date,description varchar(100),constraint fk_prd_rid foreign 			key(status_id) references status_pillion(status_id));
	

