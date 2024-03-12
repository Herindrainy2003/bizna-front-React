import React, { useState } from 'react'
import { ActionSera } from '../Redux/Actions/ActionSera'
import {useDispatch}  from 'react-redux'
function AddSera() {

const [nameSera , setNameSera] = useState('')
const [priceSera , setPriceSera] = useState('')
const [descriptionSera , setDescription] = useState('')
const [contact , setContact] = useState('')
const [nameFacebook ,setNameFacebook] = useState('')
const [image , setImage] = useState('')
const dispatch = useDispatch()
const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(ActionSera(nameSera ,priceSera ,descriptionSera , contact ,nameFacebook ,image))
     setNameSera('') 
    setPriceSera ('')
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
            <input type="text" id="anaranao" name="anaranao"  onChange={(e)=>setNameSera(e.target.value)} required />
        </div>
        <div class="form-group">
            <label for="findaynao">Findaynao</label>
            <input type="text" id="findaynao" name="findaynao" onChange={(e)=>setContact(e.target.value)} required />
        </div>
        <div class="form-group">
            <label for="findaynao">Anaranao ao amin'ny Facebook (Afaka tsy asiana)</label>
            <input type="text" id="findaynao" name="findaynao" onChange={(e)=>setNameFacebook(e.target.value)} required />
        </div>
        <div class="form-group">
            <label for="prixsera">Sarany</label>
            <input type="number" id="prixsera" name="prixsera" onChange={(e)=>setPriceSera(e.target.value)} required />
        </div>
        <div class="form-group">
            <label for="mombamomba">Mombamomba ny sera</label>
            <textarea id="mombamomba" name="mombamomba" rows="4" onChange={(e)=>setDescription(e.target.value)} required></textarea>
        </div>
        <div class="form-group">
            {/* <label for="categories">Sokajy</label>
            <select id="categories" name="categories" required>
                <option value="option1">Technologie</option>
                <option value="option2">Vetement </option>
                <option value="option3">Autres</option>
            </select> */}
        </div>
        <div class="form-group">
            <label for="photo">Sarin'ilay Sera</label>
            <input type="file" id="photo" name="photo" accept="image/*"  onChange={(e)=>setImage(e.target.value)} required />
        </div>
        <button type="submit">Asera</button>
    </form>
</div>
    </div>
  )
}

export default AddSera
