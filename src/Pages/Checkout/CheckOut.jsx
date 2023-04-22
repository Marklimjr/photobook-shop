import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { items } = location.state;

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckOut;