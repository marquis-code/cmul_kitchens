import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {useRouter} from 'next/router';
import { addProduct } from "../../redux/cartSlice";
import { BsStarFill } from "react-icons/bs";

const SingleProduct = ({ product }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(product.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { desc, title, img, extraOptions } = product;
  const dispatch = useDispatch();
  const router = useRouter();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, option) => {
    let checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prevState) => [...prevState, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity }));
    router.push('/meals')
  };
  return (
    <>
      <Head>
        <title>Cmul meals - Meal details</title>
      </Head>
      <div className="space-y-3 p-4 rounded shadow-sm">
        <div className="flex justify-center items-center pt-3">
          <Image
            objectFit="contain"
            alt=""
            height="400"
            width="400"
            className="rounded-full"
            src={img}
          />
        </div>

        <h3 className="font-sans text-center font-semibold text-gray-900 text-lg ">
          Choose the size
        </h3>
        <div className="flex items-center justify-center space-x-3">
          <div onClick={() => handleSize(0)} className='cursor-pointer'>
            <Image
              src={img}
              alt=""
              objectFit="contain"
              height="50"
              width="50"
              className="rounded-full focus:border-2 focus:border-green-500 "
            />
            <span className="text-xs font-sans text-white rounded-full shadow-sm font-semibold bg-gray-500 relative bottom-14 px-2 py-1 left-5">
              small
            </span>
          </div>
          <div onClick={() => handleSize(1)} className='cursor-pointer'>
            <Image
              src={img}
              alt=""
              objectFit="contain"
              height="70"
              width="70"
              className="rounded-full"
            />
            <span className="text-xs font-sans text-white rounded-full shadow-sm py-1 px-3 bg-gray-500 relative bottom-16 left-5">
              medium
            </span>
          </div>
          <div onClick={() => handleSize(2)} className='cursor-pointer'>
            <Image
              src={img}
              alt=""
              objectFit="contain"
              height="80"
              width="80"
              className="rounded-full"
            />
            <span className="text-xs font-sans text-white rounded-full shadow-sm py-1 px-3 bg-gray-500 relative bottom-20 left-10">
              large
            </span>
          </div>
        </div>
        <h3 className="font-sans text-center font-semibold text-gray-900 text-lg ">
          Choose additional ingredients
        </h3>
        <div className="grid grid-cols-2">
          {extraOptions.map((option) => {
            return (
              <>
                <div
                  key={option._id}
                  className="flex items-center"
                >
                  <input
                    className="mr-1 h-5 w-5"
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    onChange={(e) => {
                      handleChange(e, option);
                    }}
                  />
                  <label className="font-sans text-sm text-gray-900 font-semibold">
                    {option.text}
                  </label>
                </div>
              </>
            );
          })}
        </div>

        <h1 className="font-semibold font-sans text-gray-900 text-2xl pt-3">
          {title}
        </h1>
        <div className="flex items-center space-x-6">
          <p className="py-1 font-sans font-semibold">NGN{price}</p>
          <div className="flex space-x-1">
            <BsStarFill color="red" />
            <BsStarFill color="red" />
            <BsStarFill color="red" />
            <BsStarFill color="red" />
            <BsStarFill color="red" />
          </div>
        </div>

        <p className="max-w-3xl text-base md:text-sm  text-gray-400 font-semibold pb-3">
          {desc}
        </p>

        <div className="space-y-5">
          <div className="flex space-x-32">
            <h1 className="text-gray-900 text-lg font-sans font-semibold">
              Quantity
            </h1>
            <div className="flex">
            
              <input
                type="number"
                defaultValue={1}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="text-yellow-700 font-semibold outline-none text-center w-full rounded-lg shadow-sm border py-1 "
              />
              
            </div>
          </div>
          
        <div className="flex justify-center items-center pb-6 pt-2">
            <button onClick={handleClick} className='py-2 rounded-full text-white font-sans font-semibold bg-orange-700 shadow-sm w-10/12'>Add to cart</button>
        </div>
        </div>

      </div>
    </>
  );
};

export async function getServerSideProps({params}) {
  const response = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  const { data } = response;
  return {
    props: {
      product: data,
    },
  };
}

export default SingleProduct;
