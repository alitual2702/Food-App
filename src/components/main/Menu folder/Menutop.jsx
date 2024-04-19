import React from 'react'
import Menucards from "./Menucards";
const Menutop = () => {
  return (
    <div className="menu-item-section">
                <h1 className="menu-title">menu</h1>
                <p className="menu-lorem">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
                    tenetur, placeat mollitia minima quis blanditiis recusandae totam quos
                    porro vel odit impedit, distinctio laborum Eaque earum ipsam
                </p>
                <div className="menu-flex">
                    <Menucards
                        title_cat="burgers and milkshakes"
                        cat_itemone="Classic Burgers"
                        cat_itemtwo="Cheese Burgers"
                        cat_itemthree="Double Cheese Burgers"
                        cat_itemfour="Chocolate Milkshake"
                        cat_itemfive="Strawberry Milkshake"
                        cat_itemsix="Banana Milkshake"
                        def_check={true}

                    />
                    <Menucards title_cat="Deserts"
                         cat_itemone="Ice Creams"
                         cat_itemtwo="Triple Chocolate Cookie"
                         cat_itemthree="New York Cheezecake"
                         cat_itemfour="Sacher Cake"
                         cat_itemfive="Chocolate Muffin"
                         cat_itemsix="Berry Muffin" 
                        def_check={true}
                        />
                         
                </div>
                <p className="exchange-div">
                    if u want , you can exchange a milk shake for a drink
                    <span>(+ &#8364;0,85)</span>
                </p>
            </div>
  )
}

export default Menutop