import PropTypes from 'prop-types';
import React from 'react';
import '../styles/wallet.css';

function SubmitButton(props) {
  const { OnbuttonSubmitExpense } = props;
  return (
    <div className="button-wallet">
      <button
      type="button"
      onClick={ OnbuttonSubmitExpense }
    >
      Adicionar despesa
    </button>
    </div>
  );
}

SubmitButton.propTypes = {
  OnbuttonSubmitExpense: PropTypes.func,
}.isRequired;

export default SubmitButton;
