import PropTypes from "prop-types";

// 'props' is destructured so we don't have to write 'props' as a parameter
function Header({ text }) {
  return (
    <header>
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
};

// Assign type to props ( not really useful but makes application a little more robust )
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
