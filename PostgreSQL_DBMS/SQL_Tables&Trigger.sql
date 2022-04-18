-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.all_inserts
(
    insert_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 5 START 25 MINVALUE 0 MAXVALUE 2147483647 CACHE 1 ),
    table_name1 character varying(20) COLLATE pg_catalog."default" NOT NULL,
    signupmethod_client_id bigint NOT NULL,
    time_inserted timestamp with time zone NOT NULL,
    CONSTRAINT inserts_ppk PRIMARY KEY (insert_id)
);

CREATE TABLE IF NOT EXISTS public.html_signup
(
    client_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 10 START 200 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    client_fname character varying(45) COLLATE pg_catalog."default",
    client_lname character varying(75) COLLATE pg_catalog."default",
    client_is_student boolean,
    student_fname character varying(45) COLLATE pg_catalog."default",
    student_lname character varying(75) COLLATE pg_catalog."default",
    client_email character varying(80) COLLATE pg_catalog."default" NOT NULL,
    notes character varying(2000) COLLATE pg_catalog."default",
    client_phonenum character varying(20) COLLATE pg_catalog."default",
    student_age character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT "htmlClient_pkey" PRIMARY KEY (client_id)
);

CREATE TABLE IF NOT EXISTS public.javascript_signup
(
    client_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 10 START 200 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    client_fname character varying(45) COLLATE pg_catalog."default",
    client_lname character varying(75) COLLATE pg_catalog."default",
    client_is_student boolean,
    student_fname character varying(45) COLLATE pg_catalog."default",
    student_lname character varying(75) COLLATE pg_catalog."default",
    client_email character varying(80) COLLATE pg_catalog."default" NOT NULL,
    notes character varying(2000) COLLATE pg_catalog."default",
    client_phonenum character varying(20) COLLATE pg_catalog."default",
    student_age character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT "javascriptClient_pkey" PRIMARY KEY (client_id)
);

CREATE TABLE IF NOT EXISTS public.one_on_one_signup
(
    client_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 10 START 200 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    session_topic character varying(45) COLLATE pg_catalog."default",
    client_fname character varying(45) COLLATE pg_catalog."default",
    client_lname character varying(75) COLLATE pg_catalog."default",
    client_is_student boolean,
    student_fname character varying(45) COLLATE pg_catalog."default",
    student_lname character varying(75) COLLATE pg_catalog."default",
    client_email character varying(80) COLLATE pg_catalog."default" NOT NULL,
    notes character varying(2000) COLLATE pg_catalog."default",
    client_phonenum character varying(20) COLLATE pg_catalog."default",
    student_age character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT "singleSessionClient_pkey" PRIMARY KEY (client_id)
);

-- FUNCTION: public.insertLog_trig1()

-- DROP FUNCTION IF EXISTS public."insertLog_trig1"();

CREATE OR REPLACE FUNCTION public."insertLog_trig1"()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
    
BEGIN
INSERT INTO public.all_inserts(table_name1, signupmethod_client_id, time_inserted)
         VALUES(TG_TABLE_NAME, NEW.client_id, current_timestamp);
 
    RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public."insertLog_trig1"()
    OWNER TO db_clientauthadmin;


END;