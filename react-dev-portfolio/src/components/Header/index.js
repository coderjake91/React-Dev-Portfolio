import React from 'react';
import Nav from '../Nav'

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
      } = props;

  return (
    <header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    </header>
  );
}

export default Header;