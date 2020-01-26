import React from 'react';
import ReactDOM from 'react-dom';
import { RecurlyProvider, Elements, CardElement } from '@recurly/react-recurly';

export function MyPaymentForm() {
  return (
    <form>
      <input type="text" data-recurly="first_name" placeholder="First name" />
      <input type="text" data-recurly="last_name" placeholder="Last name" />
      <CardElement />
    </form>
  );
}

function App() {
  return (
    <RecurlyProvider publicKey="MY_PUBLIC_KEY">
      <Elements>
        <MyPaymentForm />
      </Elements>
    </RecurlyProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
