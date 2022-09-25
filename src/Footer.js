import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaMapPin, FaThumbsUp } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="footer">
            <div>Subscribe To Our Weekly Digest <FaThumbsUp /></div>
            <div className="address">
                <div>Find Us</div>
                <div><FaMapPin /> Seadsme steet,301,Lane 15, LondonBridge</div>
            </div>
            <div className="contact">
                <div>Contact Us</div>
                <div><FaFacebook /></div>
                <div><FaTwitter /></div>
                <div><FaInstagram /></div>
            </div>
        </div>
    )
}