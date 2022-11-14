// import des modules
import React from "react";

// Import des fichiers
import "../../style/components/_header.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import ListGallery from "../../logements.json";
import Footer from "../../components/Footer/Footer";

// Import du styles

// Composant Acceuil
function Home() {
  return (
    <>
      <div className="main_head">
        <Header />
      </div>
      <main className="main_content">
        <Banner />
        <section>
          <Card gallery={ListGallery} />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
