import utilStyles from "../styles/utils.module.css";

export default function Navbar() {
  return (
    <div className={utilStyles.navbar}>
      <div className={utilStyles.navItemContainer}>
        <img
          src="/images/totoro.svg"
          alt=""
          className={utilStyles.navItemIcon}
        /> 
        <a href="" className={utilStyles.navItem}>
          Animes / แอนิเมะ
        </a>
      </div>
      <div className={utilStyles.navItemContainer}>
        <img
          src="/images/cinema.svg"
          alt=""
          className={utilStyles.navItemIcon}
        />
        <a href="" className={utilStyles.navItem}>
          Movies / หนัง
        </a>
      </div>
      <div className={utilStyles.navItemContainer}>
        <img
          src="/images/tv.svg"
          alt=""
          className={utilStyles.navItemIcon}
        />
        <a href="" className={utilStyles.navItem}>
          TV / ซีรีส์
        </a>
      </div>
    </div>
  );
}
