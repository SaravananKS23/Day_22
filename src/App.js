import "./styles.css";
import Nav from "./nav";
import Header from "./header";
import ProductItem from "./ProductList";
import Cards from "./cards";
import Footer from "./footer";
import React, { useState } from 'react'
import Modal from './modal';


export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [disable, setDisable] = useState(true);

  // { title: 'something' }
  const addToCart = item => {
    console.log('Add 2 Cart > ', item)
    setCartItems((oldStateValue) => {
      console.log('Old State >', oldStateValue)
      let updated = false;
      
      const newCartList = oldStateValue.map((d) => {
        let count = d.count || 1;
        if(item.item === d.item) {
          count++;
          updated = true;
        }

        return { ...d, count }
      })

      if(!updated) {
        newCartList.push({ ...item, count: 1 })
      }
      return newCartList;
    })
  }

  const deleteCartItem = (item) => {
    setCartItems((oldCartItems) => {
      const result = oldCartItems.filter(d => {
        if(d.item === item.item) {
          return false;
        }
        return true;
      })

      return result;
    })
  }

  const enableCartItem = (item) => {
    setCartItems((oldCartItems) => {
      const results = oldCartItems.filter(d => {
        if(d.id === item.id) {
          return setDisable(false);
        }
        return true;
      })

      return results;
    })
  }

  return (
<div>
      <Modal title='Your Cart!' showFooter open={showModal} onClose={() => setShowModal(false)}>
        {
          cartItems.length ? (
            <div>
              <h4>List of Products</h4>
              <ul>
                {
                  cartItems.map((d, index) => {
                    return <li key={index}>
<ProductItem sale={d.sale} item={d.item} cart={d.cart} price1={d.price1} price2={d.price2}  deleteItem={deleteCartItem}/>
                      </li>
                  })
                }
              </ul>
            </div>
          ) : (
            <div className='text-center p-4'>
              <h1 className='text-lg'>Continue Shopping!</h1>
            </div>
          )
        }
      </Modal>
<Nav cartListItems={cartItems} onCartClick={() => setShowModal(true)}/>
<Header />
<Cards onAdd={addToCart} onEnable={enableCartItem}/>
<Footer/>
</div>
 );
}
