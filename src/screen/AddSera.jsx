//cette code contient les htmlFormulaires d'ajouter sera
import React, {  useEffect, useState } from 'react';
import {useDispatch}  from 'react-redux';
import { createSera } from './../Redux/Actions/ActionSera';
import { useSelector } from 'react-redux';


function AddSera() {

    const [nameSera , setName] = useState('')
    const [price , setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [contact , setContact] = useState('')
    const [category , setCategory] = useState('')
    const [nameFacebook ,setNameFacebook] = useState('')
    const [image , setImage] = useState()
    const dispatch = useDispatch()

    const seraCreate = useSelector((state)=> state.sera)
    const {sera} = seraCreate
    

  useEffect(() => {
    if (sera) {
      dispatch({ type: "ADD_SERA_FAIL" });
      setName("");
      setDescription("");
      setCategory("");
      setNameFacebook("")
      setContact("")
      setPrice(0);
      setImage("")
    }
  }, [sera, dispatch]);

const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createSera(nameSera ,price ,description , contact ,category ,nameFacebook ,image))
}

  return (
    <div>
        <div className="container">
        
            <form className="htmlForm" onSubmit={handleSubmit}  encType="multipart/htmlForm-data">
            
                <h2>Hisera</h2>
                
                <div className="form-group">
                    <label htmlFor="nameSera">Anaran'ilay Sera</label>
                    <input type="text" id="nameSera" name="nameSera" value={nameSera} onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Findaynao</label>
                    <input type="text" id="contact" name="contact" value={contact} onChange={(e)=>setContact(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="nameFacebook">Anaranao ao amin'ny Facebook (Afaka tsy asiana)</label>
                    <input type="text" id="nameFacebook" name="nameFacebook"  value={nameFacebook} onChange={(e)=>setNameFacebook(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Sarany</label>
                    <input type="number" id="price" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mombamomba ny sera</label>
                    <textarea id="description" name="description" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Sokajy</label>
                    <select id="category"   onChange={(e)=>setCategory(e.target.value)} required>
                        <option value="">Categories</option>
                        <option value="technologie">Technologie</option>
                        <option value="vetement">Vetement </option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Sarin'ilay Sera</label>
                    <input filename={image}  onChange={e => setImage(e.target.files[0])}  type="file" accept="image/*"></input>
                </div>
            
                <button type="submit">Asera</button>
        
            </form>
    </div>
</div>
  )
}

export default AddSera
