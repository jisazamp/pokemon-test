import PropTypes from 'prop-types';

const Button = ({ label, icon, action, disabled }) => {
  return (
    <button
      onClick={action}
      className={`btn btn-primary ${disabled && 'btn-primary-disabled'}`}
    >
      {icon}
      {label}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
