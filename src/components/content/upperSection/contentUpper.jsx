import React from "react";
import './contentUpper.css';
import logo from "../../../assets/img/HeroImage.png";

const heroSection = {
  backgroundImage: `url(${logo})`,
};

const buttonSection={
  width: "214px",
  height:" 38px",
  borderRadius: '4px',
  gap:" 8px",
  backgroundColor: "#F28D35",
  color: "#FFFFFF",
  border: "none",
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  alignItems: 'left',
  textTransform: 'uppercase',
  fontFamily: 'Inter',
  fontSize: "14px",
  fontWeight:" 700",
  lineHeight: "14px",
  letterSpacing: "-0.02em",
};

function ContentUpper() {
  return (
    <div className="p-5 text-center bg-image heroSection" style={heroSection}>
      <div className="frame497">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 className="mb-3 ">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h1>
            <button type="button" className="btn btn-primary btn-lg mt-3" style={buttonSection}>
              Get free consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentUpper;
