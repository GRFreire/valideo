import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import DeliveryInstructions from './pages/DeliveryInstructions';
import TodayInstructions from './pages/TodayInstructions';
import EvaluateDelivery from './pages/EvaluateDelivery';

function Routes() {
  return (
    <BrowserRouter>
        <Route component={DeliveryInstructions} path="/delivery-instructions" exact />
        <Route component={TodayInstructions} path="/today-is-the-day" exact />
        <Route component={EvaluateDelivery} path="/evaluate-your-delivery" exact />
    </BrowserRouter>
  );
}

export default Routes;