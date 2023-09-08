import PropTypes from 'prop-types';

const Button = ({ text, onClick, className, type, disabled }) => {
  return (
    <button
      className={`block p-2 w-full rounded-full text-white bg-[#003C90] hover:bg-[#003c90e5] transition-all mx-auto ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool, // Add the disabled prop
};

Button.defaultProps = {
  type: 'button',
  disabled: false, // Default to not disabled
};

export default Button;
