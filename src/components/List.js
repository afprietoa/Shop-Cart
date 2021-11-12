import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../styles/List.css';
import { url } from '../helpers/url';
export const List = () => {

    const [registro, setRegistro] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        axios.get(url)
        .then(response => setRegistro(response.data))
        .catch(error => console.log(error))
    }
    const deleteData = (id) =>{
        axios.delete(url+id)
        .then(response=>{
            getData()
            console.log(response)
        })
        .catch(error => console.log(error))
    }
   
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Item</th>
                    <th>Photo</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actión</th>
                    </tr>
                </thead>
                
                 <tbody>
                     {
                         registro.map(est =>(
                             <tr key={est.id}>
                                <td>{est.id}</td>
                                <td>{est.name}</td>
                                <td><img src={est.image} alt="" width="80" height="80"/></td>
                                <td>{est.description}</td>
                                <td>$ {est.price}</td>
                                <td><button onClick={() => deleteData(est.id)}>Delete</button></td>
                             </tr>
                         ))
                     }
                   
                 </tbody>
            </table>
        </div>
    )
}
