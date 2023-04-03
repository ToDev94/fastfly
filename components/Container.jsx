import React from "react";

const Container = ({ children, maxWidth }) => {
  const styles = {
    maxWidth: maxWidth,
    margin: "auto",
  };
  return <div style={styles}> {children} </div>;
};

export default Container;
