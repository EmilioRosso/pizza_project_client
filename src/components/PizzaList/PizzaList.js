import React from "react";
import { FormattedMessage } from "react-intl";

import PizzaListItem from "../PizzaListItem/PizzaListItemContainer";
// import productsJSON from "../../services/products.json";
import styles from "./PizzaList.module.css";

export default function PizzaListForTest({ products }) {
  return (
    <div className={styles.pizzaListWrapper}>
      <h2 className={styles.pizzaHeading}>
        <FormattedMessage id="pizza.classic" />
      </h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "classic") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>
      <h2 className={styles.pizzaHeading}>
        <FormattedMessage id="pizza.special" />
      </h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "branded") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>

      <h2 className={styles.pizzaHeading}>
        <FormattedMessage id="pizza.premium" />
      </h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "premium") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>
    </div>
  );
}
