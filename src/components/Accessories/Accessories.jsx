import { useParams } from "react-router-dom";

const Accessories = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <h1>Accessories</h1>
    </div>
  );
};

export default Accessories;
