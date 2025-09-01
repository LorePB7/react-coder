import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {greeting}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubrí nuestra increíble selección de electrodomesticos con la mejor calidad y precios de todo el mercado.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Samsung Galaxy S25</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              RAM: 12 GB.
              Compatible con redes 5G.
              Pantalla Dynamic AMOLED 2X de 6.2".
              3 cámaras traseras de 50Mpx/10Mpx/12Mpx.
              Batería de 4000mAh con carga inalámbrica.
              Memoria interna de 512GB.
            </p>
            <div className="text-2xl font-bold text-blue-600 mt-auto">$999</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Notebook Hp</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              255 G10 Amd Ryzen 7 7730u, 
              Ram 16gb, SSD 512gb, 
              Pantalla 15,6'' Fhd, 
              Sistema Opertativo Windows 11 Home
              </p>
            <div className="text-2xl font-bold text-blue-600 mt-auto">$1,299</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Parlante JBL Charge 6</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Es a prueba de agua.
              Apto para uso en exteriores.
              Con conectividad bluetooth.
              Batería recargable.
              Potencia de 30W.
              Conector de entrada: USB.
            </p>
            <div className="text-2xl font-bold text-blue-600 mt-auto">$799</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
