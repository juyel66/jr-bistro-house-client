import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";
import useAuth from "../../Hook/useAuth";

const CheckOutForm = () => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCarts();
    const totalPrice = cart.reduce((total,item) =>total+item.price,0)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure,totalPrice])
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement)
    if(card == null){
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        console.log('payment error', error);
        setError(error.message);
    }
    else{
        console.log('payment method', paymentMethod );
        setError('');
    }
    // confirm payment 
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'

            }
        }
    })
    if(confirmError){
        console.log('confirm error')
    }
    else{
        console.log('payment Intent',paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)
            // now save the payment in the database 
            const payment = {
              email: user.email,
              price: totalPrice,
              transactionId: paymentIntent.id,
              date: new Date(), // utc data convert. use moment js to 
              cartIds: cart.map(item => item._id),
              menuItemIds: cart.map(item => item.menuId),
              status: 'pending'
            }
             const res =await axiosSecure.post('/payments', payment);
             console.log('payment saved',res.data)


        }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn  bg-green-500 mt-2" type="submit" disabled={!stripe || !clientSecret}>
        Pay now
      </button>
      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-600"><span className="font-bold">Your Transaction id:</span> <span> {transactionId}</span></p>
      }
    </form>
  );
};

export default CheckOutForm;
