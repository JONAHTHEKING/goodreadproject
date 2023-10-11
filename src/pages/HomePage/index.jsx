import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import CategoryList from "../../components/CategoryList";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <CategoryList />
      </div>
    </>
  );
};

export default HomePage;
