import React from "react";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div className="w-[100%] lg:w-[84%] mx-auto flex justify-center">
                <p className="font-bold text-center">
                    &#169; {new Date().getFullYear()} | All Rights Reserved By
                    Monabber Hossain
                </p>
            </div>
        </footer>
    );
};

export default Footer;
