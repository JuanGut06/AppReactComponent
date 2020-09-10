import React from 'react';
import Buscador from "./Components/Buscador";
import Tarjeta from "./Components/Tarjeta";

function App() {
    return (
        <div className="app container">
            <div className="jumbotron">
                <div className="lead text-center form-group col-md-12">
                    <h1>SpotifyX</h1>
                </div>
                <br/>
                <Buscador/>
                <br/>
                <Tarjeta/>

            </div>
        </div>
    );
}

export default App;
