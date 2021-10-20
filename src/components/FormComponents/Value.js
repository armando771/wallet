import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/wallet.css';

function InputValue(props) {
  const { value, handleChange } = props;
  return (
    <form>
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          type="text"
          value={ value }
          name="value"
          onChange={ handleChange }
          className="inputs-wallet"
        />
      </label>
    </form>
  );
}

InputValue.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputValue;
