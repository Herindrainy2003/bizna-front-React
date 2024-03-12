import React from 'react'

function Hitady() {
  return (
    <div>
      <div class="container">
    <form class="form" action="#" method="POST">
        <h2>Hitady Sera</h2>
        <div class="form-group">
            <label for="anaranao">Sera Tadiavna</label>
            <input type="text" id="anaranao" name="anaranao" required />
        </div>
        <div class="form-group">
            <label for="findaynao">Findaynao</label>
            <input type="text" id="findaynao" name="findaynao" required />
        </div>
        <div class="form-group">
            <label for="findaynao">Anaranao ao amin'ny Facebook (Afaka tsy asiana)</label>
            <input type="text" id="findaynao" name="findaynao"  required />
        </div>
        <div class="form-group">
            <label for="prixsera">Sarany Zakanao</label>
            <input type="number" id="prixsera" name="prixsera" required />
        </div>
        <div class="form-group">
            <label for="mombamomba">Mombamomba ny sera Tadiavina</label>
            <textarea id="mombamomba" name="mombamomba" rows="4" required></textarea>
        </div>
        <div class="form-group">
            <label for="categories">Sokajy</label>
            <select id="categories" name="categories" required>
                <option value="option1">Technologie</option>
                <option value="option2">Vetement </option>
                <option value="option3">Autres</option>
            </select>
        </div>
        <div class="form-group">
            <label for="photo">Sarin'ilay Sera Tadiavina</label>
            <input type="file" id="photo" name="photo" accept="image/*" required />
        </div>
        <button type="submit">Tadiavina</button>
    </form>
</div>
    </div>
  )
}

export default Hitady
