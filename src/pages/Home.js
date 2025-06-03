import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1 className="mb-4">¡Bienvenido a Proyecto Web!</h1>
        <p className="lead">
          Explora nuestros productos, descubre ofertas y contáctanos para más información.
        </p>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Bienvenida"
          className="img-fluid rounded shadow mt-4"
          style={{maxWidth: "400px"}}
        />
      </div>
    </div>
  );
}

export default Home;