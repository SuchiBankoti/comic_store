import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import SignUpForm from "./SignUpAccount";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <Link to="/Library" className="link">
          <h1 className={styles.openBooks}>OPEN BOOKS</h1>
        </Link>
        <AiFillBook style={{ color: "#fff" }} />
      </div>
      <div className={styles.navright}>
        <div>
          <SignUpForm />
        </div>
        <Link to="/">
          <FaHome className={styles.homeicon} />
        </Link>
      </div>
    </nav>
  );
}
