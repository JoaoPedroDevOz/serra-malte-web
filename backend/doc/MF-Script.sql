-- Gera��o de Modelo f�sico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE tbl_cliente (
cliente_id INTEGER PRIMARY KEY,
tipo_pessoa_id INTEGER,
registro_nacional VARCHAR(50),
nome VARCHAR(100),
sobrenome VARCHAR(100),
nome_fantasia VARCHAR(200),
email VARCHAR(320),
telefone VARCHAR(15)
)

CREATE TABLE tbl_tipo_pessoa (
tipo_pessoa_id INTEGER PRIMARY KEY,
tipo VARCHAR(20)
)

CREATE TABLE tbl_pedido (
pedido_id INTEGER PRIMARY KEY,
status_pedido_id INTEGER,
cliente_id INTEGER,
data_hora_pedido DATETIME,
FOREIGN KEY(cliente_id) REFERENCES tbl_cliente (cliente_id)
)

CREATE TABLE tbl_status_pedido (
status_pedido_id INTEGER PRIMARY KEY,
status VARCHAR(20)
)

CREATE TABLE tbl_tipo_produto (
tipo_produto_id INTEGER PRIMARY KEY,
tipo VARCHAR(100)
)

CREATE TABLE tbl_produto (
produto_id INTEGER PRIMARY KEY,
tipo_produto_id INTEGER,
nome VARCHAR(100),
valor_unitario DECIMAL(10, 2),
ibu DECIMAL(5, 2),
abv DECIMAL(4, 2),
quantidade_estoque INTEGER,
FOREIGN KEY(tipo_produto_id) REFERENCES tbl_tipo_produto (tipo_produto_id)
)

CREATE TABLE rel_pedido_produto (
produto_id INTEGER,
pedido_id INTEGER,
valor_unitario DECIMAL(10, 2),
quantidade INTEGER,
PRIMARY KEY(produto_id,pedido_id),
FOREIGN KEY(produto_id) REFERENCES tbl_produto (produto_id),
FOREIGN KEY(pedido_id) REFERENCES tbl_pedido (pedido_id)
)

CREATE TABLE rel_produto_ingrediente (
ingrediente_id INTEGER,
produto_id INTEGER,
quantidade INTEGER,
PRIMARY KEY(ingrediente_id,produto_id),
FOREIGN KEY(produto_id) REFERENCES tbl_produto (produto_id)
)

CREATE TABLE rel_produto_fornecedor (
fornecedor_id INTEGER,
produto_id INTEGER,
data_hora_fornecimento DATETIME,
valor_fornecimento DECIMAL(10, 2),
quantidade INTEGER,
PRIMARY KEY(fornecedor_id,produto_id,data_hora_fornecimento),
FOREIGN KEY(produto_id) REFERENCES tbl_produto (produto_id)
)

CREATE TABLE tbl_tipo_ingrediente (
tipo_ingrediente_id INTEGER PRIMARY KEY,
tipo VARCHAR(30)
)

CREATE TABLE tbl_ingrediente (
ingrediente_id INTEGER PRIMARY KEY,
tipo_ingrediente_id INTEGER,
nome VARCHAR(50),
quantidade_estoque INTEGER,
FOREIGN KEY(tipo_ingrediente_id) REFERENCES tbl_tipo_ingrediente (tipo_ingrediente_id)
)

CREATE TABLE tbl_fornecedor (
fornecedor_id INTEGER PRIMARY KEY,
email VARCHAR(320),
contato VARCHAR(100),
telefone VARCHAR(15),
nome VARCHAR(200),
registro_nacional VARCHAR(50)
)

CREATE TABLE tbl_endereco (
endereco_id INTEGER PRIMARY KEY,
cliente_id INTEGER,
sigla_pais VARCHAR(3),
uf VARCHAR(3),
complemento VARCHAR(255),
rua VARCHAR(255),
cod_postal VARCHAR(10),
FOREIGN KEY(cliente_id) REFERENCES tbl_cliente (cliente_id)
)

CREATE TABLE rel_ingrediente_fornecedor (
fornecedor_id INTEGER,
ingrediente_id INTEGER,
data_hora_fornecimento DATETIME,
quantidade BIGINT(10),
valor_fornecimento DECIMAL(10),
PRIMARY KEY(fornecedor_id,ingrediente_id,data_hora_fornecimento),
FOREIGN KEY(fornecedor_id) REFERENCES tbl_fornecedor (fornecedor_id),
FOREIGN KEY(ingrediente_id) REFERENCES tbl_ingrediente (ingrediente_id)
)

ALTER TABLE tbl_cliente ADD FOREIGN KEY(tipo_pessoa_id) REFERENCES tbl_tipo_pessoa (tipo_pessoa_id)
ALTER TABLE tbl_pedido ADD FOREIGN KEY(status_pedido_id) REFERENCES tbl_status_pedido (status_pedido_id)
ALTER TABLE rel_produto_ingrediente ADD FOREIGN KEY(ingrediente_id) REFERENCES tbl_ingrediente (ingrediente_id)
ALTER TABLE rel_produto_fornecedor ADD FOREIGN KEY(fornecedor_id) REFERENCES tbl_fornecedor (fornecedor_id)
