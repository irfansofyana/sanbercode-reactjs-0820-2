import React, {useState, useEffect} from "react"
import "./DaftarBuah.css"

import axios from "axios";

const DaftarBuah = () => {
    const [inputName, setInputName] = useState("");
    const [daftarBuah, setDaftarBuah] = useState([]);
    const [inputBerat, setInputBerat] = useState(0);
    const [inputHarga, setInputHarga] = useState("");
    const [indexForm, setIndexForm] = useState(-1);

    const handleSubmit = (event) => {
        event.preventDefault()

        let nama = inputName
        let harga = inputHarga.toString()
        let berat = inputBerat

        if (nama.replace(/\s/g,'') !== "" && harga.replace(/\s/g,'') !== ""){      
          let newDaftarBuah = daftarBuah
          let index = indexForm
          
          if (index === -1){
            newDaftarBuah = [...newDaftarBuah, {nama, harga, berat}]
          }else{
            newDaftarBuah[index] = {nama, harga, berat}
          }
            setDaftarBuah(newDaftarBuah);
            setInputName("");
            setInputHarga("");
            setInputBerat(0);
        }
    
    }
    
    const handleEdit = (event) => {
        const index = event.target.value;
        let db = daftarBuah[index];
        setInputName(db.nama);
        setInputBerat(db.berat);
        setInputHarga(db.harga);
        setIndexForm(index);
    }
    
    const handleDelete = (event) => {
        let index = event.target.value
        let newDaftarBuah = daftarBuah
        let editedDataBuah = newDaftarBuah[indexForm]
        newDaftarBuah.splice(index, 1)

        if (editedDataBuah !== undefined){
            var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
            setDaftarBuah(newDaftarBuah);
            setIndexForm(newIndex);
            
        }else{
           setDaftarBuah(newDaftarBuah);
        }
    }
    
    const handleChange = (event) => {
        let typeOfInput = event.target.name
        switch (typeOfInput){
          case "name":
          {
            setInputName(event.target.value);
            break
          }
          case "harga":
          {
           setInputHarga(event.target.value);
            break
          }
          case "berat":
          {
            setInputBerat(event.target.value);
            break
          }
          default: break;
        }
    }

    useEffect( () => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
            const db = res.data.map((el) => {
                return {
                    id: el.id,
                    nama: el.name,
                    harga: el.price,
                    berat: el.weight
                }
            });

            setDaftarBuah(db);
        });
    });

    return (
        <>
            <h1>Daftar Harga Buah</h1>
            <table>
            <thead>
                <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {
                    daftarBuah.map((item, index)=>{
                    return(                    
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                        <td>{item.berat/1000} kg</td>
                        <td>
                            <button onClick={handleEdit} value={index}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={index}>Delete</button>
                        </td>
                        </tr>
                    )
                    })
                }
            </tbody>
            </table>
            {/* Form */}
            <h1>Form Daftar Harga Buah</h1>
            <div style={{width: "50%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
                <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>
                    Nama:
                </label>
                <input style={{float: "right"}} type="text" name="name" value={inputName} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                    Harga:
                </label>
                <input style={{float: "right"}} type="text" name="harga" value={inputHarga} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                    Berat (dalam gram):
                </label>
                <input style={{float: "right"}} type="number" name="berat" value={inputBerat} onChange={handleChange}/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                    <button style={{ float: "right"}}>submit</button>
                </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default DaftarBuah;