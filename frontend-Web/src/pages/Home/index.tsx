import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";

import { FiLogIn } from "react-icons/fi";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta Logo" />
        </header>
        <main>
          <h1>Seu mareketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a econtrarem pontos de coleta de forma eficiente.
          </p>
          <a href="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
