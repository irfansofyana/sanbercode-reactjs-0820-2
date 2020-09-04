import React from 'react';
import './style.css';

const FormPembelian = () => {
    return(
        <div className="Outer-form">
            <h1 style={{textAlign: "center"}}>Form Pembelian Buah</h1>
            <table style={{width: "50%"}}>
                <tr>
                    <td className="column"><strong>Nama Pelanggan</strong></td>
                    <td className="column"><input type="text"/></td>
                </tr>
                <tr>
                    <td className="column"><strong>Daftar Item</strong></td>
                    <td className="column">
                        <form action=""> 
                        <input type="checkbox" id="semangka"/>
                        <label for="semangka"> Semangka </label>
                        <br/>
                        
                        <input type="checkbox" id="jeruk"/>
                        <label for="jeruk"> Jeruk </label>
                        <br/>

                        <input type="checkbox" id="nanas"/>
                        <label for="nanas"> Nanas </label>
                        <br/>
                        
                        <input type="checkbox" id="salak"/>
                        <label for="salak"> Salak </label>
                        <br/>

                        <input type="checkbox" id="anggur"/>
                        <label for="anggur"> Anggur </label>
                        <br/>

                        </form>
                    </td>
                </tr>
                <tr>
                    <td className="Button-submit">
                        <input type="submit" value="kirim" style={{borderRadius: "10px"}} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default FormPembelian;