import styles from "../../components/Nav.module.css";

const MenuMobile = ({ mobile }) => {
  return (
    <button className={!mobile ? styles.hide : null}>
      <svg
        fill="#000000"
        height="28px"
        width="32px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 150 150"
        xmlSpace="preserve"
      >
        <g id="XMLID_240_">
          <path
            className={styles.more_icons}
            id="XMLID_241_"
            d="M15,30h120c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,0,0,6.716,0,15S6.716,30,15,30z"
          />
          <path
            className={styles.more_icons}
            id="XMLID_242_"
            d="M135,60H15C6.716,60,0,66.716,0,75s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,60,135,60z"
          />
          <path
            className={styles.more_icons}
            id="XMLID_243_"
            d="M135,120H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,120,135,120z"
          />
        </g>
      </svg>
    </button>
  );
};

export default MenuMobile;
