import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { getProducts } from "../sevice/service";
import Footer from "../component/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [mostBught, setMostBought] = useState([]);

  const fetchProducts = async () => {
    const response = await getProducts();
    if (response && response.status == 200) {
      setProducts(response.data.slice(0, 8));
      setMostBought(response.data.slice(9, response.data.length));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);
  

  return (
    <Layout>
      <div className="container mt-5 pt-5">
        <h1>Welcome to HipsterApp</h1>
        <p>This is a sample app to demonstrate theme switching.</p>
        <button className="btn btn-success">Click Me</button>
        <h2 className="my-4">Most Bought Products</h2>

        <div className="row mt-4">
          {mostBught.map((prod) => (
            <div className="col-md-3 mb-3" key={prod.id}>
              <div className="card h-100 py-2">
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.title}
                />
                <div className="card-body">
                  <h6 className="card-title h-5 ">{prod.title.slice(0, 30)}...</h6>
                  <p className="card-text h-15 ">{prod.description.slice(0, 50)}...</p>
                  <span className="badge bg-primary">{prod.category}</span>
                  <p className="card-text">${prod?.price}</p>
                  <button className="w-100 btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="my-4">Product Only For You </h2>
        <div className="row">
          {products.map((prod)=>(
            <div className="col-md-3 mb-3" key={prod.id}>
              <div className="card h-100 py-2">
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.title}
                />
                   <div className="card-body">
                  <h6 className="card-title h-5 ">{prod.title.slice(0, 30)}...</h6>
                  <p className="card-text h-15 ">{prod.description.slice(0, 50)}...</p>
                  <span className="badge bg-primary">{prod.category}</span>
                  <p className="card-text">${prod?.price}</p>
                  <button className="w-100 btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>)
          )}
        </div>
      </div>
                <Footer />

    </Layout>
  );
};

export default Home;
