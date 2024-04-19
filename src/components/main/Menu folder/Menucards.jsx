import React from "react";
import { IoMdRadioButtonOff } from "react-icons/io";

const Menucards = ({
    title_cat,
    cat_itemone,
    cat_itemtwo,
    cat_itemthree,
    cat_itemfour,
    cat_itemfive,
    cat_itemsix,
    def_check,
}) => {
    return (
        <div className="menu-card-div">
            <h2 className="category">{title_cat}</h2>
            <li className="category-item">
                {cat_itemone}
                <div className="cat-item-right">
                    &#8364;00
                    <input type="radio" defaultChecked={def_check} />
                </div>
            </li>
            <li className="category-item">
                {cat_itemtwo}
                <div className="cat-item-right">
                    &#8364;00
                    <input type="radio" />
                </div>
            </li>
            <li className="category-item">
                {cat_itemthree}
                <div className="cat-item-right">
                    &#8364;00
                    <input type="radio" />
                </div>
            </li>
            <li className="category-item">
                {cat_itemfour}
                <div className="cat-item-right">
                    &#8364;00
                    <input type="radio" />
                </div>
            </li>
            <li className="category-item">
                {cat_itemfive}
                <div className="cat-item-right">
                    &#8364;00
                    <input type="radio" />
                </div>
            </li>
            <li className="category-item">
                {cat_itemsix}
                <div className="cat-item-right">
                    &#8364;00
                    <input type="radio" />
                </div>
            </li>
        </div>
    );
};

export default Menucards;
