CREATE TABLE public.croma_nn
(
    id serial NOT NULL,
    id_muestra integer NOT NULL,
    ind_oxg integer NOT NULL,
    ind_mat_org integer NOT NULL,
    ind_trans_sust integer NOT NULL,
    ind_n_elem integer NOT NULL,
    ind_romp integer NOT NULL,
    ind_mat_viva integer NOT NULL,
    ind_bio integer NOT NULL,
    ind_pro_n integer NOT NULL,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.croma_nn
    OWNER to milh;

CREATE TABLE public.identificacion
(
    id serial NOT NULL,
    id_muestra integer NOT NULL,
    p_ind_oxg integer NOT NULL,
    p_ind_mat_org integer NOT NULL,
    p_ind_trans_sust integer NOT NULL,
    p_ind_n_elem integer NOT NULL,
    p_ind_romp integer NOT NULL,
    p_ind_mat_viva integer NOT NULL,
    p_ind_bio integer NOT NULL,
    p_ind_pro_n integer NOT NULL,
    c_ind_oxg integer NOT NULL,
    c_ind_mat_org integer NOT NULL,
    c_ind_trans_sust integer NOT NULL,
    c_ind_n_elem integer NOT NULL,
    c_ind_romp integer NOT NULL,
    c_ind_mat_viva integer NOT NULL,
    c_ind_bio integer NOT NULL,
    c_ind_pro_n integer NOT NULL,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.identificacion
    OWNER to milh;

ALTER TABLE public.croma_nn
    OWNER to milh;

CREATE TABLE public.muestra
(
    id serial NOT NULL,
    id_lote integer NOT NULL,
    loc_gps varchar NOT NULL,
    profundidad integer NOT NULL,
    fecha date NOT NULL,
    asnm decimal NOT NULL,
    clima varchar NOT NULL,
    uso_suelo varchar NOT NULL,
    tipo_suelo varchar NOT NULL,
    num_img varchar NOT NULL,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.muestra
    OWNER to milh;

CREATE TABLE public.lote
(
    id serial NOT NULL,
    userid integer NOT NULL,
    pais varchar NOT NULL,
    estado varchar NOT NULL,
    municipio varchar NOT NULL,
    nombre_Lugar varchar NOT NULL,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.lote
    OWNER to milh;

CREATE TABLE public.usuario
(
    id serial NOT NULL,
    nombre varchar NOT NULL,
    ape_pat varchar NOT NULL,
    ape_mat varchar NOT NULL,
    correo varchar NOT NULL,
    rol integer NOT NULL,
    contraseña varchar NOT NULL,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.usuario
    OWNER to milh;