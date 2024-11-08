import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Dashboard = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <Tabs>
          <div className="bg-primaryColor text-white py-4 text-center">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="lg:w-1/2 mx-auto my-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div>
              <div>
                <TabList className="border-none font-bold">
                  <Tab>Cart</Tab>
                  <Tab>WishList</Tab>
                </TabList>
              </div>
            </div>
          </div>
          <div>
            <TabPanel>
              <Cart></Cart>
            </TabPanel>
            <TabPanel>
              <Wishlist></Wishlist>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </HelmetProvider>
  );
};

export default Dashboard;
