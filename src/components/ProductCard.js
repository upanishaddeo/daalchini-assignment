import axios from 'axios'
import React, { Component } from 'react'
import '../styles/productCard.css'


export class ProductCard extends Component {
    render() {
        
        return (
            <div className="cardContainer" key={this.props.id}>
                <div className="cardImage"><img src={this.props.image} /></div>
                <div className="cardDetails">
                    <div className="cardTitle">{this.props.title}</div>
                    <div className="cardBottom">
                        <div className="button" onClick={() => this.props.openDetails(this.props.id)}>Details</div>
                        <div className="cardPrice">₹ {this.props.price}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard
