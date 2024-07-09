// components/ShareButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ShareButton = ({ URL }: string) => {
  const handleShareClick = () => {
    navigator.clipboard
      .writeText(URL)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <button onClick={handleShareClick} style={styles.button}>
      <FontAwesomeIcon icon={faShareAlt} /> Share
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#0070f3",
  },
};

export default ShareButton;
