import PropTypes from "prop-types";

// 'props' is destructured so we don't have to write 'props' as a parameter
function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={headerStyles}>
      <div className="container">
        {/* 'props' is destructured so we don't have to write 'props.text' */}
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// default props to show if none is passed in
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// Assign type to props ( not really useful but makes application a little more robust )
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
