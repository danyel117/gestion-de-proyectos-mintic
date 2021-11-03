import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <Head>
        <title>Home | Gestión de Proyectos</title>
      </Head>
      <p>Pagina de Index</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
      </Link>
      <div>
        <i className='fas fa-home' />
      </div>
    </div>
  );
};

export default Home;
