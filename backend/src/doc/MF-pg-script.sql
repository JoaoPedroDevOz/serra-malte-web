CREATE TABLE tbl_cliente (
cliente_id SERIAL PRIMARY KEY,
tipo_pessoa_id SMALLINT NOT NULL,
registro_nacional VARCHAR(50) NOT NULL UNIQUE,
nome VARCHAR(100) NOT NULL,
sobrenome VARCHAR(100),
nome_fantasia VARCHAR(200)
);

CREATE TABLE tbl_tipo_pessoa (
tipo_pessoa_id SMALLINT PRIMARY KEY,
tipo VARCHAR(20) UNIQUE
);

CREATE TABLE tbl_pedido (
pedido_id SERIAL PRIMARY KEY,
status_pedido_id SMALLINT NOT NULL,
cliente_id INT NOT NULL,
data_hora_pedido TIMESTAMPTZ NOT NULL,
FOREIGN KEY(cliente_id) REFERENCES tbl_cliente (cliente_id)
);

CREATE TABLE tbl_status_pedido (
status_pedido_id SMALLINT PRIMARY KEY,
status VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE tbl_tipo_produto (
tipo_produto_id INT PRIMARY KEY,
tipo VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE tbl_produto (
produto_id SERIAL PRIMARY KEY,
tipo_produto_id INT NOT NULL,
nome VARCHAR(100) NOT NULL,
valor_unitario DECIMAL(10, 2) NOT NULL,
ibu NUMERIC(5,2) CHECK (ibu >= 0),
abv NUMERIC(4,2) CHECK (abv >= 0 AND abv <= 100),
FOREIGN KEY(tipo_produto_id) REFERENCES tbl_tipo_produto (tipo_produto_id)
);

CREATE TABLE rel_pedido_produto (
produto_id INT NOT NULL,
pedido_id INT NOT NULL,
valor_unitario DECIMAL(10, 2) NOT NULL,
quantidade INT NOT NULL CHECK (quantidade > 0),
PRIMARY KEY(produto_id,pedido_id),
FOREIGN KEY(produto_id) REFERENCES tbl_produto (produto_id),
FOREIGN KEY(pedido_id) REFERENCES tbl_pedido (pedido_id)
);

CREATE TABLE rel_produto_ingrediente (
ingrediente_id INT NOT NULL,
produto_id INT NOT NULL,
quantidade INT NOT NULL CHECK (quantidade > 0),
PRIMARY KEY(ingrediente_id,produto_id),
FOREIGN KEY(produto_id) REFERENCES tbl_produto (produto_id)
);

CREATE TABLE rel_produto_fornecedor (
fornecedor_id INT NOT NULL,
produto_id INT NOT NULL,
data_hora_fornecimento TIMESTAMPTZ NOT NULL,
valor_fornecimento DECIMAL(10, 2) NOT NULL,
quantidade INT NOT NULL CHECK (quantidade > 0),
PRIMARY KEY(fornecedor_id,produto_id,data_hora_fornecimento),
FOREIGN KEY(produto_id) REFERENCES tbl_produto (produto_id)
);

CREATE TABLE tbl_tipo_ingrediente (
tipo_ingrediente_id INT PRIMARY KEY,
tipo VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE tbl_ingrediente (
ingrediente_id SERIAL PRIMARY KEY,
tipo_ingrediente_id INT NOT NULL,
nome VARCHAR(50) NOT NULL UNIQUE,
FOREIGN KEY(tipo_ingrediente_id) REFERENCES tbl_tipo_ingrediente (tipo_ingrediente_id)
);

CREATE TABLE tbl_fornecedor (
fornecedor_id SERIAL PRIMARY KEY,
email VARCHAR(320),
contato VARCHAR(100),
telefone VARCHAR(15),
nome VARCHAR(200) NOT NULL,
registro_nacional VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE tbl_endereco (
endereco_id SERIAL PRIMARY KEY,
cliente_id INT NOT NULL,
pais VARCHAR(3) DEFAULT 'BR',
uf VARCHAR(3) NOT NULL,
complemento VARCHAR(255),
rua VARCHAR(255) NOT NULL,
cod_postal VARCHAR(10) NOT NULL,
FOREIGN KEY(cliente_id) REFERENCES tbl_cliente (cliente_id)
);

CREATE TABLE rel_ingrediente_fornecedor (
fornecedor_id INT NOT NULL,
ingrediente_id INT NOT NULL,
data_hora_fornecimento TIMESTAMPTZ NOT NULL,
quantidade INT NOT NULL CHECK (quantidade > 0),
valor_fornecimento DECIMAL(10, 2) NOT NULL,
PRIMARY KEY(fornecedor_id,ingrediente_id,data_hora_fornecimento),
FOREIGN KEY(fornecedor_id) REFERENCES tbl_fornecedor (fornecedor_id),
FOREIGN KEY(ingrediente_id) REFERENCES tbl_ingrediente (ingrediente_id)
);

ALTER TABLE tbl_cliente ADD FOREIGN KEY(tipo_pessoa_id) REFERENCES tbl_tipo_pessoa (tipo_pessoa_id);
ALTER TABLE tbl_pedido ADD FOREIGN KEY(status_pedido_id) REFERENCES tbl_status_pedido (status_pedido_id);
ALTER TABLE rel_produto_ingrediente ADD FOREIGN KEY(ingrediente_id) REFERENCES tbl_ingrediente (ingrediente_id);
ALTER TABLE rel_produto_fornecedor ADD FOREIGN KEY(fornecedor_id) REFERENCES tbl_fornecedor (fornecedor_id);
