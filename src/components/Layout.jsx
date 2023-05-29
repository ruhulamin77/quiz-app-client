/* eslint-disable react/prop-types */
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
