import React, { Component } from 'react'
import '../styles/home.css'
import ProductCard from './ProductCard'
import axios from 'axios'
import { Modal } from 'react-bootstrap'


export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            dataModal: [],
            category: "",
            categories: [],
            showModal: false
        }
    }
    closeModal = (id) => {
        this.setState({ showModal: false });
    }

    openModal = (id) => {
        this.setState({ showModal: true });
    }
    getProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            this.setState({ data: res.data, category: "Top Products" })
        }).catch((err) => {
            console.log(err)
        })
    }
    getCategories = () => {
        axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            this.setState({ categories: res.data })
            console.log("CATEGORIES ->>>>>>>>>>", res.data)
        })
    }
    getCategoryWiseProduct = (e) => {
        let value = e.target.value
        axios.get("https://fakestoreapi.com/products/category/" + value).then((res) => {
            this.setState({ data: res.data, category: value })
        })
    }
    openDetails = (id) => {
        this.setState({ showModal: true })
        axios.get("https://fakestoreapi.com/products/" + id)
            .then((res) => {
                this.setState({ dataModal: res.data }, () => {

                });
                console.log("Data on a single id", res);
            }).catch((err) => {
                console.log(err);
            })
    }
    componentDidMount() {
        this.getProducts();
        this.getCategories();
        this.closeModal();
    }

    render() {
        let dataModal = this.state.dataModal;
        let showModal = this.state.showModal
        return (
            <div className="homeContainer">
                <link rel="manifest" href="/manifest.json" />
                <Modal show={showModal} className="ModalBody" >
                    <Modal.Dialog closebutton>
                        <Modal.Body>
                            <div className="modalContent">
                                <div className="modalFlex">
                                    <div className="ModalImage"><img src={dataModal.image} alt={dataModal.title} /></div>
                                    <div className="ModalDescription">
                                        <div className="ModalHeading"><span>Product Name:</span> <br /> {dataModal.title}</div>
                                        <div className="ModalDesc"><span>Product description:</span> <br />{dataModal.description}</div>
                                        <div className="ModalPriceFLex" >
                                            <div className="ModalPrice"><span>Price : </span>₹ {dataModal.price}</div>
                                            <button className="ModalClose" onClick={() => this.closeModal()}>Close</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal>
                <div className="category-flex">
                    <h1>{this.state.category}</h1>

                    <select name="cars" id="cars" onChange={(e) => this.getCategoryWiseProduct(e)}>
                        <option value="" disabled selected>Select category</option>
                        {this.state.categories.map((category, id) => {
                            return (
                                <option value={category}>{category}</option>
                            )
                        })
                        }
                        {/* <option value="top">{category}</option> */}
                    </select>
                </div>

                <div className="dataFlex">
                    {this.state.data.map((item, index) => {
                        return (
                            <ProductCard title={item.title} image={item.image} price={item.price} id={item.id} openDetails={this.openDetails} />
                        );
                    })}
                </div>


            </div>
        )
    }
}

export default Home