import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { BsStarFill, BsStarHalf, BsFillHeartFill } from "react-icons/bs";

const Dashboard = ({ products = [] }) => {
  if (products.length === 0) {
    console.log("Products are not available");
  }

  let greeting;
  let todaysDate = new Date();
  let hours = todaysDate.getHours();
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="">
      <Head>
        <title>Fast Food - Dashboard</title>
        <meta name="description" content="Fast food application dashboard" />
      </Head>

      <div>
        <div className="pt-3 flex justify-between pr-6 items-center w-11/12 lg:max-w-7xl mx-auto ">
          <div>
            <h1 className="text-gray-500 font-sans pb-3 text-base md:text-2xl font-semibold">
              {greeting}, Ann!
            </h1>
            <p className="font-sans text-sm text-gray-600 pb-3">
              What delicious meal are you craving today?
            </p>
          </div>
        </div>

        <h1 className='italic text-green-600 font-sans text-center text-xl py-3 font-semibold'>Our delicious menue</h1>

        <div className="w-11/12 lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-stretch mt-3">
          {products &&
            products.map((product) => {
              const { _id, desc, prices, title, img } = product;
              return (
                <>
                  <div key={_id} className="rounded-lg shadow-sm  bg-white p-4 mb-5 border">
                    <div className="flex justify-end">
                      <div className="flex space-x-1">
                      <BsFillHeartFill color='red' />
                      <BsFillHeartFill color='red' />
                      </div>
                    </div>
                    <div className="flex justify-center items-center pb-6">
                      <Image
                        src={img}
                        alt=""
                        height="150"
                        width="150"
                        objectFit="contain"
                        className="rounded-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex space-x-1">
                        <BsStarFill color="red" />
                        <BsStarFill color="red" />
                        <BsStarFill color="red" />
                        <BsStarFill color="red" />
                        <BsStarFill color="red" />
                      </div>

                      <h1>
                          <Link href={`http://localhost:3000/meals/${_id}`}>
                            <a className="font-sans text-gray-900 text-xl font-semibold  max-w-2xl md:text-lg">{title}</a>
                          </Link>
                      </h1>

                      <p className="max-w-3xl text-sm md:text-sm  text-gray-400 font-semibold">
                        {desc}
                      </p>

                      <div className="flex justify-between items-center py-3">
                        <h1 className="text-gray-900 text-sm font-semibold">
                          NGN{prices[0]}
                        </h1>
                        <button className="bg-red-500 font-sans text-white md:text-sm font-semibold rounded-full py-1 px-5">
                          <Link href={`http://localhost:3000/meals/${_id}`}>
                            <a className="text-sm">View Menue</a>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/products");
  const { data } = response;
  return {
    props: {
      products: data,
    },
  };
}

export default Dashboard;
