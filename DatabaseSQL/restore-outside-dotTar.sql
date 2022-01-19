--
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE stayaheadtutors_db1;
--
-- Name: stayaheadtutors_db1; Type: DATABASE; Schema: -; Owner: db_clientauthadmin
--

CREATE DATABASE stayaheadtutors_db1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE stayaheadtutors_db1 OWNER TO db_clientauthadmin;

\connect stayaheadtutors_db1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: db_clientauthadmin
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO db_clientauthadmin;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: db_clientauthadmin
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: insertLog_trig1(); Type: FUNCTION; Schema: public; Owner: db_clientauthadmin
--

CREATE FUNCTION public."insertLog_trig1"() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    
BEGIN
INSERT INTO public.all_inserts(table_name1, signupmethod_client_id, time_inserted)
         VALUES(TG_TABLE_NAME, NEW.client_id, current_timestamp);
 
    RETURN NEW;
END;
$$;


ALTER FUNCTION public."insertLog_trig1"() OWNER TO db_clientauthadmin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: javascript_signup; Type: TABLE; Schema: public; Owner: db_clientauthadmin
--

CREATE TABLE public.javascript_signup (
    client_id integer NOT NULL,
    client_fname character varying(45),
    client_lname character varying(75),
    client_is_student boolean,
    student_fname character varying(45),
    student_lname character varying(75),
    client_email character varying(80) NOT NULL,
    notes character varying(2000),
    client_phonenum character varying(20),
    student_age character varying(10)
);


ALTER TABLE public.javascript_signup OWNER TO db_clientauthadmin;

--
-- Name: Basic_Client_Info_client_id_seq; Type: SEQUENCE; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE public.javascript_signup ALTER COLUMN client_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Basic_Client_Info_client_id_seq"
    START WITH 200
    INCREMENT BY 10
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Test1; Type: TABLE; Schema: public; Owner: db_clientauthadmin
--

CREATE TABLE public."Test1" (
    text_id integer NOT NULL,
    text_field1 character varying(45) NOT NULL
);


ALTER TABLE public."Test1" OWNER TO db_clientauthadmin;

--
-- Name: Test_test_id_seq; Type: SEQUENCE; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE public."Test1" ALTER COLUMN text_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Test_test_id_seq"
    START WITH 2
    INCREMENT BY 5
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: all_inserts; Type: TABLE; Schema: public; Owner: db_clientauthadmin
--

CREATE TABLE public.all_inserts (
    insert_id bigint NOT NULL,
    table_name1 character varying(20) NOT NULL,
    signupmethod_client_id bigint NOT NULL,
    time_inserted timestamp with time zone NOT NULL
);


ALTER TABLE public.all_inserts OWNER TO db_clientauthadmin;

--
-- Name: all_inserts_insert_id_seq; Type: SEQUENCE; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE public.all_inserts ALTER COLUMN insert_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.all_inserts_insert_id_seq
    START WITH 25
    INCREMENT BY 5
    MINVALUE 0
    MAXVALUE 2147483647
    CACHE 1
);


--
-- Name: html_signup; Type: TABLE; Schema: public; Owner: db_clientauthadmin
--

CREATE TABLE public.html_signup (
    client_id integer NOT NULL,
    client_fname character varying(45),
    client_lname character varying(75),
    client_is_student boolean,
    student_fname character varying(45),
    student_lname character varying(75),
    client_email character varying(80) NOT NULL,
    notes character varying(2000),
    client_phonenum character varying(20),
    student_age character varying(10)
);


ALTER TABLE public.html_signup OWNER TO db_clientauthadmin;

--
-- Name: html_signup_client_id_seq; Type: SEQUENCE; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE public.html_signup ALTER COLUMN client_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.html_signup_client_id_seq
    START WITH 200
    INCREMENT BY 10
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: one_on_one_signup; Type: TABLE; Schema: public; Owner: db_clientauthadmin
--

CREATE TABLE public.one_on_one_signup (
    client_id integer NOT NULL,
    session_topic character varying(45),
    client_fname character varying(45),
    client_lname character varying(75),
    client_is_student boolean,
    student_fname character varying(45),
    student_lname character varying(75),
    client_email character varying(80) NOT NULL,
    notes character varying(2000),
    client_phonenum character varying(20),
    student_age character varying(10)
);


ALTER TABLE public.one_on_one_signup OWNER TO db_clientauthadmin;

--
-- Name: single_client_sessions_signup_client_id_seq; Type: SEQUENCE; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE public.one_on_one_signup ALTER COLUMN client_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.single_client_sessions_signup_client_id_seq
    START WITH 200
    INCREMENT BY 10
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Test1 Test_pkey; Type: CONSTRAINT; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE ONLY public."Test1"
    ADD CONSTRAINT "Test_pkey" PRIMARY KEY (text_id);


--
-- Name: html_signup htmlClient_pkey; Type: CONSTRAINT; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE ONLY public.html_signup
    ADD CONSTRAINT "htmlClient_pkey" PRIMARY KEY (client_id);


--
-- Name: all_inserts inserts_ppk; Type: CONSTRAINT; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE ONLY public.all_inserts
    ADD CONSTRAINT inserts_ppk PRIMARY KEY (insert_id);


--
-- Name: javascript_signup javascriptClient_pkey; Type: CONSTRAINT; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE ONLY public.javascript_signup
    ADD CONSTRAINT "javascriptClient_pkey" PRIMARY KEY (client_id);


--
-- Name: one_on_one_signup singleSessionClient_pkey; Type: CONSTRAINT; Schema: public; Owner: db_clientauthadmin
--

ALTER TABLE ONLY public.one_on_one_signup
    ADD CONSTRAINT "singleSessionClient_pkey" PRIMARY KEY (client_id);


--
-- Name: html_signup html_logtrig1; Type: TRIGGER; Schema: public; Owner: db_clientauthadmin
--

CREATE TRIGGER html_logtrig1 AFTER INSERT ON public.html_signup FOR EACH ROW EXECUTE FUNCTION public."insertLog_trig1"();


--
-- Name: javascript_signup javascript_logtrig1; Type: TRIGGER; Schema: public; Owner: db_clientauthadmin
--

CREATE TRIGGER javascript_logtrig1 AFTER INSERT ON public.javascript_signup FOR EACH ROW EXECUTE FUNCTION public."insertLog_trig1"();


--
-- Name: one_on_one_signup one_on_one_logtrig1; Type: TRIGGER; Schema: public; Owner: db_clientauthadmin
--

CREATE TRIGGER one_on_one_logtrig1 AFTER INSERT ON public.one_on_one_signup FOR EACH ROW EXECUTE FUNCTION public."insertLog_trig1"();


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: db_clientauthadmin
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO db_clientauthadmin;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

