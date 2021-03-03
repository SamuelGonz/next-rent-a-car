import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { TOKEN_STRIPE } from "../../utils/consts/variables";
import FormPayment from "./FormPayment";
const stripePromise = loadStripe(TOKEN_STRIPE);

export default function Payment({ referencia }) {
   return (
      <div className="payment">
         <div className="data">
            <Elements stripe={stripePromise}>
               <FormPayment referencia={referencia} />
            </Elements>
         </div>
      </div>
   );
}
