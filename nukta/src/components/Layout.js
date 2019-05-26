import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="App">
				<header>
					<Header/>
					<Menu />
				</header>
        {React.cloneElement(children)}
        <Footer />
      </div>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
