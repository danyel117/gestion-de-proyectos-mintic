import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div>
      <Head>
        <title>Admin Usuarios | Gestión de Proyectos</title>
      </Head>
      <div>Pagina de admin de usuarios</div>
      <Link href='/'>
        <a>Ir al Home</a>
      </Link>
    </div>
  );
};

export default index;
