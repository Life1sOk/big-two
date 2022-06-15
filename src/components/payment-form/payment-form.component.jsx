import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../button/button.component";

const PaymentForm = () => {
    // const stripe = useStripe();
    // const elements = useElements();

    // const paymentHandler = async (e) => {
    //     e.preventDefault();

    //     if(!stripe || !elements) return;

    // }

    return(
        <div className="payment-form-container">
            <form className="form-container">
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button buttonType={'inverted'}>Pay now</Button>
            </form>
        </div>
    );
}

export default PaymentForm;