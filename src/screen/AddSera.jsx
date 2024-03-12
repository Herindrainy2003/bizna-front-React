//cette code contient les formulaires d'ajouter sera

import React, { useState } from 'react'
import { ActionSera } from '../Redux/Actions/ActionSera'
import {useDispatch}  from 'react-redux'
function AddSera() {

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
    dispatch(ActionSera(name ,price ,description , contact ,category ,nameFacebook ,image))
    setName('') 
    setPrice ('')
    setDescription('')
    setContact ('')
    setNameFacebook  ('')
    setImage('')
}

  return (
    <div>
        <div class="container">
        
            <form class="form" onSubmit={handleSubmit}>
            
                <h2>Hisera</h2>
                
                <div class="form-group">
                    <label for="anaranao">Anaran'ilay Sera</label>
                    <input type="text" id="anaranao" name="anaranao" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
            
                <div class="form-group">
                    <label for="findaynao">Findaynao</label>
                    <input type="text" id="findaynao" name="findaynao" value={contact} onChange={(e)=>setContact(e.target.value)} required />
                </div>
                
                <div class="form-group">
                    <label for="findaynao">Anaranao ao amin'ny Facebook (Afaka tsy asiana)</label>
                    <input type="text" id="findaynao" name="findaynao"  value={nameFacebook} onChange={(e)=>setNameFacebook(e.target.value)} required />
                </div>
            
                <div class="form-group">
                    <label for="prixsera">Sarany</label>
                    <input type="number" id="prixsera" name="prixsera" value={price} onChange={(e)=>setPrice(e.target.value)} required />
                </div>
            
                <div class="form-group">
                    <label for="mombamomba">Mombamomba ny sera</label>
                    <textarea id="mombamomba" name="mombamomba" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
                </div>
            
                <div class="form-group">
                    <label for="categories">Sokajy</label>
                    <select id="categories" name="categories"  onChange={(e)=>setCategory(e.target.value)} required>
                        <option value="Technologie">Technologie</option>
                        <option value="vetement">Vetement </option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
            
                <div class="form-group">
                    <label for="photo">Sarin'ilay Sera</label>
                    <input type="file" id="photo" name="photo" accept="image/*" value={image} onChange={(e)=>setImage(e.target.value)} required />
                </div>
            
                <button type="submit">Asera</button>
        
            </form>
    </div>
</div>
  )
}

export default AddSera
