import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={utilStyles.navbar}>
      {/* <div className={utilStyles.navItemContainer}>
        <img
          src="/images/totoro.svg"
          alt=""
          className={utilStyles.navItemIcon}
        /> 
        <a href="" className={utilStyles.navItem}>
          Animes / แอนิเมะ
        </a>
      </div> */}
      <div className={utilStyles.navItemContainer}>
        <img
          src="/images/cultures.svg"
          alt=""
          className={utilStyles.navItemIcon}
        /> 
        <Link href="/">
          <a className={utilStyles.navItem}>Home:บ้าน</a>
        </Link>
      </div>
      {/* <div className={utilStyles.navItemContainer}>
        <img
          src="/images/tv.svg"
          alt=""
          className={utilStyles.navItemIcon}
        />
        <a href="" className={utilStyles.navItem}>
          TV / ซีรีส์
        </a>
      </div> */}
    </div>
  );
}
