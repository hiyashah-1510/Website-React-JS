import React from "react";
import { productsLeft, productsMiddle, productsRight } from "./productListData";

function ProductList() {
  return (
    <div className="container py-5">
      <div className="row mb-5">

        {/* ================= NEW ARRIVALS ================= */}
        <div className="col-lg-4">
          <div className="plist-header d-flex align-items-center">
            <h3 className="plist-section-title mb-0 me-3 whitespace-nowrap">
              New Arrivals
            </h3>

            <div className="plist-line flex-grow-1"></div>

            <div className="plist-arrows ms-3 d-flex gap-2">
              <button className="plist-arrow-btn">&lt;</button>
              <button className="plist-arrow-btn">&gt;</button>
            </div>
          </div>

          <ul className="plist-list">
            {productsLeft.map((item) => (
              <li className="plist-item" key={item.id}>
                <img src={item.img} alt="" className="plist-img" />

                <div className="ms-3">
                  <h5 className="plist-title">{item.title}</h5>

                  <p className="plist-price">
                    <span className="plist-new-price">${item.price}</span>
                    <span className="plist-old-price">${item.oldPrice}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= BEST SELLER PRODUCT ================= */}
        <div className="col-lg-4">
          <div className="plist-header d-flex align-items-center">
            <h3 className="plist-section-title mb-0 me-3 whitespace-nowrap">
              Best Seller Product
            </h3>

            <div className="plist-line flex-grow-1"></div>

            <div className="plist-arrows ms-3 d-flex gap-2">
              <button className="plist-arrow-btn">&lt;</button>
              <button className="plist-arrow-btn">&gt;</button>
            </div>
          </div>

          <ul className="plist-list">
            {productsMiddle.map((item) => (
              <li className="plist-item" key={item.id}>
                <img src={item.img} alt="" className="plist-img" />

                <div className="ms-3">
                  <h5 className="plist-title">{item.title}</h5>

                  <p className="plist-price">
                    <span className="plist-new-price">${item.price}</span>
                    <span className="plist-old-price">${item.oldPrice}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= ON-SALE PRODUCT ================= */}
        <div className="col-lg-4">
          <div className="plist-header d-flex align-items-center">
            <h3 className="plist-section-title mb-0 me-3 whitespace-nowrap">
              On-Sale Product
            </h3>

            <div className="plist-line flex-grow-1"></div>

            <div className="plist-arrows ms-3 d-flex gap-2">
              <button className="plist-arrow-btn">&lt;</button>
              <button className="plist-arrow-btn">&gt;</button>
            </div>
          </div>

          <ul className="plist-list">
            {productsRight.map((item) => (
              <li className="plist-item" key={item.id}>
                <img src={item.img} alt="" className="plist-img" />

                <div className="ms-3">
                  <h5 className="plist-title">{item.title}</h5>

                  <p className="plist-price">
                    <span className="plist-new-price">${item.price}</span>
                    <span className="plist-old-price">${item.oldPrice}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ProductList;