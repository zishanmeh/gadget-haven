import { Helmet, HelmetProvider } from "react-helmet-async";
const Statistics = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <div className="min-h-72 flex justify-center items-center">
        <h1 className="text-4xl font-bold">No statistics available</h1>
      </div>
    </HelmetProvider>
  );
};

export default Statistics;
