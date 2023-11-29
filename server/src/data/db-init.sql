CREATE TABLE IF NOT EXISTS public.todolist (
    "task_id" serial,
    "name" text,
    "description" integer,
    "priority" text,
    "start_date" text,
    "end_date" text,
    "user_id" text,
    CONSTRAINT task_id_pkey PRIMARY KEY(task_id)
)

CREATE TABLE IF NOT EXISTS public.user(
    "user_id" serial,
    "email" text,
    "password" text,
    "firstname" text,
    "lastname" text,
    CONSTRAINT user_id_pkey PRIMARY KEY(user_id)
)

CREATE TABLE IF NOT EXISTS public.topics(
    "id" serial,
    "topic_name" text,
    "user_id" integer,
    CONSTRAINT id_pkey PRIMARY KEY(id),
    CONSTRAINT user_id_fkey FOREIGN KEY(user_id) REFERENCES public.user (user_id)
)