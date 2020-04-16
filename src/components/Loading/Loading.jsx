import React from "react";
import loadingImg from "assets/img/coronavirus.svg";
const Loading = () => {
  return (
    <div className="loading">
      <header className="loading-header">
        <img src={loadingImg} className="loading-logo" alt="logo" />
        <p>
          <b>Cargando datos</b>
        </p>
      </header>
    </div>
  );
};

export default Loading;
