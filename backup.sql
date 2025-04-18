PGDMP  $    ,    
            }           foraging_db    17.2 (Postgres.app)    17.2 (Postgres.app) H    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    41210    foraging_db    DATABASE     w   CREATE DATABASE foraging_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE foraging_db;
                     user    false            �            1255    41940    set_updated_at_to_now()    FUNCTION     �   CREATE FUNCTION public.set_updated_at_to_now() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;
 .   DROP FUNCTION public.set_updated_at_to_now();
       public               user    false            �            1259    49668    category    TABLE     t   CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    photo text
);
    DROP TABLE public.category;
       public         heap r       user    false            �            1259    49667    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public               user    false    232            �           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public               user    false    231            �            1259    49645    found    TABLE     n  CREATE TABLE public.found (
    id integer NOT NULL,
    item_id integer NOT NULL,
    found_date date NOT NULL,
    location character varying(255) NOT NULL,
    description character varying(1500) NOT NULL,
    photo character varying(1500) NOT NULL,
    user_id integer NOT NULL,
    lat numeric(8,6),
    long numeric(9,6),
    archived boolean DEFAULT false
);
    DROP TABLE public.found;
       public         heap r       user    false            �           0    0    COLUMN found.archived    COMMENT     �   COMMENT ON COLUMN public.found.archived IS 'THIS IS IF THEY DELETED SOMETHING FROM THEIR FOUND TABLE. THEY ARE ABLE TO VIEW THESE WITHIN THE ARCHIVE DROPDOWN IN THE MENU';
          public               user    false    226            �            1259    49642    found_id_seq    SEQUENCE     �   CREATE SEQUENCE public.found_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.found_id_seq;
       public               user    false    226            �           0    0    found_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.found_id_seq OWNED BY public.found.id;
          public               user    false    223            �            1259    49643    found_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.found_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.found_item_id_seq;
       public               user    false    226            �           0    0    found_item_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.found_item_id_seq OWNED BY public.found.item_id;
          public               user    false    224            �            1259    49644    found_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.found_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.found_user_id_seq;
       public               user    false    226            �           0    0    found_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.found_user_id_seq OWNED BY public.found.user_id;
          public               user    false    225            �            1259    49633    item    TABLE       CREATE TABLE public.item (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(500) NOT NULL,
    found character varying(350) NOT NULL,
    season character varying(255) NOT NULL,
    uses character varying(350) NOT NULL,
    photo character varying(255) NOT NULL,
    nutrition character varying(350) NOT NULL,
    shelf_life character varying(350) NOT NULL,
    harvesting character varying(450) NOT NULL,
    imposters character varying(65) NOT NULL,
    category_id integer NOT NULL
);
    DROP TABLE public.item;
       public         heap r       user    false            �            1259    49632    item_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.item_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.item_category_id_seq;
       public               user    false    222            �           0    0    item_category_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.item_category_id_seq OWNED BY public.item.category_id;
          public               user    false    221            �            1259    49631    item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.item_id_seq;
       public               user    false    222            �           0    0    item_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;
          public               user    false    220            �            1259    42080    session    TABLE     �   CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.session;
       public         heap r       user    false            �            1259    49618    user    TABLE     �  CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL,
    inserted_at timestamp(0) with time zone DEFAULT '2025-02-28 10:32:28.769987-06'::timestamp with time zone NOT NULL,
    updated_at timestamp(0) with time zone DEFAULT '2025-02-28 10:32:28.769987-06'::timestamp with time zone NOT NULL,
    is_admin boolean DEFAULT false NOT NULL
);
    DROP TABLE public."user";
       public         heap r       user    false            �            1259    49617    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public               user    false    219            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public               user    false    218            �            1259    49658 	   user_item    TABLE     �   CREATE TABLE public.user_item (
    id integer NOT NULL,
    user_id integer NOT NULL,
    item_id integer NOT NULL,
    is_favorited boolean DEFAULT true
);
    DROP TABLE public.user_item;
       public         heap r       user    false            �            1259    49655    user_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_item_id_seq;
       public               user    false    230            �           0    0    user_item_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.user_item_id_seq OWNED BY public.user_item.id;
          public               user    false    227            �            1259    49657    user_item_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_item_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.user_item_item_id_seq;
       public               user    false    230            �           0    0    user_item_item_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_item_item_id_seq OWNED BY public.user_item.item_id;
          public               user    false    229            �            1259    49656    user_item_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_item_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.user_item_user_id_seq;
       public               user    false    230            �           0    0    user_item_user_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_item_user_id_seq OWNED BY public.user_item.user_id;
          public               user    false    228            �           2604    49671    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public               user    false    232    231    232            �           2604    49648    found id    DEFAULT     d   ALTER TABLE ONLY public.found ALTER COLUMN id SET DEFAULT nextval('public.found_id_seq'::regclass);
 7   ALTER TABLE public.found ALTER COLUMN id DROP DEFAULT;
       public               user    false    226    223    226            �           2604    49649    found item_id    DEFAULT     n   ALTER TABLE ONLY public.found ALTER COLUMN item_id SET DEFAULT nextval('public.found_item_id_seq'::regclass);
 <   ALTER TABLE public.found ALTER COLUMN item_id DROP DEFAULT;
       public               user    false    224    226    226            �           2604    49650    found user_id    DEFAULT     n   ALTER TABLE ONLY public.found ALTER COLUMN user_id SET DEFAULT nextval('public.found_user_id_seq'::regclass);
 <   ALTER TABLE public.found ALTER COLUMN user_id DROP DEFAULT;
       public               user    false    225    226    226            �           2604    49636    item id    DEFAULT     b   ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);
 6   ALTER TABLE public.item ALTER COLUMN id DROP DEFAULT;
       public               user    false    222    220    222            �           2604    49637    item category_id    DEFAULT     t   ALTER TABLE ONLY public.item ALTER COLUMN category_id SET DEFAULT nextval('public.item_category_id_seq'::regclass);
 ?   ALTER TABLE public.item ALTER COLUMN category_id DROP DEFAULT;
       public               user    false    221    222    222            �           2604    49621    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public               user    false    218    219    219            �           2604    49661    user_item id    DEFAULT     l   ALTER TABLE ONLY public.user_item ALTER COLUMN id SET DEFAULT nextval('public.user_item_id_seq'::regclass);
 ;   ALTER TABLE public.user_item ALTER COLUMN id DROP DEFAULT;
       public               user    false    230    227    230            �           2604    49662    user_item user_id    DEFAULT     v   ALTER TABLE ONLY public.user_item ALTER COLUMN user_id SET DEFAULT nextval('public.user_item_user_id_seq'::regclass);
 @   ALTER TABLE public.user_item ALTER COLUMN user_id DROP DEFAULT;
       public               user    false    228    230    230            �           2604    49663    user_item item_id    DEFAULT     v   ALTER TABLE ONLY public.user_item ALTER COLUMN item_id SET DEFAULT nextval('public.user_item_item_id_seq'::regclass);
 @   ALTER TABLE public.user_item ALTER COLUMN item_id DROP DEFAULT;
       public               user    false    229    230    230            �          0    49668    category 
   TABLE DATA           3   COPY public.category (id, name, photo) FROM stdin;
    public               user    false    232   �R       �          0    49645    found 
   TABLE DATA           t   COPY public.found (id, item_id, found_date, location, description, photo, user_id, lat, long, archived) FROM stdin;
    public               user    false    226   S       �          0    49633    item 
   TABLE DATA           �   COPY public.item (id, name, description, found, season, uses, photo, nutrition, shelf_life, harvesting, imposters, category_id) FROM stdin;
    public               user    false    222   �T       �          0    42080    session 
   TABLE DATA           4   COPY public.session (sid, sess, expire) FROM stdin;
    public               user    false    217   m       �          0    49618    user 
   TABLE DATA           a   COPY public."user" (id, name, username, password, inserted_at, updated_at, is_admin) FROM stdin;
    public               user    false    219   �m       �          0    49658 	   user_item 
   TABLE DATA           G   COPY public.user_item (id, user_id, item_id, is_favorited) FROM stdin;
    public               user    false    230   �o       �           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 1, false);
          public               user    false    231            �           0    0    found_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.found_id_seq', 26, true);
          public               user    false    223            �           0    0    found_item_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.found_item_id_seq', 1, false);
          public               user    false    224            �           0    0    found_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.found_user_id_seq', 1, false);
          public               user    false    225            �           0    0    item_category_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.item_category_id_seq', 1, false);
          public               user    false    221            �           0    0    item_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.item_id_seq', 50, true);
          public               user    false    220            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 7, true);
          public               user    false    218            �           0    0    user_item_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.user_item_id_seq', 58, true);
          public               user    false    227            �           0    0    user_item_item_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.user_item_item_id_seq', 1, false);
          public               user    false    229            �           0    0    user_item_user_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.user_item_user_id_seq', 1, false);
          public               user    false    228            �           2606    49673    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public                 user    false    232            �           2606    49654    found found_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.found DROP CONSTRAINT found_pkey;
       public                 user    false    226            �           2606    49641    item item_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.item DROP CONSTRAINT item_pkey;
       public                 user    false    222            �           2606    42086    session session_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);
 >   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pkey;
       public                 user    false    217            �           2606    49666    user_item user_item_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.user_item
    ADD CONSTRAINT user_item_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.user_item DROP CONSTRAINT user_item_pkey;
       public                 user    false    230            �           2606    49628    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public                 user    false    219            �           2606    49630    user user_username_unique 
   CONSTRAINT     Z   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_unique UNIQUE (username);
 E   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_username_unique;
       public                 user    false    219            �           1259    42087    IDX_session_expire    INDEX     J   CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);
 (   DROP INDEX public."IDX_session_expire";
       public                 user    false    217            �           2620    49699    user on_user_update    TRIGGER     {   CREATE TRIGGER on_user_update BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.set_updated_at_to_now();
 .   DROP TRIGGER on_user_update ON public."user";
       public               user    false    233    219            �           2606    49679    found found_item_id_foreign    FK CONSTRAINT     y   ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_item_id_foreign FOREIGN KEY (item_id) REFERENCES public.item(id);
 E   ALTER TABLE ONLY public.found DROP CONSTRAINT found_item_id_foreign;
       public               user    false    226    3571    222            �           2606    49694    found found_user_id_foreign    FK CONSTRAINT     {   ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_user_id_foreign FOREIGN KEY (user_id) REFERENCES public."user"(id);
 E   ALTER TABLE ONLY public.found DROP CONSTRAINT found_user_id_foreign;
       public               user    false    226    3567    219            �           2606    49689    item item_category_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_category_id_foreign FOREIGN KEY (category_id) REFERENCES public.category(id);
 G   ALTER TABLE ONLY public.item DROP CONSTRAINT item_category_id_foreign;
       public               user    false    3577    232    222            �           2606    49684 #   user_item user_item_item_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_item
    ADD CONSTRAINT user_item_item_id_foreign FOREIGN KEY (item_id) REFERENCES public.item(id);
 M   ALTER TABLE ONLY public.user_item DROP CONSTRAINT user_item_item_id_foreign;
       public               user    false    222    230    3571            �           2606    49674 #   user_item user_item_user_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_item
    ADD CONSTRAINT user_item_user_id_foreign FOREIGN KEY (user_id) REFERENCES public."user"(id);
 M   ALTER TABLE ONLY public.user_item DROP CONSTRAINT user_item_user_id_foreign;
       public               user    false    230    219    3567            �   i   x�E�K� E�qY��nL�
$��@W/6���u�P�5t�+����ƣVy#�%Y��7��i���}���u��r�9L��!�:o�U�x�X)�x ��5�      �   �  x���;o�0���=z��^]:4����K��
)�EJ�^��/��vJ�������!��f^H�Q���F�O*E��=�I1��Qk���+�%�{pҚY�&[�;��V|�7}�0z=^���%��b/�艚J�n�o���~í�&�Ą����.`�д�x��L�Ԕ3N��diHҿG�����2��Ȗ��ͶiSb�A�7	�?� �&�@϶�+�`�$��T��b�������n��Â�ǂ�b\
�@((�^��?��w���"j�\�v�CB��f,����������:X�T����6��j��è���k1���P����e�výc��s>hy^ƞ�a	����\�7vre�@�5P���{>j�l�G�6�0��0�϶��as���9�ŊE�m��|�w��[��      �      x��\�n�Ɩ}����	�R��sA�$9�g;+� T��݌HË:����	��'�%���U�*�ݖ�3��ؒ��X�/k�}���I�mW�Z'�i7d�P�O��O�E�K�]�=��V�i��KU��*U��t�j]��VO��H�(��ve����!�U�=��jej���H~V���U�k��5*�\�Ǽ���]�sLQv��PU�MT������=ߴ��3CC�U�`xx�UQ���rǹ���&o����SS�:�N7����
Z﷢W^�_�p���Y���ݫ:]k���V���ƴ�Z���)�Z?��}Ӛ�t}��Q-dЧ3�[+��l��a�nJ��mQoq�fh�:�<��&���d���j(M�]����k��X=�4k��I{�'Ĥyq��~{�w�W�Ǩ'�^$��R(�M��|&������֣E�b�0�w���t^dE��t�B��cЖ/�S�I>�S�u��$,2oZ�.L_d�Ļސ��S�k�|�E��F�Y�	>���Q���EKJ�9���b�"|<�N��(S�j��2nK󤓛���mfںK~�gj��lR��V��:S�lM�;p����׎j.����h���5��:ȑ����t�.�^��uQc#�^���?B���*� i��}���s��*{��{fkw��iU�,�ڱ�L�k�;�d�V����.��$Fx�o�3�I)<��u�se�����0x�Vx�=,����2'���h��j!3u7T�O�b��Ao8d����z-�I��;��/�G�84lo]�L�mN� K��_�˰����Y-����C�h��"�/����KzE��uv��:������U$�'+��ɡ�Z,���f_�_�5� ���K��G���5+��O�p�F�EV3�#z��-dyy	��M{H��&d��l�x �Jw�=�� [l�{crx�t턉���Kۂ�D">%9��V�x���jw������,�
��uQ��B�@]���9�i,�X`�L��}aK�.Z(�!�����Ŗ$��Žj*ݖjݪ/!ī�%>�K�+$��
����v��0�n	����T�iIb�*�+m��&����R"#-���
݉-������ )-�׮р�L��hN���ە�?���{��:t0"���\B�.D�#�p�y�/����S�/��&�����.}+e�+z�x��i5t;<�AcK�8����?��K+�鿐��h��M��ţ�q�UQ*��Ț,�4�1嗚=����Q� QbE ����v�pUS�ڐU&o56�X��>�������uT��f�Gjx�4��n�2k���4�EPi����9F(�j�p2�ˢ���ޞC6{$�6+Vo Ѹ�Ho�L�S�8Aa�,�������urOΈO��*���O��V��Eh��op�"z��A�9�Á61U���P+�sU�iiQb�z8�=���!�Z��hJ@Y/���:��*��1J����UQu:B�ۛ�
��j��X]l�(Y�|�|$A���� aW�#�D`L�)x�E�G(.7$������G�kp63���@�a��6��lt�n�Pn�6p
�����.@�u�%�����m�lG1��,h���7�F0=�}	��}����~��H���"("io�N)D `��n�5�f��5s./�wPC�H�-6�T�]չ��9��� �ֽ:ߖ�P���w]1Tϗ�]�cBd#�J"G����s0��X�Dx������-~*���/��'ۜb���� U����%&Ə��bA�����aAg���%ʱ��{˄�6Dj	@c�nA�+d^H�v!�0��������cH z��7�]:t��L�X@y�����������-v����E�"l6�ŗ��ww堁[큳���3T(aX[d�
A�u������_D\�J�R����%�ҙ��#�tP �����C3�T��ci��A^�v;�롘m�Z�3B�|�3u�#T}�4�15U�Y8��2p�܋!�>�A�3� V����,�\��\v�����}��ΐ��/V%)�D�sF�gb-Gа�L&���`��#�.e�-,:�k~�S���u������[���6�d���a�M�la��a��~qǒ��~	�_~����fD]�� ��5�	$/��X�Mm�"!)(�\v;r�(\�"�eL�q�2������qޒV��R�r�,��U�Ӝ�vDar<-���B�x��,I:���[���9�_Y��װ�n�����@R(�wR�	�պ<�l}�QhM5�[��|��!\�]}��o�m�}���,9U��?�j�_0`s)���ry��c�/�����hLi��R?:� ���2"s�m��n�L,ѷ��W[Q��^�mg�-I�g�"��m�:�7[Pab�%`D�	"�M��f ���W`���=��/R�Ɗ�ө������V5�:(�
�^
�@	s@��5)��l|���0lB
�ڽ��dz������O�_�Zً���@�#�𑎂�L9�4��[��"�=<�KX��!��N�:��EJ��-��\E`(�֚B�oE�-�j���nI;�����P-+��+]��9�r�c�W�ƅ�QԯlI��씼�������:�;	�.C����gm�i��΂2���ߡ�f��Q�f�����c�����;�M�
hBg�>�����NBe�P[+G9A�����'�#����{pr1�+��Fǫ���sB����\��:�,��-?�]�Y����V��5���3+p$�B��}��Xb�2�aF8�5N���y�Ɉ*4k��K���(R��Vo�D�JB'K.W��)2�Sz[0�
x�D�۹*��4�d>��D�2b>c9�Y�f���IԒz��#��ۄ��(�������q��L�A���b�>B��:�\$�Z�YY��l�"a7����m������l���K'�2������o-����k�xA��X{�����N�x�
A����H��,l��KO����~/������L0|Z�:�t,`�W�!���^��%?��msP�&z"KZ	����(���M�!���R��������in�����x�(�����fw��;C��uC�N~��$�j~�\��2�<�#7�v�*
�7Egj�;)����PZuI��d��S_���X�a|��v@%5��1�eZ)��Mx�,VO�P��ܠjcO��yMU��m���h�@�x��T�ȩ pT5H|m} �U1r���=.+M�i��w��Ti!��hn�ιd���ۑ�oR�`+��w��X�u�cK���E5Vm��ew��[���E�і��ϋ�*�S�N�=G}�r�Ƭi�9A�
����,��3��<��Mf��oU�o�Zsk�������4��7-5\�M]ה�SN���ivH<�y�����4�Z����8�*F�\�f�9���'�R>"�X�&��V��OE�~;�BMt�k�7��&�cFX,&�UwLi�p.��A:���?qo� ���I��guhH9:��8e$"��o6���p)Z���]�,�PÏ�:��A��1�EQc�ʊ�)n�٣�H|k�b����8 �tӃ�>䊜��%-TC���b�iX6�+�7�y��$�4h�.6����4��XYP��︣P��|�;��|]t;�:��;L��M����ha^jK�u���.v��12@%Y1TǃCƟ1Q�����B�~}�"���� �W�p���ũ/��[�{}���4׺]�5������@����ղ�E���x��g(*t���3��c���};��͹�8����5��G��+�F�~X�S7v�4����rhAZƷT���U�2�C�]�`QQ��ԑf^C%��{|�QL
��,-�:��{�اfy�2����XҾ�(!E��V�o�2�����g�Y��Z�F��`�0�u��Hg�Yrr�cT��@��{�����j�j������!+m�9�����Ƣ������tÕ�0p�H�-��y� ���j�|03��� B  Z�Ζ����E1��J�'/ ����z@F@q�g\L-
�4�iձ���cwA�F;瀧�	H6��L�#�S�`�p���i��ɾ��8"j�X��թ�VW5���1r_��	���2�˳�o�w8)��d�����OmJ�M@ >��VX0��-��LC�X���v��F�p��2u��\w�;_'��8�D�� �iȏu�V�����+�18w���t���߇�JJTs*�'��l��_��IeO�e����ZH���,t��.���Hc��K��OM{�^l$=+���t��c�{�?��.��0%���'*�����̩o�|�A0�n/d	���*�e?9�Ɉ6=�rri᳆�|����x�h�>~6�휜8b�X�s�eag"�8��,�3�	��X�~����D�f�y�6N}�M����yV��R�pT1~*c{h)�?��d����!��4]g��������`�2��"䝜it,W��'�U풦Lu%��X"�f#�o(�U
E�n����+�\Y�=9k2<G9�}�$I�8�h:b4d�Hӝ(8/���SB� ;\��[��&IkEW	��o�Ȋ�V�2w��	#��z՚y�X��#q)4�,�|��&)z��br�W�}OeZ�;�xq�ؔ�]���Z�M)�?I���5��: y>f*�^+6 �����0��Y��~Ը�j��x��OL��q���*����8|~2�J�:V�>V��XB�2�1���	CXd��t���Օ���]ۀ��_q	�
���-�3_�~~-=�؄�pg�֏���)E��1�������t��,�n��c3*�~���^���M�L����t.��~�󭛱<]l@�u>�����B��%]���|i#���S?����6�ZY�����{߳<v9(����8��.\rg@O��Mk�!sa)�V��{�HU�E-���1X�˕�7�n���r���cr�_�$Q*�����F�ɹ+F7_'�5�7y}��X)�v�A?$a<y���r��ʣ��@�2��ycv�`���~y�
[^}Jw��q��������-�eע'3E��]8DS�m]����G����l�9�v�5�0$*n<� @K��w����]�PM��)���K.]	�ܫ�3�LE��Lt���TU�����
n�y�)B���e�K�ɍ�e�P�<kW�ÓQ��_O%&f��V�M��!�G����u�j�k]�e����K��,���S�8
��U�%ĴmX,�7��I=��r̈́�wK�%+�(dA�F��)�b�S�˥�F _U4���ޱ���#��SW��p:��AE����<qKS!xR�.w�hn�I���� ��U�s�(���-���c�3r�,ez��}4E/�w|��p���H"E{�O�+��Ƚ����	�S���KO>���__N꽋ʑG�uz��^��u�B��Zmzw��R�霎^$��M������7#�N���.��W�.����@,E�2����㯢	���Ȣґ�-.XUx�8}LA�s|(*�.��gi��t�믓l?�N���4I�}��nﾞ�~Zt�\�"�P�2E���	n��OO1�4Ղ>t��8������������bu��m�N�}I���U��9AU������N�?E��N2�!l�fb���㔹��SQ�Pڅ����Vჾ����ȑ�*g��rrnZR�P�ͧshɟ�3=���ŬV
��������֙��4w�R�/�`��j��̖�7g7W2�~T�~�/{�E�o$����@�(�b�/I���������$#<Eߧ���F�wc~0kG�����5�b^�O�9�Z�-E=�R .���c�cP)�W-X�w��q*Eڻ�(Lu���Q�R0a��˕d=���s�-�����>`�5�=��$�n�VtL�}u�:����9�O�WA�~!��Ɗ+��k}�'R���UjM��O�Q�9I^ޚ�H��v��_c�ǌ�&y���G�]��{7v�XFs �X�i���iWK���UϹ
јɟVcְ�+���,���)�x���v�""swS�E��L��lbc���6.N�#8�qqvv��&��      �   �   x�E�A�0���)�V�sj�V�<T�F A,�:]�E���wz����crcϨ-3���q���ɨ�SqɋT~6]����hYsfáZ��=Ze�P\�p� ��$�B�	�؍H����Zv%k4��6F^�fjT�d�L� v0�^k�)����+�x�7���V�Xײ���:?      �   �  x���K��0�s�檄 �ی�E|0��^2�%�>�ꬳ[sح��N_~]�@Eˊ��rZw?���"��X�qk�y{�ڼ1�0?ǎD.��f�g�&�GR_�=�[��ԅ������B_�ߞ���!'?.S��N����Ȯ�,^�c�����޵l�jR���Q�7?l/c���#@]D:Ҿ���!���� $����A�u��a[�9������E�G���sE/K�썟�3˃�j�Tm�4-$���_�ҵ���3k��FݖrP�s���i�`V�P��,���f�r<ի���$b����)�F-`ن�쬇���}gX�I�;<A�x�N��[(����m5���e^3��	�Ȟ��}�v���y������.��1~�n�d�Ʃ�`2����Y�ʔo��o\�
�E]Tu$w�*N3ZwF���g�U<&��ͅ"�t�ƪ:�U8,�bd����ˎ��kk%Ӏ��N��t� �~�8��	x��      �   �   x�E��!г)&�K/9���_�F�s��|��&���|B&��E���)F�b�c0T6F�Nd;����wJ8a ���4�:ɖ���\��OSV��f 'E�g��)㒖�r�j����.o�7׫�K�n�K#e;o���~�ҹ$�w;����G��g�h?�����{H	     