import React from "react";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input className="subtotal__input" type="checkbox" /> This item
              will send as gift
            </small>
          </>
        )}
      />
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
