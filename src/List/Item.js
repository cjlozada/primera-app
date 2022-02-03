import React from "react";
import './Item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            rating: 1,
            stars: [],
            show: true
        }

        this.onremove = this.onremove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onShow = this.onShow.bind(this);
    }



    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(1)
        });
    }

    onremove(e) {
        alert("Va a eliminar '" + this.props.title + "'");
        this.props.onremove(this.props.id);
    }

    onHide(e) {
        alert("El elemento se ocultará");
        this.setState({ show: false });
    }

    onShow(e){
        alert("Todo lo bello vuelve");
        this.setState({show: true});
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onupdaterating({ id: this.state.id, title: this.state.title, rating: rating })

    }

    render() {
        if (this.state.show) {
            return (
                <div className="item">
                    <div className="title">{this.props.title}</div>
                    <div className="rating">
                        <p>
                            {
                                this.state.stars.map(x =>
                                    <img src="../../img/star.png" width="10" />
                                )

                            }
                        </p>
                        Clasificación:
                        <select value={this.props.rating} onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="actions">
                        <button onClick={this.onremove}>Eliminar</button>
                    </div>
                    <div className="actions">
                        <button onClick={this.onHide}>Ocultar</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="item">
                    <div className="actions">
                        <button onClick={this.onShow}>Mostrar</button>
                    </div>
                </div>);
        }
    }
}

export default Item;