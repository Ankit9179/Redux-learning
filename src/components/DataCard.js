import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../freatures/cartSlice";

const CardData = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  // console.log(items);
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-4 mt-3">
            <div className="card mb-4" style={{ width: "100%" }}>
              <img
                src={item.img}
                className="card-img-top"
                style={{ height: "350px" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Name : {item.title}</h5>
                <p className="card-text">Price : {item.price}</p>
                <p className="card-text">Quantity : {item.quantity}</p>
                <a
                  onClick={() => dispatch(addToCart(item))}
                  className="btn btn-primary"
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardData;
