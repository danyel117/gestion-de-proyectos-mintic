import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const PrivateLayout = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;

  if (!session) {
    signIn('auth0');
  } else {
    return (
      <div className='flex flex-col'>
        <button
          onClick={() => {
            signOut();
          }}
          className='w-32 bg-black text-white'
        >
          Cerrar sesión
        </button>
        Esta es una ruta privada
        {children}
      </div>
    );
  }
};

export default PrivateLayout;
