--
-- PostgreSQL database dump
--
-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4
SET
    statement_timeout = 0;

SET
    lock_timeout = 0;

SET
    idle_in_transaction_session_timeout = 0;

SET
    transaction_timeout = 0;

SET
    client_encoding = 'UTF8';

SET
    standard_conforming_strings = on;

SELECT
    pg_catalog.set_config('search_path', '', false);

SET
    check_function_bodies = false;

SET
    xmloption = content;

SET
    client_min_messages = warning;

SET
    row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--
-- *not* creating schema, since initdb creates it
ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--
COMMENT ON SCHEMA public IS '';

SET
    default_tablespace = '';

SET
    default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);

ALTER TABLE
    public._prisma_migrations OWNER TO postgres;

--
-- Name: rel_fornecedor_ingrediente; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.rel_fornecedor_ingrediente (
    fornecedor_id integer NOT NULL,
    ingrediente_id integer NOT NULL,
    data_hora_fornecimento timestamp(6) with time zone NOT NULL,
    valor_fornecimento numeric(10, 0) NOT NULL,
    quantidade integer DEFAULT 1 NOT NULL
);

ALTER TABLE
    public.rel_fornecedor_ingrediente OWNER TO postgres;

--
-- Name: rel_fornecedor_ingrediente_fornecedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_fornecedor_ingrediente_fornecedor_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_fornecedor_ingrediente_fornecedor_id_seq OWNER TO postgres;

--
-- Name: rel_fornecedor_ingrediente_fornecedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_fornecedor_ingrediente_fornecedor_id_seq OWNED BY public.rel_fornecedor_ingrediente.fornecedor_id;

--
-- Name: rel_fornecedor_ingrediente_ingrediente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_fornecedor_ingrediente_ingrediente_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_fornecedor_ingrediente_ingrediente_id_seq OWNER TO postgres;

--
-- Name: rel_fornecedor_ingrediente_ingrediente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_fornecedor_ingrediente_ingrediente_id_seq OWNED BY public.rel_fornecedor_ingrediente.ingrediente_id;

--
-- Name: rel_fornecedor_produto; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.rel_fornecedor_produto (
    fornecedor_id integer NOT NULL,
    produto_id integer NOT NULL,
    data_hora_fornecimento timestamp(6) with time zone NOT NULL,
    valor_fornecimento numeric(10, 0) NOT NULL,
    quantidade integer DEFAULT 1 NOT NULL
);

ALTER TABLE
    public.rel_fornecedor_produto OWNER TO postgres;

--
-- Name: rel_fornecedor_produto_fornecedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_fornecedor_produto_fornecedor_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_fornecedor_produto_fornecedor_id_seq OWNER TO postgres;

--
-- Name: rel_fornecedor_produto_fornecedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_fornecedor_produto_fornecedor_id_seq OWNED BY public.rel_fornecedor_produto.fornecedor_id;

--
-- Name: rel_fornecedor_produto_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_fornecedor_produto_produto_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_fornecedor_produto_produto_id_seq OWNER TO postgres;

--
-- Name: rel_fornecedor_produto_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_fornecedor_produto_produto_id_seq OWNED BY public.rel_fornecedor_produto.produto_id;

--
-- Name: rel_pedido_produto; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.rel_pedido_produto (
    produto_id integer NOT NULL,
    pedido_id integer NOT NULL,
    valor_unitario numeric(10, 0) NOT NULL,
    quantidade integer DEFAULT 1 NOT NULL
);

ALTER TABLE
    public.rel_pedido_produto OWNER TO postgres;

--
-- Name: rel_pedido_produto_pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_pedido_produto_pedido_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_pedido_produto_pedido_id_seq OWNER TO postgres;

--
-- Name: rel_pedido_produto_pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_pedido_produto_pedido_id_seq OWNED BY public.rel_pedido_produto.pedido_id;

--
-- Name: rel_pedido_produto_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_pedido_produto_produto_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_pedido_produto_produto_id_seq OWNER TO postgres;

--
-- Name: rel_pedido_produto_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_pedido_produto_produto_id_seq OWNED BY public.rel_pedido_produto.produto_id;

--
-- Name: rel_produto_ingrediente; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.rel_produto_ingrediente (
    ingrediente_id integer NOT NULL,
    produto_id integer NOT NULL,
    quantidade integer NOT NULL
);

ALTER TABLE
    public.rel_produto_ingrediente OWNER TO postgres;

--
-- Name: rel_produto_ingrediente_ingrediente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_produto_ingrediente_ingrediente_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_produto_ingrediente_ingrediente_id_seq OWNER TO postgres;

--
-- Name: rel_produto_ingrediente_ingrediente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_produto_ingrediente_ingrediente_id_seq OWNED BY public.rel_produto_ingrediente.ingrediente_id;

--
-- Name: rel_produto_ingrediente_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.rel_produto_ingrediente_produto_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.rel_produto_ingrediente_produto_id_seq OWNER TO postgres;

--
-- Name: rel_produto_ingrediente_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.rel_produto_ingrediente_produto_id_seq OWNED BY public.rel_produto_ingrediente.produto_id;

--
-- Name: tbl_cliente; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_cliente (
    cliente_id integer NOT NULL,
    tipo_pessoa_id smallint NOT NULL,
    registro_nacional character varying(50) NOT NULL,
    nome character varying(100) NOT NULL,
    sobrenome character varying(100),
    nome_fantasia character varying(200),
    email character varying(320),
    telefone character varying(15)
);

ALTER TABLE
    public.tbl_cliente OWNER TO postgres;

--
-- Name: tbl_cliente_cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_cliente_cliente_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_cliente_cliente_id_seq OWNER TO postgres;

--
-- Name: tbl_cliente_cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_cliente_cliente_id_seq OWNED BY public.tbl_cliente.cliente_id;

--
-- Name: tbl_endereco; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_endereco (
    endereco_id integer NOT NULL,
    cliente_id integer NOT NULL,
    pais character varying(10) NOT NULL,
    uf character varying(10),
    complemento character varying(255),
    rua character varying(255) NOT NULL,
    cod_postal character varying(10) NOT NULL
);

ALTER TABLE
    public.tbl_endereco OWNER TO postgres;

--
-- Name: tbl_endereco_cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_endereco_cliente_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_endereco_cliente_id_seq OWNER TO postgres;

--
-- Name: tbl_endereco_cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_endereco_cliente_id_seq OWNED BY public.tbl_endereco.cliente_id;

--
-- Name: tbl_endereco_endereco_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_endereco_endereco_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_endereco_endereco_id_seq OWNER TO postgres;

--
-- Name: tbl_endereco_endereco_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_endereco_endereco_id_seq OWNED BY public.tbl_endereco.endereco_id;

--
-- Name: tbl_fornecedor; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_fornecedor (
    fornecedor_id integer NOT NULL,
    email character varying(320),
    contato character varying(100),
    telefone character varying(15),
    nome character varying(200) NOT NULL,
    registro_nacional character varying(50) NOT NULL
);

ALTER TABLE
    public.tbl_fornecedor OWNER TO postgres;

--
-- Name: tbl_fornecedor_fornecedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_fornecedor_fornecedor_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_fornecedor_fornecedor_id_seq OWNER TO postgres;

--
-- Name: tbl_fornecedor_fornecedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_fornecedor_fornecedor_id_seq OWNED BY public.tbl_fornecedor.fornecedor_id;

--
-- Name: tbl_ingrediente; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_ingrediente (
    ingrediente_id integer NOT NULL,
    tipo_ingrediente_id integer NOT NULL,
    nome character varying(50) NOT NULL,
    quantidade_estoque integer,
    valor_unitario numeric(10, 0)
);

ALTER TABLE
    public.tbl_ingrediente OWNER TO postgres;

--
-- Name: tbl_ingrediente_ingrediente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_ingrediente_ingrediente_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_ingrediente_ingrediente_id_seq OWNER TO postgres;

--
-- Name: tbl_ingrediente_ingrediente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_ingrediente_ingrediente_id_seq OWNED BY public.tbl_ingrediente.ingrediente_id;

--
-- Name: tbl_pedido; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_pedido (
    pedido_id integer NOT NULL,
    status_pedido_id smallint NOT NULL,
    cliente_id integer NOT NULL,
    data_hora_pedido timestamp(6) with time zone NOT NULL
);

ALTER TABLE
    public.tbl_pedido OWNER TO postgres;

--
-- Name: tbl_pedido_cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_pedido_cliente_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_pedido_cliente_id_seq OWNER TO postgres;

--
-- Name: tbl_pedido_cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_pedido_cliente_id_seq OWNED BY public.tbl_pedido.cliente_id;

--
-- Name: tbl_pedido_pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_pedido_pedido_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_pedido_pedido_id_seq OWNER TO postgres;

--
-- Name: tbl_pedido_pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_pedido_pedido_id_seq OWNED BY public.tbl_pedido.pedido_id;

--
-- Name: tbl_produto; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_produto (
    produto_id integer NOT NULL,
    tipo_produto_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    quantidade_estoque integer,
    valor_unitario numeric(10, 0) DEFAULT 0 NOT NULL,
    ibu integer,
    abv numeric(3, 2)
);

ALTER TABLE
    public.tbl_produto OWNER TO postgres;

--
-- Name: tbl_produto_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_produto_produto_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_produto_produto_id_seq OWNER TO postgres;

--
-- Name: tbl_produto_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_produto_produto_id_seq OWNED BY public.tbl_produto.produto_id;

--
-- Name: tbl_status_pedido; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_status_pedido (
    status_pedido_id smallint NOT NULL,
    status character varying(20) NOT NULL
);

ALTER TABLE
    public.tbl_status_pedido OWNER TO postgres;

--
-- Name: tbl_tipo_ingrediente; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_tipo_ingrediente (
    tipo_ingrediente_id integer NOT NULL,
    tipo character varying(30) NOT NULL
);

ALTER TABLE
    public.tbl_tipo_ingrediente OWNER TO postgres;

--
-- Name: tbl_tipo_ingrediente_tipo_ingrediente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_tipo_ingrediente_tipo_ingrediente_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_tipo_ingrediente_tipo_ingrediente_id_seq OWNER TO postgres;

--
-- Name: tbl_tipo_ingrediente_tipo_ingrediente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_tipo_ingrediente_tipo_ingrediente_id_seq OWNED BY public.tbl_tipo_ingrediente.tipo_ingrediente_id;

--
-- Name: tbl_tipo_pessoa; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_tipo_pessoa (
    tipo_pessoa_id smallint NOT NULL,
    tipo VARCHAR(20) NOT NULL
);

ALTER TABLE
    public.tbl_tipo_pessoa OWNER TO postgres;

--
-- Name: tbl_tipo_produto; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.tbl_tipo_produto (
    tipo_produto_id integer NOT NULL,
    tipo character varying(100) NOT NULL
);

ALTER TABLE
    public.tbl_tipo_produto OWNER TO postgres;

--
-- Name: tbl_tipo_produto_tipo_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.tbl_tipo_produto_tipo_produto_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.tbl_tipo_produto_tipo_produto_id_seq OWNER TO postgres;

--
-- Name: tbl_tipo_produto_tipo_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.tbl_tipo_produto_tipo_produto_id_seq OWNED BY public.tbl_tipo_produto.tipo_produto_id;

--
-- Name: rel_fornecedor_ingrediente fornecedor_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_ingrediente
ALTER COLUMN
    fornecedor_id
SET
    DEFAULT nextval(
        'public.rel_fornecedor_ingrediente_fornecedor_id_seq' :: regclass
    );

--
-- Name: rel_fornecedor_ingrediente ingrediente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_ingrediente
ALTER COLUMN
    ingrediente_id
SET
    DEFAULT nextval(
        'public.rel_fornecedor_ingrediente_ingrediente_id_seq' :: regclass
    );

--
-- Name: rel_fornecedor_produto fornecedor_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_produto
ALTER COLUMN
    fornecedor_id
SET
    DEFAULT nextval(
        'public.rel_fornecedor_produto_fornecedor_id_seq' :: regclass
    );

--
-- Name: rel_fornecedor_produto produto_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_produto
ALTER COLUMN
    produto_id
SET
    DEFAULT nextval(
        'public.rel_fornecedor_produto_produto_id_seq' :: regclass
    );

--
-- Name: rel_pedido_produto produto_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_pedido_produto
ALTER COLUMN
    produto_id
SET
    DEFAULT nextval(
        'public.rel_pedido_produto_produto_id_seq' :: regclass
    );

--
-- Name: rel_pedido_produto pedido_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_pedido_produto
ALTER COLUMN
    pedido_id
SET
    DEFAULT nextval(
        'public.rel_pedido_produto_pedido_id_seq' :: regclass
    );

--
-- Name: rel_produto_ingrediente ingrediente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_produto_ingrediente
ALTER COLUMN
    ingrediente_id
SET
    DEFAULT nextval(
        'public.rel_produto_ingrediente_ingrediente_id_seq' :: regclass
    );

--
-- Name: rel_produto_ingrediente produto_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_produto_ingrediente
ALTER COLUMN
    produto_id
SET
    DEFAULT nextval(
        'public.rel_produto_ingrediente_produto_id_seq' :: regclass
    );

--
-- Name: tbl_cliente cliente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_cliente
ALTER COLUMN
    cliente_id
SET
    DEFAULT nextval('public.tbl_cliente_cliente_id_seq' :: regclass);

--
-- Name: tbl_endereco endereco_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_endereco
ALTER COLUMN
    endereco_id
SET
    DEFAULT nextval(
        'public.tbl_endereco_endereco_id_seq' :: regclass
    );

--
-- Name: tbl_endereco cliente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_endereco
ALTER COLUMN
    cliente_id
SET
    DEFAULT nextval('public.tbl_endereco_cliente_id_seq' :: regclass);

--
-- Name: tbl_fornecedor fornecedor_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_fornecedor
ALTER COLUMN
    fornecedor_id
SET
    DEFAULT nextval(
        'public.tbl_fornecedor_fornecedor_id_seq' :: regclass
    );

--
-- Name: tbl_ingrediente ingrediente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_ingrediente
ALTER COLUMN
    ingrediente_id
SET
    DEFAULT nextval(
        'public.tbl_ingrediente_ingrediente_id_seq' :: regclass
    );

--
-- Name: tbl_pedido pedido_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_pedido
ALTER COLUMN
    pedido_id
SET
    DEFAULT nextval('public.tbl_pedido_pedido_id_seq' :: regclass);

--
-- Name: tbl_pedido cliente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_pedido
ALTER COLUMN
    cliente_id
SET
    DEFAULT nextval('public.tbl_pedido_cliente_id_seq' :: regclass);

--
-- Name: tbl_produto produto_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_produto
ALTER COLUMN
    produto_id
SET
    DEFAULT nextval('public.tbl_produto_produto_id_seq' :: regclass);

--
-- Name: tbl_tipo_ingrediente tipo_ingrediente_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_tipo_ingrediente
ALTER COLUMN
    tipo_ingrediente_id
SET
    DEFAULT nextval(
        'public.tbl_tipo_ingrediente_tipo_ingrediente_id_seq' :: regclass
    );

--
-- Name: tbl_tipo_produto tipo_produto_id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_tipo_produto
ALTER COLUMN
    tipo_produto_id
SET
    DEFAULT nextval(
        'public.tbl_tipo_produto_tipo_produto_id_seq' :: regclass
    );

--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public._prisma_migrations
ADD
    CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);

--
-- Name: rel_fornecedor_ingrediente rel_ingrediente_fornecedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_ingrediente
ADD
    CONSTRAINT rel_ingrediente_fornecedor_pkey PRIMARY KEY (
        fornecedor_id,
        ingrediente_id,
        data_hora_fornecimento
    );

--
-- Name: rel_pedido_produto rel_pedido_produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_pedido_produto
ADD
    CONSTRAINT rel_pedido_produto_pkey PRIMARY KEY (produto_id, pedido_id);

--
-- Name: rel_fornecedor_produto rel_produto_fornecedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_produto
ADD
    CONSTRAINT rel_produto_fornecedor_pkey PRIMARY KEY (
        fornecedor_id,
        produto_id,
        data_hora_fornecimento
    );

--
-- Name: rel_produto_ingrediente rel_produto_ingrediente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_produto_ingrediente
ADD
    CONSTRAINT rel_produto_ingrediente_pkey PRIMARY KEY (ingrediente_id, produto_id, quantidade);

--
-- Name: tbl_cliente tbl_cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_cliente
ADD
    CONSTRAINT tbl_cliente_pkey PRIMARY KEY (cliente_id);

--
-- Name: tbl_endereco tbl_endereco_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_endereco
ADD
    CONSTRAINT tbl_endereco_pkey PRIMARY KEY (endereco_id);

--
-- Name: tbl_fornecedor tbl_fornecedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_fornecedor
ADD
    CONSTRAINT tbl_fornecedor_pkey PRIMARY KEY (fornecedor_id);

--
-- Name: tbl_ingrediente tbl_ingrediente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_ingrediente
ADD
    CONSTRAINT tbl_ingrediente_pkey PRIMARY KEY (ingrediente_id);

--
-- Name: tbl_pedido tbl_pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_pedido
ADD
    CONSTRAINT tbl_pedido_pkey PRIMARY KEY (pedido_id);

--
-- Name: tbl_produto tbl_produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_produto
ADD
    CONSTRAINT tbl_produto_pkey PRIMARY KEY (produto_id);

--
-- Name: tbl_status_pedido tbl_status_pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_status_pedido
ADD
    CONSTRAINT tbl_status_pedido_pkey PRIMARY KEY (status_pedido_id);

--
-- Name: tbl_tipo_ingrediente tbl_tipo_ingrediente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_tipo_ingrediente
ADD
    CONSTRAINT tbl_tipo_ingrediente_pkey PRIMARY KEY (tipo_ingrediente_id);

--
-- Name: tbl_tipo_pessoa tbl_tipo_pessoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_tipo_pessoa
ADD
    CONSTRAINT tbl_tipo_pessoa_pkey PRIMARY KEY (tipo_pessoa_id);

--
-- Name: tbl_tipo_produto tbl_tipo_produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_tipo_produto
ADD
    CONSTRAINT tbl_tipo_produto_pkey PRIMARY KEY (tipo_produto_id);

--
-- Name: rel_fornecedor_ingrediente rel_ingrediente_fornecedor_fornecedor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_ingrediente
ADD
    CONSTRAINT rel_ingrediente_fornecedor_fornecedor_id_fkey FOREIGN KEY (fornecedor_id) REFERENCES public.tbl_fornecedor(fornecedor_id);

--
-- Name: rel_fornecedor_ingrediente rel_ingrediente_fornecedor_ingrediente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_ingrediente
ADD
    CONSTRAINT rel_ingrediente_fornecedor_ingrediente_id_fkey FOREIGN KEY (ingrediente_id) REFERENCES public.tbl_ingrediente(ingrediente_id);

--
-- Name: rel_pedido_produto rel_pedido_produto_pedido_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_pedido_produto
ADD
    CONSTRAINT rel_pedido_produto_pedido_id_fkey FOREIGN KEY (pedido_id) REFERENCES public.tbl_pedido(pedido_id);

--
-- Name: rel_pedido_produto rel_pedido_produto_produto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_pedido_produto
ADD
    CONSTRAINT rel_pedido_produto_produto_id_fkey FOREIGN KEY (produto_id) REFERENCES public.tbl_produto(produto_id);

--
-- Name: rel_fornecedor_produto rel_produto_fornecedor_fornecedor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_produto
ADD
    CONSTRAINT rel_produto_fornecedor_fornecedor_id_fkey FOREIGN KEY (fornecedor_id) REFERENCES public.tbl_fornecedor(fornecedor_id);

--
-- Name: rel_fornecedor_produto rel_produto_fornecedor_produto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_fornecedor_produto
ADD
    CONSTRAINT rel_produto_fornecedor_produto_id_fkey FOREIGN KEY (produto_id) REFERENCES public.tbl_produto(produto_id);

--
-- Name: rel_produto_ingrediente rel_produto_ingrediente_ingrediente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_produto_ingrediente
ADD
    CONSTRAINT rel_produto_ingrediente_ingrediente_id_fkey FOREIGN KEY (ingrediente_id) REFERENCES public.tbl_ingrediente(ingrediente_id);

--
-- Name: rel_produto_ingrediente rel_produto_ingrediente_produto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.rel_produto_ingrediente
ADD
    CONSTRAINT rel_produto_ingrediente_produto_id_fkey FOREIGN KEY (produto_id) REFERENCES public.tbl_produto(produto_id);

--
-- Name: tbl_cliente tbl_cliente_tipo_pessoa_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_cliente
ADD
    CONSTRAINT tbl_cliente_tipo_pessoa_id_fkey FOREIGN KEY (tipo_pessoa_id) REFERENCES public.tbl_tipo_pessoa(tipo_pessoa_id);

--
-- Name: tbl_endereco tbl_endereco_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_endereco
ADD
    CONSTRAINT tbl_endereco_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.tbl_cliente(cliente_id);

--
-- Name: tbl_ingrediente tbl_ingrediente_tipo_ingrediente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_ingrediente
ADD
    CONSTRAINT tbl_ingrediente_tipo_ingrediente_id_fkey FOREIGN KEY (tipo_ingrediente_id) REFERENCES public.tbl_tipo_ingrediente(tipo_ingrediente_id);

--
-- Name: tbl_pedido tbl_pedido_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_pedido
ADD
    CONSTRAINT tbl_pedido_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.tbl_cliente(cliente_id);

--
-- Name: tbl_pedido tbl_pedido_status_pedido_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_pedido
ADD
    CONSTRAINT tbl_pedido_status_pedido_id_fkey FOREIGN KEY (status_pedido_id) REFERENCES public.tbl_status_pedido(status_pedido_id);

--
-- Name: tbl_produto tbl_produto_tipo_produto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
    ONLY public.tbl_produto
ADD
    CONSTRAINT tbl_produto_tipo_produto_id_fkey FOREIGN KEY (tipo_produto_id) REFERENCES public.tbl_tipo_produto(tipo_produto_id);

--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--
REVOKE USAGE ON SCHEMA public
FROM
    PUBLIC;

--
-- PostgreSQL database dump complete
--
INSERT INTO
    public.tbl_tipo_pessoa (tipo_pessoa_id, tipo)
VALUES
    (1, 'Físico'),
    (2, 'Jurídico') ON CONFLICT (tipo_pessoa_id) DO NOTHING;

-- 2. Populando tbl_status_pedido
INSERT INTO
    public.tbl_status_pedido (status_pedido_id, status)
VALUES
    (1, 'Pendente'),
    (2, 'Em Preparo'),
    (3, 'Pronto para Entrega'),
    (4, 'Enviado'),
    (5, 'Entregue'),
    (6, 'Cancelado') ON CONFLICT (status_pedido_id) DO NOTHING;

-- 3. Populando tbl_tipo_ingrediente
INSERT INTO
    public.tbl_tipo_ingrediente (tipo_ingrediente_id, tipo)
VALUES
    (1, 'Malte'),
    (2, 'Lúpulo'),
    (3, 'Levedura'),
    (4, 'Água'),
    (5, 'Especiarias / Adjuntos'),
    (6, 'Embalagem') ON CONFLICT (tipo_ingrediente_id) DO NOTHING;

-- 4. Populando tbl_tipo_produto
INSERT INTO
    public.tbl_tipo_produto (tipo_produto_id, tipo)
VALUES
    (1, 'Cerveja Artesanal (Garrafa)'),
    (2, 'Cerveja Artesanal (Lata)'),
    (3, 'Chopp (Barril)'),
    (4, 'Kit / Pack de Presente'),
    (5, 'Merchandising (Copos/Camisetas)') ON CONFLICT (tipo_produto_id) DO NOTHING;

-- Atualizar o contador das sequências
SELECT
    setval(
        'public.tbl_tipo_ingrediente_tipo_ingrediente_id_seq',
        (
            SELECT
                MAX(tipo_ingrediente_id)
            FROM
                public.tbl_tipo_ingrediente
        )
    );

SELECT
    setval(
        'public.tbl_tipo_produto_tipo_produto_id_seq',
        (
            SELECT
                MAX(tipo_produto_id)
            FROM
                public.tbl_tipo_produto
        )
    );