import {
  Eye,
  Heart,
  ShoppingCart
} from "lucide-react";
import React from "react";

function OurProducts({ ourProductsData }) {
  return (
    <div className="container py-5">

      <div className="text-center mb-4">
        <h2 className="fw-bold">Our Products</h2>
        <p className="text-muted">
          Add featured products to weekly lineup
        </p>
      </div>

      <div className="row g-4">
        {ourProductsData.map((pd) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={pd.id}>
            <div className="ourProduct-card-new p-3 shadow-sm rounded position-relative">

              {/* Discount Badge */}
              <span className="ourDiscount-badge-new">{pd.discount}</span>

              {/* Image Wrapper */}
              <div className="ourProduct-img-box position-relative overflow-hidden">
                <img src={pd.img} className="main-img" alt="" />
                <img src={pd.img2} className="hover-img" alt="" />

                {/* Hover Action Icons */}
                <div className="ourHover-icons-new">
                  <button><Heart size={18} /></button>
                  <button><ShoppingCart size={18} /></button>
                  <button><Eye size={18} /></button>
                </div>
              </div>

              {/* Title */}
              <h5 className="text-center mt-3">{pd.title}</h5>

              {/* Price */}
              <p className="text-center">
                <span className="fw-semibold ourPrice">${pd.price}</span>
                &nbsp;
                <span className="text-muted text-decoration-line-through">
                  ${pd.oldPrice}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProducts;