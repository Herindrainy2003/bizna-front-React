import React from 'react';
import sera from '../data/sera';
import { Link } from 'react-router-dom';

function DisplaySera() {
    
    return (
        <div className="row">
            {sera.map((sera, key) => (
                <div key={key} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mx-auto">
                 <br /> <br />
                    <div className="card" >
                        <img src={sera.image} alt={sera.nomSera} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{sera.nomSera}</h5>
                            <h7 className="card-title">{sera.prixSera}</h7>
                            <p className="card-text">{sera.Description}</p>
                            <Link href={`https://facebook.com/${sera.NomFacebook}`} className="btn btn-primary">Contacter</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplaySera;
