import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import style from "./adminUpdateListItem.module.css";

const AdminUpdateListItem = ({ product }) => {
  const local = useSelector((state) => state.local.lang);
  const { name, images } = product;
  return (
    <div className={style.editCard}>
      <img src={images} alt={images} className={style.editCard__image} />
      <p className={style.editForm__name}>{name[local]}</p>
      <Link to={{ pathname: "/admin/update-product-item", state: { product } }}>
        <button type="button" className={style.editForm__btn}>
          <FormattedMessage id="edit" />
        </button>
      </Link>
    </div>
  );
};
AdminUpdateListItem.propTypes = {
  categories: PropTypes.string.isRequired,
  subcategories: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
};
AdminUpdateListItem.defaultProps = {
  categories: "",
  subcategories: "",
  images: "",
  ingredients: [],
  name: {},
  price: {},
};
export default AdminUpdateListItem;
