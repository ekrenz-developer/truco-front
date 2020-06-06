import React from "react";
import PropTypes from "prop-types";

import useStyle from "./style.js";

const Layout = ({ header, footer, children }) => {
  const classes = useStyle();
  return (
    <>
      {/*
      clsx(classes.header), {[classes.containerShift]: chatOpen}
      */}
      {header && <div className={classes.header}>{header}</div>}
      <div className={classes.content}>{children}</div>
      {footer && <div className={classes.footer}>{footer}</div>}
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
