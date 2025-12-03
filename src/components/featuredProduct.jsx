import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

function FeaturedProducts({ products }) {
  return (
    <>
      <div className="container py-5">
        <div className="featured-header">
          <div className="title-block">
            <h2 className="section-title">Featured Products</h2>
          </div>

          <div className="filter-menu">
            <a className="active">All</a>
            <a>New</a>
            <a>Top Sale</a>
          </div>

          <div className="arrow-controls">
            <button className="arrow-btn">‹</button>
            <button className="arrow-btn">›</button>
          </div>
        </div>

        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-3 col-sm-6" key={item.id}>
              <div className="product-box">
                {/* Discount Badge */}
                <span className="discount-badge">{item.discount}</span>

                {/* Image Box */}
                <div className="product-img-box">
                  <img src={item.img} className="main-img" alt="" />
                  <img src={item.img2} className="hover-img" alt="" />

                  {/* Hover Icons */}
                  <div className="hover-icons">
                    <Heart className="icon" />
                    <ShoppingCart className="icon" />
                    <Eye className="icon" />
                  </div>
                </div>

                {/* Title */}
                <h5 className="product-title">{item.title}</h5>

                {/* Price */}
                <p className="product-price">
                  <span className="new-price">${item.price}</span>
                  <span className="old-price">${item.oldPrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
