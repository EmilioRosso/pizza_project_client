import React from "react";
import userIcon from "../../assets/img/user.svg";
import phoneIcon from "../../assets/img/phone.svg";
import mailIcon from "../../assets/img/mail.svg";
import styles from "./ClientInfo.module.css"

export const ClientInfo = ({ username, telephone, email }) => (
  <div className={styles.clientInfo}>
  <h3 className={styles.clienInfoTitle}>Добро пожаловать, {username}!</h3>
    <ul className={styles.clientInfoList}>
      <li>
        <img src={userIcon} alt="user icon" />
        <span>{username}</span>
      </li>
      <li>
        <img src={phoneIcon} alt="phone icon" />
        <span>{telephone}</span>
      </li>
      <li>
        <img src={mailIcon} alt="mail icon" />
        <span>{email}</span>
      </li>
    </ul>
  </div>
);

//<ClientInfo username={"test username"} telephone={"123456789"} email={"test@mail.com"}/>