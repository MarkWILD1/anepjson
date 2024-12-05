
import React, { useState, useRef, useEffect } from 'react';
import data from './data.json';
import Logo from '../public/logo.png'
import './App.css';
import './tailwind.css'

const App = () => {
  return (
    <div id="root" className="flex flex-col items-center min-h-screen justify-center bg-gray-900 text-white">
      <img className='w-32 h-32 mb-6"' src={Logo} alt="" />
      <h2 className='text-orange-500'>PRIME</h2>
      <h1 className="text-3xl font-bold mb-10">Contenidos por TRAMO</h1>
      <div className="flex flex-col items-center space-y-4 w-full max-w-md">
        {data.tramos.map((tramo, index) => (
          <Tramo key={index} tramo={tramo} />
        ))}
      </div>
    </div>
  );
};

const Tramo = ({ tramo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-5 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md text-left transition-all duration-300"
      >
        <h3 className='text-amber-300 text-3xl'>{tramo.nombre}</h3>
      </button>
      <div
        className={`expandable-content ${isOpen ? 'open' : ''}`}
      >
        {Array.isArray(tramo.unidadesCurriculares) && tramo.unidadesCurriculares.length > 0 ? (
          <ul className="list-disc list-inside">
            {tramo.unidadesCurriculares.map((unidad, index) => (
              <Unidad key={index} unidad={unidad} />
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-400">No hay contenidos disponibles</p>
        )}
      </div>
    </div>
  );
};

const Unidad = ({ unidad }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-5 bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold rounded-md shadow-md text-left transition-all duration-300"
      >
        {unidad.nombre}
      </button>
      <div
        className={`expandable-content ${isOpen ? 'open' : ''}`}
      >
        {Array.isArray(unidad.niveles) && unidad.niveles.length > 0 ? (
          <ul className="list-disc list-inside">
            {unidad.niveles.map((nivel, index) => (
              <Nivel key={index} nivel={nivel} />
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-400">No hay contenidos disponibles</p>
        )}
      </div>
    </div>
  );
};


const Nivel = ({ nivel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-5 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-md shadow-md text-left transition-all duration-300"
      >
        {nivel.nivel}
      </button>
      <div
        className={`expandable-content ${isOpen ? 'open' : ''}`}
      >
        {Array.isArray(nivel.contenidos) && nivel.contenidos.length > 0 ? (
          <ul className="list-disc list-inside">
            {nivel.contenidos
              .filter(contenido => typeof contenido === 'string' && contenido.trim() !== "")
              .map((contenido, index) => (
                <li key={index} className="mt-1">{contenido}</li>
              ))
            }
          </ul>
        ) : (
          <p className="mt-2 text-gray-400">No hay contenidos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default App;




/* import React, { useState } from 'react';
import data from './data.json';
import './App.css'; 
import './tailwind.css'

const App = () => {
  return (
    <div id="root" className="flex flex-col items-center min-h-screen justify-center bg-gray-900 text-gray-300">
      <h1 className="text-4xl font-bold mb-10">Contenidos por TRAMO</h1>
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        {data.tramos.map((tramo, index) => (
          <Tramo key={index} tramo={tramo} />
        ))}
      </div>
    </div>
  );
};

const Tramo = ({ tramo }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-5 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md text-left transition-all duration-300 mt-4"
      >
        {tramo.nombre}
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 border-l border-gray-600 pl-4">
          {tramo.unidadesCurriculares.map((unidad, index) => (
            <Unidad key={index} unidad={unidad} />
          ))}
        </div>
      )}
    </div>
  );
};

const Unidad = ({ unidad }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-5 bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold rounded-md shadow-md text-left transition-all duration-300"
      >
        {unidad.nombre}
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 border-l border-gray-500 pl-4">
          {unidad.niveles.map((nivel, index) => (
            <Nivel key={index} nivel={nivel} />
          ))}
        </div>
      )}
    </div>
  );
};

const Nivel = ({ nivel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-5 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-md shadow-md text-left transition-all duration-300"
      >
        {nivel.nivel}
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 border-l border-gray-400 pl-4">
          <ul className="list-disc list-inside">
            {nivel.contenidos.map((contenido, index) => (
              <li key={index} className="mt-1">{contenido}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App; */
