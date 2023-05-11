import React, { useState } from 'react'
import '../components/Products.css'

function Products(props) {

    return (
        <>
            <div className="cards-container">

                {
                    props.item.map(menu => {
                        return (
                            <div key={menu.id} className='card' >
                                <img src={menu.image} className="card_img" />
                                <div className="card-body">
                                    <h5 className="card-title">{menu.name}</h5>
                                    <p className="card-text">{menu.price}</p>
                                    <button>AddtoCart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <img id='McImg' src="https://static.vecteezy.com/system/resources/previews/013/948/540/original/mcdonald-s-logo-on-transparent-white-background-free-vector.jpg" alt="" />

        </>


    )
}

export default Products