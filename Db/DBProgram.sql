PGDMP                         z            pretest_BE_PAI    14.3    14.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    67093    pretest_BE_PAI    DATABASE     t   CREATE DATABASE "pretest_BE_PAI" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
     DROP DATABASE "pretest_BE_PAI";
                postgres    false            ?            1259    67102 	   inventory    TABLE     ?   CREATE TABLE public.inventory (
    id_inventory integer NOT NULL,
    nama_barang character varying(255),
    detail_barang character varying(255),
    unit numeric,
    harga_barang numeric
);
    DROP TABLE public.inventory;
       public         heap    postgres    false            ?            1259    67101    inventory_id_inventory_seq    SEQUENCE     ?   CREATE SEQUENCE public.inventory_id_inventory_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.inventory_id_inventory_seq;
       public          postgres    false    212            ?           0    0    inventory_id_inventory_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.inventory_id_inventory_seq OWNED BY public.inventory.id_inventory;
          public          postgres    false    211            ?            1259    67095    users    TABLE     ?   CREATE TABLE public.users (
    id_user integer NOT NULL,
    name_user character varying(40),
    isadmin boolean,
    password_user character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    67094    users_id_user_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_id_user_seq;
       public          postgres    false    210            ?           0    0    users_id_user_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_id_user_seq OWNED BY public.users.id_user;
          public          postgres    false    209            b           2604    67105    inventory id_inventory    DEFAULT     ?   ALTER TABLE ONLY public.inventory ALTER COLUMN id_inventory SET DEFAULT nextval('public.inventory_id_inventory_seq'::regclass);
 E   ALTER TABLE public.inventory ALTER COLUMN id_inventory DROP DEFAULT;
       public          postgres    false    211    212    212            a           2604    67098    users id_user    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    209    210    210            ?          0    67102 	   inventory 
   TABLE DATA           a   COPY public.inventory (id_inventory, nama_barang, detail_barang, unit, harga_barang) FROM stdin;
    public          postgres    false    212          ?          0    67095    users 
   TABLE DATA           K   COPY public.users (id_user, name_user, isadmin, password_user) FROM stdin;
    public          postgres    false    210   ?       ?           0    0    inventory_id_inventory_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.inventory_id_inventory_seq', 1, true);
          public          postgres    false    211            ?           0    0    users_id_user_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_id_user_seq', 1, true);
          public          postgres    false    209            f           2606    67109    inventory inventory_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (id_inventory);
 B   ALTER TABLE ONLY public.inventory DROP CONSTRAINT inventory_pkey;
       public            postgres    false    212            d           2606    67100    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?   m   x?MǱ?0?ڞB?)c?P??|ǺėX?9R??	?{Sx?dz???V????)!c?J}?????P????\?7?R??Y:?.???+??A	?w9?%#L?????s?1??*?      ?   T   x?3?tL????,?T1JR14P1?/*I?7?vN??????pq???K????O??u,L	+?p)6?)1,?6??,/?????? Y?g     