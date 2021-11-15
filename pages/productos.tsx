import React from 'react';
import safeJsonStringify from 'safe-json-stringify';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  // const productos = await prisma.producto.findMany({
  //   include: {
  //     inventario: {
  //       include: {
  //         movimientoInventario: {
  //           include: {
  //             usuario: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  const productos = [];
  return {
    props: { productos: JSON.parse(safeJsonStringify(productos)) }, // will be passed to the page component as props
  };
}

const Productos = ({ productos }) => {
  console.log('Esta es la variable en el front', productos);
  return (
    <div>
      Estos son mis productos:
      <div>Tabla producos</div>
      {productos &&
        productos.map((p) => {
          return <div key={p.id}>{p.nombre}</div>;
        })}
    </div>
  );
};

export default Productos;
