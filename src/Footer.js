import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="footer">
            <div>Subscribe To Our Weekly Digest <button><FaThumbsUp /></button></div>
            <div>Conditions of Use & Sale   Privacy Notice    Interest-Based Ads</div>
            <div>© 1996-2022, OPENBOOKS.com, Inc. or its affiliates</div>
            <div className="contact">
                <div>Contact Us</div>
                <div><FaFacebook /></div>
                <div><FaTwitter /></div>
                <div><FaInstagram /></div>
            </div>
        </div>
    )
}