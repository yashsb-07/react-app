import "./Product.css";
import Price from "./Price";

function Product({title, idx}) {
    // const list = features.map((feature) => <li>{feature}/</li>);
    // let isDiscount = price > 30000;
    // let styles = {backgroundColor: isDiscount ? "black": ""}

    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = ["8,000 DPI", "Intutive surface", "Designed for ipad pro", "Wireless",];

    return (
        // <div className="Product" style={styles}> 
        //     <h3>{title}</h3>
        //     <h5>Price: {price}</h5>
        //     <p>{features}</p>
        //     {isDiscount ? <p>Discount of 5%</p> : null}
        // </div>

        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;