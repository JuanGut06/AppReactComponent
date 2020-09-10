import React, {Component} from 'react';

class Buscador extends Component {

    render() {
        return (
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Buscar tu cancion.
                        Ejemplo: Todo de cabeza"/>
                    </div>
                    <div className="form-group col-md-4">
                        <button type="button" className="btn btn-lg btn-danger btn-block">Buscar</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;