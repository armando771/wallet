import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/wallet.css';

function InputCurrency(props) {
  const { currency, handleChange, coin } = props;
  return (
    <form>
      <label htmlFor="Moeda">
        Moeda
        <select
          id="Moeda"
          value={ currency }
          name="currency"
          onChange={ handleChange }
          className="inputs-wallet"
        >
          {coin.map((c, index) => (
            <option
              value={ c }
              key={ index }
            >
              { c }
            </option>
          )) }
        </select>
      </label>
    </form>
  );
}

InputCurrency.propTypes = {
  coin: PropTypes.func,
  currency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputCurrency;
