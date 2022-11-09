import React from "react";

// Import des fichiers
import logoFooter from "../../assets/footer.png";

// import des styles
import "../../style/components/_footer.scss";

const Footer = () => {
  return (
    <div className="kasa_footer">
      <img src={logoFooter} alt="KASA Footer" />
      <p className="kasa_footer_reserved">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
