import Item from "./Item";
import {PRODUCTS, RESOURCES, PANDUAN, ELEARNING, SUPPORT} from "./Menus";
import Image from "next/image";
import navimg from "/public/navbar.png";


const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-12 px-5 py-16">
      <div>
      <Image
            src={navimg}
            alt="logo"
            width="149"
            height="auto"
            className="md:cursor-pointe ml-2"
          />
      </div>
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RELATED" />
      <Item Links={PANDUAN} title="GUIDE" />
      <Item Links={ELEARNING} title="E-LEARNING" />
      <Item Links={SUPPORT} title="SUPPORTS" />
    </div>
  );
};


export default ItemsContainer;
