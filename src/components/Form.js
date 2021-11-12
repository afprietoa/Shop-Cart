import React, { useState } from 'react';
import '../styles/Form.css';
import axios from 'axios'
import { url } from '../helpers/url';



export const Form = () => {

    const [estudiante, setEstudiante] = useState({
        name : '',
        description: '',
        price: '',
        image: ''
    })

    

    const handleChange = ({target}) =>{
        setEstudiante({
            ...estudiante,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }




    const postData = () =>{
        axios.post(url,estudiante)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Product Register</h2>
           <hr/>

               <div>
                   <center><label>Item</label></center>
                   <input id="inputName"  name="name" onChange={handleChange}/>
               </div>
               <div>
               <center><label>Description</label></center>
                   <input id="inputDescription"  name="description" onChange={handleChange}/>
               </div>
               <div>
               <center><label>Price</label></center>
                   <input id="inputPrice" type="number" name="price" onChange={handleChange}/>
               </div>
               <div>
               <center><label>Image</label></center>
                   <input id="inputImage"  name="image" onChange={handleChange}/>
                    
               </div>
               <div>
                   <button id="btnRegistro" onClick={ () => postData()}>ADD</button> 
               </div>
           </form>
        </div>
    )
}
