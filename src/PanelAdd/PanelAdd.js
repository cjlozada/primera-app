import React from "react";

class PanelAdd extends React.Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            rating: 1
        };
    }

    onChangeTitle = (e) =>{
        this.setState({title: e.target.value});
    }

    onChangeRating = (e) =>{
        const rating = parseInt(e.target.value);
        this.setState({rating: rating});
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const title = this.state.title;
        const rating = this.state.rating;

        this.props.onAdd({title: title, rating: rating});
        this.props.oncancel();
    }

    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Título</label><br />
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>

                        <p>
                            <label>Calificación</label><br />
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.oncancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;