import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import AdminOrdersListItem from "../AdminOrdersListItem/AdminOrdersListItem";
import Spinner from "../Spinner/Spinner";
import styles from "./AdminOrderList.module.css";
// import orders from "../../services/orders.json";

import localMessages from "../../languages";
import { orderOperations, orderSelectors } from "../../redux/order";

//"GET" https://evening-caverns-34846.herokuapp.com/orders

export default function AdminOrderList() {
  const dispatch = useDispatch();
  const local = useSelector((state) => state.local.lang);
  const items = useSelector(orderSelectors.getOrders);
  const isLoaded = useSelector(orderSelectors.getLoading);
  const error = useSelector(orderSelectors.getError);

  const [filters, setFilter] = useState(localMessages[local]["orders.new"]);

  const options = [
    localMessages[local]["orders.new"],
    localMessages[local]["orders.done"],
    localMessages[local]["orders.all"],
  ];

  useEffect(() => {
    dispatch(orderOperations.getOrders());
  }, [dispatch]);

  function handleChange(event) {
    setFilter(event.target.value);
  }

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      {isLoaded && <Spinner />}
      {!error && !isLoaded && (
        <>
          {!items.length ? (
            <div className={styles.noOrderContainer}>
              <p className={styles.noOrderText}>
                <FormattedMessage id="orders.no" />
              </p>
            </div>
          ) : (
            <div className={styles.orderContainer}>
              <div className={styles.orderContainerSide}>
                <ul className={styles.orderList}>
                  {options.map((option, index) => (
                    <li key={index}>
                      <label className={styles.filterLabel}>
                        <input
                          type="radio"
                          value={option}
                          checked={option === filters}
                          onChange={handleChange}
                          className={styles.filterButton}
                          key={option}
                        />
                        <span className={styles.sizeText}>{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.orderItems}>
                <ul>
                  {items.map((item) => {
                    if (filters === localMessages[local]["orders.all"]) {
                      return <AdminOrdersListItem key={item._id} item={item} />;
                    }
                  })}
                </ul>
                <ul>
                  {items.map((item) => {
                    if (
                      filters === localMessages[local]["orders.done"] &&
                      item.status === "done"
                    ) {
                      return <AdminOrdersListItem key={item._id} item={item} />;
                    }
                  })}
                </ul>
                <ul>
                  {items.map((item) => {
                    if (
                      filters === localMessages[local]["orders.new"] &&
                      item.status === "new"
                    ) {
                      return <AdminOrdersListItem key={item._id} item={item} />;
                    }
                  })}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );

  //  {
  //    if (error) {
  //      return <div>Error: {error.message}</div>;
  //    } else if (!isLoaded) {
  //      return <Spinner />;
  //    } else {
  //      return !items.length ? (
  //        <div className={styles.noOrderContainer}>
  //          <p className={styles.noOrderText}>
  //            <FormattedMessage id="orders.no" />
  //          </p>
  //       </div>
  //      ) : (
  //        <div className={styles.orderContainer}>
  //          <div className={styles.orderContainerSide}>
  //            <ul className={styles.orderList}>
  //              {options.map((option, index) => (
  //                <li key={index}>
  //                  <label className={styles.filterLabel}>
  //                   <input
  //                      type="radio"
  //                     value={option}
  //                      checked={option === filters}
  //                      onChange={handleChange}
  //                      className={styles.filterButton}
  //                      key={option}
  //                    />
  //                    <span className={styles.sizeText}>{option}</span>
  //                  </label>
  //                </li>
  //              ))}
  //            </ul>
  //          </div>
  //          <div className={styles.orderItems}>
  //            <ul>
  //              {items.map((item) => {
  //                if (filters === localMessages[local]["orders.all"]) {
  //                  return <AdminOrdersListItem key={item._id} item={item} />;
  //                }
  //              })}
  //            </ul>
  //            <ul>
  //              {items.map((item) => {
  //                if (
  //                  filters === localMessages[local]["orders.done"] &&
  //                  item.status === "done"
  //                ) {
  //                  return <AdminOrdersListItem key={item._id} item={item} />;
  //                }
  //              })}
  //            </ul>
  //            <ul>
  //              {items.map((item) => {
  //                if (
  //                  filters === localMessages[local]["orders.new"] &&
  //                  item.status === "new"
  //                ) {
  //                  return <AdminOrdersListItem key={item._id} item={item} />;
  //                }
  //              })}
  //            </ul>
  //          </div>
  //        </div>
  //      );
  //    }
  //  }
}
