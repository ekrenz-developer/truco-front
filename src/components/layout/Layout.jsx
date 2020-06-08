import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import useStyle from "./style.js";

const Layout = ({ header, footer, children }) => {
  const classes = useStyle();
  return (
    <>
      {header && <div className={classes.header}>{header}</div>}
      <div className={clsx(classes.content, {[classes.contentWithHeader]: header})}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element.isRequired,
};

Layout.defaultProps = {
  header: undefined,
  footer: undefined,
};

export default Layout;
