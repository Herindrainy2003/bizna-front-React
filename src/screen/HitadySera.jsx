//cette code contient les formulaires d'ajouter sera
import React, { useEffect, useState } from 'react'

import {useDispatch}  from 'react-redux'
import { TadySera } from './../Redux/Actions/ActionTadySera';
import { useSelector } from 'react-redux';
function HitadySera() {

    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [contact , setContact] = useState('')
    const [category , setCategory] = useState('')
    const [nameFacebook ,setNameFacebook] = useState('')
    const [image , setImage] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(TadySera(name ,price ,description , contact ,category ,nameFacebook ,image))
        setName("");
        setDescription("");
        setCategory("");
        setNameFacebook("")
        setContact("")
        setPrice(0);
        setImage()
    }

  return (
    <div>
        <div className="container">
        
            <form className="form" onSubmit={handleSubmit} encType="multipart/htmlForm-data">
            
                <h2>Hitady Sera</h2>
                
                <div className="form-group">
                    <label htmlFor="anaranao"> Sera  Tadiavina</label>
                    <input type="text" id="anaranao" name="anaranao" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
            
                <div className="form-group">
                    <label htmlFor="findaynao">Findaynao</label>
                    <input type="text" id="findaynao" name="findaynao" value={contact} onChange={(e)=>setContact(e.target.value)} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="findaynao">Anaranao ao amin'ny Facebook </label>
                    <input type="text" id="findaynao" name="findaynao"  value={nameFacebook} onChange={(e)=>setNameFacebook(e.target.value)} required />
                </div>
            
                <div className="form-group">
                    <label htmlFor="prixsera">Sarany Zakanao</label>
                    <input type="number" id="prixsera" name="prixsera" value={price} onChange={(e)=>setPrice(e.target.value)} required />
                </div>
            
                <div className="form-group">
                    <label htmlFor="mombamomba">Mombamomba ny sera</label>
                    <textarea id="mombamomba" name="mombamomba" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
                </div>
            
                <div className="form-group">
                    <label htmlFor="categories">Sokajy</label>
                    <select id="categories" name="categories"  onChange={(e)=>setCategory(e.target.value)} required>
                        <option value="technologie">Technologie</option>
                        <option value="vetement">Vetement </option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
            
                <div className="form-group">
                    <label htmlFor="image">Sarin'ilay Sera</label>
                    <input filename={image}  onChange={e => setImage(e.target.files[0])}  type="file" accept="image/*"></input>
                </div>
            
                <button type="submit">Hitady</button>
        
            </form>
    </div>
</div>
  )
}

export default HitadySera
