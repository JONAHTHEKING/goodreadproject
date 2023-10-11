/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">Hello, Readers!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Start Reading...
        </a>
      </div>
    </div>
  );
};

export default Header;
