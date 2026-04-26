import Product from "./Product.jsx";

function ProductTab() {
    // let options = ["Hi-tech", "Durable", "Fast"];

    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={styles}>
            {/* <Product title="Phone" price={30000} features={options}/>
            <Product title="Laptop" price={45000}/>
            <Product title="Pen" price={10}/> */}
            <Product title="Logitec MX Master" idx={0}/>
            <Product title="Apple Pencil (2nd Gen)" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;