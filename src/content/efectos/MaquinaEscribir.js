import React, { useState, useEffect } from 'react';

const Maquina = ({ mensajes, velocidad = 100, pausa = 100 }) => { // Añade aquí la variable 'pausa' con un valor predeterminado
  const [indice, setIndice] = useState(0);
  const [subindice, setSubindice] = useState(0);
  const [reversa, setReversa] = useState(false);

  useEffect(() => {
    if (subindice === mensajes[indice].length + 1 && !reversa) {
      setTimeout(() => setReversa(true), pausa);
      return;
    }

    if (subindice === 0 && reversa) {
      setReversa(false);
      setIndice(prev => (prev + 1) % mensajes.length);
      return;
    }

    const direccion = reversa ? -1 : 1;
    const tiempo = reversa ? 75 : velocidad;

    const tipo = setTimeout(() => {
      setSubindice(prev => prev + direccion);
    }, tiempo);

    return () => clearTimeout(tipo);
  }, [subindice, indice, reversa, mensajes, velocidad, pausa]);

  return (
    <h1 className="loader-header">
      <span className="habilidades">{mensajes[indice].substring(0, subindice)}</span>
    </h1>
  );
};

export default Maquina;