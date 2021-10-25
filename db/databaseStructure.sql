create table organizations (
	id integer not null primary key,
	name varchar(120) UNIQUE not null,
	index_name varchar(120) UNIQUE not null,
	created_at default CURRENT_TIMESTAMP,
	updated_at default CURRENT_TIMESTAMP
);

CREATE INDEX org_index_name ON organizations (index_name);

create table relationships_types (
	id integer auto_increment not null primary key,
	type varchar(60) UNIQUE not null,
	created_at default CURRENT_TIMESTAMP,
	updated_at default CURRENT_TIMESTAMP
);

create table relationships_organizations (
	id integer not null primary key,
	source_id int not null,
	target_id int not null,
	relationship_type_id int not null,
	FOREIGN KEY (source_id)
       REFERENCES organizations (id),
    FOREIGN KEY (target_id)
       REFERENCES organizations (id),
    FOREIGN KEY (relationship_type_id)
       REFERENCES relationships_types (id)
);