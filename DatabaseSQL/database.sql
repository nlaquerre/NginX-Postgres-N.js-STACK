--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-01 10:54:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE authlogin_work1;
--
-- TOC entry 2981 (class 1262 OID 16385)
-- Name: authlogin_work1; Type: DATABASE; Schema: -; Owner: database_admin1
--

CREATE DATABASE authlogin_work1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE authlogin_work1 OWNER TO database_admin1;

\connect authlogin_work1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 16386)
-- Name: employee_pool_tutorial; Type: SCHEMA; Schema: -; Owner: database_admin1
--

CREATE SCHEMA employee_pool_tutorial;


ALTER SCHEMA employee_pool_tutorial OWNER TO database_admin1;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16387)
-- Name: employees; Type: TABLE; Schema: employee_pool_tutorial; Owner: database_admin1
--

CREATE TABLE employee_pool_tutorial.employees (
    emp_id bigint NOT NULL,
    firstname character varying(45),
    lastname character varying(45),
    ssn character(10)
);


ALTER TABLE employee_pool_tutorial.employees OWNER TO database_admin1;

--
-- TOC entry 2975 (class 0 OID 16387)
-- Dependencies: 201
-- Data for Name: employees; Type: TABLE DATA; Schema: employee_pool_tutorial; Owner: database_admin1
--

INSERT INTO employee_pool_tutorial.employees (emp_id, firstname, lastname, ssn) VALUES (1, 'Nick', 'Jones', '1234567890');
INSERT INTO employee_pool_tutorial.employees (emp_id, firstname, lastname, ssn) VALUES (2, 'Rick', 'Smith', '987654321 ');
INSERT INTO employee_pool_tutorial.employees (emp_id, firstname, lastname, ssn) VALUES (3, 'Darth', 'Vader', '1112222   ');


--
-- TOC entry 2842 (class 2606 OID 16391)
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: employee_pool_tutorial; Owner: database_admin1
--

ALTER TABLE ONLY employee_pool_tutorial.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (emp_id);


--
-- TOC entry 2844 (class 2606 OID 16397)
-- Name: employees ssn_unique; Type: CONSTRAINT; Schema: employee_pool_tutorial; Owner: database_admin1
--

ALTER TABLE ONLY employee_pool_tutorial.employees
    ADD CONSTRAINT ssn_unique UNIQUE (ssn);


-- Completed on 2021-02-01 10:54:31

--
-- PostgreSQL database dump complete
--

