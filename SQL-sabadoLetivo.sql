create database sabadoletivo;
use sabadoletivo;

create table usuario(
	name_user varchar(50),
    tel int,
    cpf varchar(14) primary key, # 000.000.000-00
    adress varchar(50)
);

create table shop(
	name_shop varchar(50),
    cnpj varchar(18) primary key
);

create table product(
	item varchar(50),
    unit_price double,
    id_produto int auto_increment primary key
);

create table pedido(
	dataPedido date,
    number int primary key,
    frete double,
    FK_cpf varchar(50),
    FK_cnpj varchar(50),
    foreign key (FK_cpf) references usuario(cpf),
    foreign key (FK_cnpj) references shop(cnpj)
);

create table itempedido(
	qntd int,
    FK_number int,
    FK_id_produto int,
    foreign key (FK_number) references pedido(number),
    foreign key (FK_id_produto) references product(id_produto),
    primary key(FK_number, FK_id_produto)
);