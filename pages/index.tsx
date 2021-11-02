import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <p>Pagina de Index - prueba dev</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
      </Link>
    </div>
  );
};

export default Home;
