import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletecart } from "../freatures/cartSlice";
// import "../components/CardPage.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)
  return (
    <>
      <div className="container" >
        <div className="row">
          {cart.map((data) => (
            <div className="col-7 mt-4" style={{ border: "2px solid black", padding: "10px", marginRight: 2 }}>
              <h5>your cart</h5>
              <hr />
              <div className="row">
                <div className="col-4">
                  <img src={data.img} alt='img' style={{ width: "50px", height: "100px" }} />
                </div>
                <div className="col-4">
                  <h5>{data.title}</h5>
                  <button onClick={dispatch(deletecart(data))}>Delete</button>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-4">
                      <h3>-</h3>
                    </div>
                    <div className="col-4">
                      <h6>Quantity</h6>
                      {data.quantity}
                      <br />
                      <br />
                      <p>{data.price * data.quantity}</p>
                    </div>
                    <div className="col-4">
                      <h3>+</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))

          }

          <div className="col-4 mt-3" style={{ border: '2px solid black' }}>
            <h6>Card Information</h6>
            <hr />

            <br />
            <div className="row">
              <div className="col-6">
                Total Quantity
              </div>
              <div className="col-6">
                0
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                Total Price
              </div>
              <div className="col-6">
                0
              </div>
            </div>
            <button>
              <Link to={"/"}>Add More</Link>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default CartPage;
