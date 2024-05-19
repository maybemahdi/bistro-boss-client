import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";
import MenuCard from "./Shop/MenuCard";
import Loader from "./Loader";
import { useState } from "react";
const TabCategory = ({index}) => {
  const { menu, loading } = useMenu();
  const salads = menu.filter((m) => m.category === "salad");
  const pizza = menu.filter((m) => m.category === "pizza");
  const soups = menu.filter((m) => m.category === "soup");
  const desserts = menu.filter((m) => m.category === "dessert");
  const drinks = menu.filter((m) => m.category === "drinks");
  const [tabIndex, setTabIndex] = useState(index ? parseFloat(index) : 0)
  if(loading) return <Loader/>
  return (
    <div className="my-10 w-[85%] mx-auto flex items-center justify-center">
      <Tabs defaultIndex={tabIndex}>
        <TabList classID="font-bold">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {salads?.map((salad) => (
              <MenuCard key={salad._id} item={salad} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pizza?.map((p) => (
              <MenuCard key={p._id} item={p} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {soups?.map((s) => (
              <MenuCard key={s._id} item={s} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {desserts?.map((s) => (
              <MenuCard key={s._id} item={s} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {drinks?.map((s) => (
              <MenuCard key={s._id} item={s} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
