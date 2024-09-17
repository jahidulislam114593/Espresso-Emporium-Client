import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";
import Quality from "./Quality";
import OurProduct from "./OurProduct";
import FollowUs from "./FollowUs";
import ContactUs from "./ContactUs";
const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="">
      <Banner />
      <Quality />
      <OurProduct />
      <FollowUs />
      <ContactUs />
    </div>
  );
};

export default Home;
