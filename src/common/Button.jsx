import PropTypes from 'prop-types';

const Button = ({ label, icon, action }) => {
  return (
    <button onClick={action} className='btn btn-primary'>
      {icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
