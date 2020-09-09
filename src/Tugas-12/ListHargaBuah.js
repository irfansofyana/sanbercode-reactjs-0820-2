import React, {Component} from 'react';
import './style.css';


class ListHargaBuah extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            inputBuah: '',
            inputHarga: '',
            inputBerat: '',
            isEdit: false
        }
        this.handleChangeBerat = this.handleChangeBerat.bind(this);
        this.handleChangeHarga = this.handleChangeHarga.bind(this);
        this.handleChangeBuah = this.handleChangeBuah.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(buah, harga, berat) {
        this.handleDelete(buah, harga, berat);
        this.setState({
            isEdit: true,
            inputBerat: berat,
            inputBuah: buah,
            inputHarga: harga
        });
    }

    handleDelete(buah, harga, berat) {
        let newList = [];
        for (let i = 0; i < this.state.list.length; ++i) {
            if (this.state.list[i].nama !== buah || this.state.list[i].harga !== harga || this.state.list[i].berat !== berat) {
                newList.push(this.state.list[i]);
            }
        }
        this.setState({
            list: newList
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.isEdit) {
            this.setState({
                list: [...this.state.list, {
                    nama: this.state.inputBuah,
                    harga: this.state.inputHarga,
                    berat: this.state.inputBerat
                }],
                inputBuah: '',
                inputHarga: '',
                inputBerat: '',
            });
        } else {
            this.setState({
                list: [...this.state.list, {
                    nama: this.state.inputBuah,
                    harga: this.state.inputHarga,
                    berat: this.state.inputBerat
                }],
                inputBuah: '',
                inputHarga: '',
                inputBerat: '',
            });
        }
    }

    handleChangeBuah(event) {
        this.setState({
            inputBuah:event.target.value
        });
    }

    handleChangeHarga(event) {
        this.setState({
            inputHarga:event.target.value
        });
    }

    handleChangeBerat(event) {
        this.setState({
            inputBerat:event.target.value
        });
    }

    RowTable = (props) => {
        return(
            <tr className = { props.isHeader ? 'header-row' : 'main-row'} >
                <td className = { props.isHeader ? 'header-column' : 'main-column'}> {props.col1} </td>
                <td className = { props.isHeader ? 'header-column' : 'main-column'}> {props.col2} </td>
                <td className = { props.isHeader ? 'header-column' : 'main-column'}> 
                    {props.isHeader ? props.col3 : `${props.col3/1000} kg` } 
                </td>
                <td className = {props.isHeader ? 'header-column' : 'main-column'}>
                    {
                        props.isHeader ? 'edit' : 
                        <button onClick={() => this.handleEdit(props.col1, props.col2, props.col3)} >edit item</button>
                    }
                </td>
                {
                    <td className = {props.isHeader ? 'header-column' : 'main-column'}>
                    {
                        props.isHeader ? 'delete' : 
                        <button onClick={() => this.handleDelete(props.col1, props.col2, props.col3)}>delete item</button>
                    }
                    </td> 
                }
            </tr>
        )
    }

    render() {
        return(
            <>
            <h1 style={{ textAlign: 'center' }}>Tabel Harga Buah</h1>
            <table className='table'>
                <this.RowTable isHeader = {true} col1='Nama' col2='Harga' col3 = 'Berat'/>
                {
                    this.state.list.map((buah) => {
                        return (
                            <this.RowTable isHeader= {false} col1 = {buah.nama} col2 = {buah.harga} col3 = {buah.berat} />
                        )
                    })
                }
            </table>

            <form onSubmit={this.handleSubmit}>
                <label>Masukkan Nama Buah</label>
                <input type="text" value = {this.state.inputBuah} onChange={this.handleChangeBuah}/>
                <br/>
                
                <label>Masukkan Harga Buah</label>
                <input type="text" value = {this.state.inputHarga} onChange={this.handleChangeHarga}/>
                <br/>

                <label>Masukkan Berat Buah</label>
                <input type="text" value = {this.state.inputBerat} onChange={this.handleChangeBerat}/>
                
                <br/>
                <button>Submit</button>
            </form>
        </>
        )
    }
}

export default ListHargaBuah;
