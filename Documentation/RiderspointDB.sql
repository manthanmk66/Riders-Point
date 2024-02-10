drop table if exists rp_details;
drop table if exists status;
drop table if exists route_details;
--drop table if exists pillion_details;
drop table if exists status_pillion;
drop table if exists pillion_route_details;
drop table if exists  suggestion_table;


	
	create table rp_details(rp_id int primary key auto_increment,name varchar(30),mobile_no varchar(10),address varchar(100),alert varchar(10));
	create table status(status_id int primary key auto_increment,rider_id int,bike varchar(20), expense varchar(20),constraint fk_status_rid foreign key(rp_id) references rp_details(rp_id));
	create table route_details(route_id int primary key auto_increment,status_id int,start_point varchar(20), end_point 		varchar(20),travel_date date,start_time time, end_time 				time ,description varchar(100),constraint fk_rd_rid foreign 			key(status_id) references status(status_id) on delete cascade);
	create table loginrider(id int,username varchar(20),password varchar(20) ,constraint fk_rd_pass_rid foreign 			key(id) references rp_details(rp_id) on delete cascade);


	--create table pillion_details(pillion_id int primary key auto_increment,name varchar(30),mobile_no varchar(10),address 			varchar(100));
	create table status_pillion(status_id int primary key 					auto_increment,pillion_id int,avg_expense varchar(20),constraint 		fk_statusp_rid foreign key(pillion_id) references rp_details(rp_id) on delete cascade);
	create table pillion_route_details(route_id int not null unique,status_id 		int,start_point varchar(20), end_point varchar(20),travel_date 			date,description varchar(100),constraint fk_prd_rid foreign key(status_id) references status_pillion(status_id) on delete cascade);
	create table loginpillion(id int,username varchar(20),password varchar(20) ,constraint fk_rd_pass_rid foreign 			key(id) references rp_details(rp_id) on delete cascade);

	
	create table suggestion_table(rp_id int,suggestion varchar(100),constraint fk_status_rid foreign key(rp_id) references rp_details(rp_id)on delete cascade);
