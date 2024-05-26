import { loadStripe } from "@stripe/stripe-js";
import SectionsTitle from "../../SectionsTitle/SectionsTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";



// TODO: add publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionsTitle heading="Please pay to eat" subHading='Payment'></SectionsTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;