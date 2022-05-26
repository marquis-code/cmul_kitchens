import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { FcCheckmark } from "react-icons/fc";
import {useState} from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const {products, quantity, total} = useSelector((state) => state.cart);

  if (products.length === 0) {
    return (
      <>
        <div className="px-4">
          <div className="flex justify-center items-center mt-20">
            <MdRemoveShoppingCart size={100} />
          </div>
          <h1 className="text-gray-400 font-sans font-semibold text-2xl text-center py-3">
            Cart Empty
          </h1>
          <h3 className="text-center text-gray-400 font-sans font-semibold text-base">
            Good food is always cooking! Go ahead, order some yummy items from
            the menue.
          </h3>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <h1 className="text-gray-900 font-sans font-bold text-center py-3 text-xl">
        Your Food cart
      </h1>

      {products.map((product) => {
        return (
          <>
            <div
              className="border rounded-lg shadow-sm p-2 my-3 mx-2"
              key={product._id}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <div className="mr-2">
                    <Image
                      objectFit="contain"
                      alt=""
                      height="80"
                      width="80"
                      className="rounded-full"
                      src={product.img}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-gray-900 w-5/6 text-sm  font-sans font-semibold">
                      {product.title}
                    </h1>
                    <div>
                      {product.extras.map((extra) => {
                        return (
                          <div key={extra._id} className="flex items-center">
                            <span className="mr-1">
                              <FcCheckmark />
                            </span>
                            <span className="text-xs font-semibold font-sans text-gray-600">
                              {extra.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-sm font-semibold font-sans text-gray-500 pt-1">
                      {product.quantity}pcs
                    </p>
                  </div>
                </div>
                <h1 className="font-sans text-sm font-semibold text-gray-900">
                  NGN{product.price}
                </h1>
              </div>
              <div className="flex justify-end items-center space-x-4">
                <p className="font-sans text-sm font-semibold">Total:</p>
                <p className="text-xs font-semibold font-sans text-gray-500">
                  NGN{product.price * product.quantity}
                </p>
              </div>
            </div>
          </>
        );
      })}

      <div className="space-y-3 px-3 pt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-400 font-sans font-semibold">Cart total</h1>
          <h2 className="text-gray-500 font-semibold text-sans">
            NGN{total}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-gray-400 font-sans font-semibold">
            Promo discount
          </h1>
          <h2 className="text-gray-500 font-semibold text-sans">- NGN0.00</h2>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-gray-400 font-sans font-semibold">Delivery</h1>
          <h2 className="text-gray-500 font-semibold text-sans">- NGN0.00</h2>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <h1 className="text-gray-400 font-sans font-semibold">Subtotal</h1>
          <h2 className="text-2xl font-sans text-gray-900 font-semibold">
            NGN{total}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
