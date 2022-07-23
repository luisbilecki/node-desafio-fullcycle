USE desafio;

CREATE TABLE people(
    id int auto_increment not null primary key,
    name varchar(100)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO people(name) VALUES("Luis"), ("Manueli"), ("Paulo");