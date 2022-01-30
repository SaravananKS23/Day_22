import React, { useEffect, useState } from 'react';
import Stars from "./star.js";
export default function Card(props) {
  useEffect(() => {
    return () => {
      // will trigger while un-mounting
      console.log('Removed Card >', props.id)
    }
  }, []);
const [disable, setDisable] = useState(false);
  return (
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{props.sale}</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{props.item}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
      <Stars />
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{props.price1}</span> {props.price2}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="text-center card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button disabled={disable} className="text-center btn btn-outline-dark mt-auto" onClick={() => { props.onAdd({ sale: props.sale, item: props.item, price1: props.price1, price2: props.price2},setDisable(true))  }}>{props.cart}</button>
                            </div>
                        </div>
                    </div>

  );
}
