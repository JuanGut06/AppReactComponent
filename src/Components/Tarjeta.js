import React, {Component} from 'react';

class Tarjeta extends Component {

    render() {
        return (
            <form>
                <div className="container">
                    <div className="lead text-center form-group col-md-12">
                        <h1>Apedir su mano</h1>
                    </div>
                    <div className="lead text-center form-group col-md-12">
                        <img src="https://i.ytimg.com/vi/_xzIJtG9XXA/hqdefault.jpg" alt=""/>
                    </div>
                    <div className="lead text-center form-group col-md-12">
                      <button type="button" class="btn btn-success">Reproducir</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Tarjeta;