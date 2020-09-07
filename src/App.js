import React from 'react';
import FormPembelian from  './Tugas-9/FormPembelian';
import TabelHargaBuah from './Tugas-10/TabelHargaBuah';
import Timer from './Tugas-11/Timer';

function App() {
  return (
    <div>
      <FormPembelian />
      <TabelHargaBuah />
      <Timer countdown='101'/>
    </div>
  );
}

export default App;
