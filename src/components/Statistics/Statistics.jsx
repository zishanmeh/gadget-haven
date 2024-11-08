import { Helmet, HelmetProvider } from "react-helmet-async";
const Statistics = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <div>
        <h1>No statistics available</h1>
      </div>
    </HelmetProvider>
  );
};

export default Statistics;
