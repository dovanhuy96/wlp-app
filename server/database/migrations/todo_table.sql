/**
 *        @file todo_table.sql
 * @application wlp-app
 *     @summary create table todo
 */



create table if not exists `wlp_app`.`todos_table`(
`id` binary(16) not null primary key,
`name` varchar(45) not null,
`priority` varchar(10) not null default 'low',
`isActive` boolean not null default 1,
`description` varchar(255) null,
`isDone` boolean not null default 0,
`createAt` timestamp default current_timestamp,
`lastUpdateAt` timestamp default current_timestamp on update current_timestamp
);