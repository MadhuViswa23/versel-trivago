import React from 'react';

// Sample data for monthly prices
const monthlyPrices = [
  { month: 'January', price: 150 },
  { month: 'February', price: 160 },
  { month: 'March', price: 170 },
  // Add more months and prices as needed
];

const MonthlyPricesContainer = () => {
  return (
    <div className="monthly-prices-container">
      <h2>Monthly Prices</h2>
      <div className="price-list">
        {monthlyPrices.map((item, index) => (
          <div key={index} className="price-item">
            <div className="month">{item.month}</div>
            <div className="price">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyPricesContainer;
