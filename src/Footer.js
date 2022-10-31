import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaBomb } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
export default function Footer() {
    return (
        <div className={styles.footer}>
            <button className={styles.subscribeBtn}>Subscribe</button>

            <div className={styles.contactInfo}>
                <div className={styles.footerLeft}>
                    <h1 style={{ color: "rgb(27, 19, 19)" }}>C<FaBomb style={{ color: "brown" }} />MICX</h1>
                    <div className={styles.icons}>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                    <p>© All Rights Reserve</p>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.info}>
                        <h4>Media</h4>
                        <p>pricing</p>
                        <p>About </p>
                        <p>Services</p>
                        <p>download</p>
                    </div>
                    <div className={styles.info}>
                        <h4>Learn Online</h4>
                        <p>pricing</p>
                        <p>About </p>
                        <p>Services</p>
                        <p>download</p>
                    </div>
                    <div className={styles.info}>
                        <h4>Legal</h4>
                        <p>Dehradun</p>
                        <p>contact</p>
                        <p><Link to="/" className="link">
                            Home
                        </Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}