import React from "react";
import loadingImg from "assets/img/coronavirus.svg";
const Loading = () => {
  return (
    <div className="loading">
      <header className="loading-header">
        <img src={loadingImg} className="loading-logo" alt="logo" />
        <h3>Cargando datos</h3>
      </header>
    </div>
  );
};

export default Loading;
