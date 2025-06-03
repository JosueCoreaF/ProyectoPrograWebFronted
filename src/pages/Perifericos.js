import React from 'react';

 function Perifericos() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Periféricos Gamer</h2>
      <div className="row g-4">
        {/* Repite este bloque para cada producto */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img src="https://imgs.search.brave.com/G36K3Dw_fG-Ikzoz9z-ZXU7hadtAfBPbZnc9OU5Bs0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgyNDQ0Ni1NTFU3/MzkzNTE1MTc2M18w/MTIwMjQtVi53ZWJw" className="card-img-top" alt="Teclado RGB" />
            <div className="card-body text-center">
              <h5 className="card-title">Teclado Mecánico RGB</h5>
              <p className="card-text text-muted">$1,299 MXN</p>
              <button className="btn btn-primary w-100">Comprar</button>
            </div>
          </div>
        </div>
        {/* ...más productos */}
      </div>
    </div>
  );
}
export default Perifericos;