import React from "react";
import CurrencyFormat, { propTypes } from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}items): <strong>{value}</strong>
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
