import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopSales } from "../slices/sliceMag";

export default function TopSales() {
  const list = useSelector((state) => state.products);
   const dispatch = useDispatch();
         const fetchOneUser = async () => {
      try {
        const data = await dispatch(fetchTopSales()).unwrap();
        console.log("success", data);
      } catch (err) {
        console.log("error", `Fetch failed: ${err.message}`);
      }
    };
useEffect(() => {

    fetchOneUser();
  }, []);

console.log(list.products)
  // if (data.length===0) {
  //   return (
  //     <>
  //       <h2 className="text-center">Хиты продаж!</h2>
  //           <div className="preloader">
  //             <span></span>
  //             <span></span>
  //             <span></span>
  //             <span></span>
  //           </div>
  //     </>
  //   );
  // } else {
    return (
      <>
         <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
            {list.products.map((product, id) => (
           <div key={id} className="col-4">
             <div className="card">
                <img
                  src={product.images[0]}
                  className="card-img-top img-fluid"
                  alt={product.title}
                />
                <div className="card-body">
                  <p className="card-text">{product.title}</p>
                  <p className="card-text">{product.price} руб.</p>
                  <a
                    href={"/products/"+product.id}
                    className="btn btn-outline-primary"
                  >
                    Заказать
                  </a>
                </div>
              </div>
          </div>
            ))}
        </div>
      </>
    );
}
// }