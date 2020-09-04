import React from 'react';
import './style.css';

const dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

const RowTable = (props) => {
    return(
        <tr className = { props.isHeader ? 'header-row' : 'main-row'} >
            <td className = { props.isHeader ? 'header-column' : 'main-column'}> {props.col1} </td>
            <td className = { props.isHeader ? 'header-column' : 'main-column'}> {props.col2} </td>
            <td className = { props.isHeader ? 'header-column' : 'main-column'}> 
                {props.isHeader ? props.col3 : `${props.col3/1000} kg` } 
            </td>
        </tr>
    )
}

class TabelHargaBuah extends React.Component {
    render() {
       return (
            <>
                <h1 style={{ textAlign: 'center' }}>Tabel Harga Buah</h1>
                <table className='table'>
                    <RowTable isHeader = {true} col1='Nama' col2='Harga' col3 = 'Berat'/>
                    {
                        dataHargaBuah.map((buah) => {
                            return (
                                <RowTable isHeader= {false} col1 = {buah.nama} col2 = {buah.harga} col3 = {buah.berat} />
                            )
                        })
                    }
                </table>
            </>
       )
    }
}

export default TabelHargaBuah;