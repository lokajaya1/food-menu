import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import data from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  return (
    <div>
      <h1 style={style}>Warmindo Jaya</h1>
    </div>
  );
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Cobain berbagai menu mantul di Warmindo! Dari mie goreng sampe nasi
            telur, semuanya bikin nagih.
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Maaf, masih tutup.</p>
      )}
      {/* <Food
        nama="Mie Goreng Spesial"
        deskripsi="Mie goreng lezat dengan tambahan telur mata sapi, sayuran segar, dan
        rempah rempah lainnya. Disajikan dengan kecap manis dan sedikit sambal,
        cocok untuk makan siang atau makan malam."
        harga={25000}
        foto="food/mie goreng spesial.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      /> */}
    </main>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;

  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? `Harga: Rp${harga}` : "Habis"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 8;
  const jamTutup = 22;
  const status = hour >= jamBuka && hour < jamTutup;

  if (status) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }

  // return (
  //   <footer className="footer">
  //     {status ? (
  //       <div className="order">
  //         <p>
  //           {new Date().getFullYear()} Warmindo Jaya Buka {jamBuka} - Tutup{" "}
  //           {jamTutup}
  //         </p>
  //         <button className="btn">Order</button>
  //       </div>
  //     ) : (
  //       <p>
  //         Maaf, masih Tutup. Coba kunjungin lagi pada jam {jamBuka} - {jamTutup}{" "}
  //       </p>
  //     )}
  //   </footer>
  // );
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warmindo Jaya Buka {jamBuka} - Tutup{" "}
          {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterClosedHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>
        Maaf, masih Tutup. Coba kunjungin lagi pada jam {jamBuka} - {jamTutup}
      </p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
