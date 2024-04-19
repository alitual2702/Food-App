import React from 'react'

const Menudown = () => {
    return (
        <div className="menu-sec-down">

            <div className="menu-card-down-div">
                <h2 className="down-category">Drinks</h2>
                <li className="down-category-item">
                    Mineral Water
                    <div className="down-cat-item-right">
                        &#8364;00
                        <input type="radio" defaultChecked="true" />
                    </div>
                </li>
                <li className="down-category-item">
                    Iced Tea
                    <div className="down-cat-item-right">
                        &#8364;00
                        <input type="radio" defaultChecked="" />
                    </div>
                </li>
                <li className="down-category-item">
                    Orange Juice  <div className="down-cat-item-right">
                        &#8364;00
                        <input type="radio" defaultChecked="" />
                    </div>
                </li>
            </div>
            <div className="button-div">
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Menudown