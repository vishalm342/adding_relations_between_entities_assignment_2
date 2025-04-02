// eslint-disable-next-line no-unused-vars
import React from "react";
import RatingWidget from "./RatingWidget";
import PropTypes from "prop-types";
import "../App.css";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)}</p>

      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;