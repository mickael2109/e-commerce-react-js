import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';
import 'popper.js';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';



export const SildeMenu = ( { loadCategory, category }) =>{
    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
    return (
        <ul>
            {
                links.map((link, index) => {
                    return ( <li className={category === link && 'active'} key={index} onClick={() => loadCategory(link)}>{link}</li>)
                })
            }
        </ul>
    )
}

export const Footer = () =>{
    return (
        <footer>
            <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    )
}

export const Card = props =>{
    const { item, addToCart, count } = props
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    return (
        <div className="col-sm-5">
            <div className="card">
                <div className="card-image">
                    <img src={process.env.PUBLIC_URL+`./media/${item.category}/${item.image}`} width="170" height="170" alt={item.name}/>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>{item.name}</h4>
                        </div>
                        <div className="col-sm-6 ">
                            <p>£{item.price}/{item.unit}</p>
                            <button className="btn btn-warning btn-sm" onClick={openModal} data-toggle="modal" data-target={`#${item.ref}`}> View Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} closeModal={closeModal} item={item} addToCart={addToCart} count={count}/>
        </div>
    )
}

export const Modal = ({ showModal, closeModal, item, addToCart, count }) =>{

    const [qty, setQty] = useState(1)
    return (
        <>
            {
                showModal && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
                                    <i onClick={closeModal} style={{cursor:'pointer', color:'red'}}><FaTimes/></i>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={process.env.PUBLIC_URL+`./media/${item.category}/${item.image}`} width="170" height="170" alt={item.name}/>
                                        </div>
                                        <div className="col-sm">
                                            <p className="lead">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Nobis eos odio possimus, voluptatem dolore maxime nihil et?
                                                Praesentium tempore eos aliquid at magni dolores,
                                                amet iusto, tenetur nobis doloribus libero.
                                            </p>
                                            <h3 className="price">£{item.price}/{item.unit}</h3>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-secondary" onClick={() => setQty(count > 1 ? count - 1 : 1)}>-</button>
                                                <span className="btn btn-light qty">{qty}</span>
                                                <button type="button" className="btn btn-secondary" onClick={() => setQty(count + 1)}>+</button>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={closeModal}>Close</button>
                                    <button type="button" className="btn btn-success" onClick={() => addToCart(count + 1)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>         
    )
}

export const List = props =>{
    const { data, addToCart, count } = props
    // const produits = data.find(categoryData => categoryData[0].category === category);
    return (
        <div className="col-sm">
            <div className="row">
                {
                    data.map((item, index) => <Card key={index} item={item} addToCart={addToCart} count={count}/> )
                }
            </div> 
        </div>
    )
}