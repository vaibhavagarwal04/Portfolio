import Product from "../product/Product";
import "./ProductList.css";
import { products } from "../../data";
function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create and inspire</h1>
                <p className="pl-desc">
                    it it a website where you can come and play the game by
                    testing your luck you can have various casino type game
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product 
                    key={item.id}
                    img={item.img}
                    link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
