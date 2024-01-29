import React, { useEffect } from "react";
import TvNavBar from "../../../shared/components/TvNavBar/TvNavBar";
import TvBottomNavigation from "../TvBottomNavigation/TvBottomNavigation";
import {
  CollectionIcon,
  DashboardIcon,
  HomeIcon,
  MarketPlaceIcon,
  PacksIcon,
} from "../../../assets/SVGs/SVGs";
import { useHistory } from "react-router";

let itemSelected = "MarketPlace";
let currentRoute = "/marketplace";

const Layout = (props) => {
  const history = useHistory();

  const handleRoutes = (route) => {
    switch (route) {
      case "/marketplace":
        itemSelected = "MarketPlace";
        break;
      case "/introduction":
        itemSelected = "Introduction";
        break;
      case "/dashboard":
        itemSelected = "Dashboard";
        break;
      case "/collections":
        itemSelected = "Collections";
        break;
      case "/packs":
        itemSelected = "Packs";
        break;
      case "/trading":
        itemSelected = "Trading";
        break;
      default:
        itemSelected = "MarketPlace";
        break;
    }
  };

  const handleClickEvent = async (title, route) => {
    itemSelected = title;
    currentRoute = route;
  };

  useEffect(() => {
    handleRoutes(history.location.pathname);
  }, [history.location.pathname]);

  const NavBarItems = [
    {
      title: "MarketPlace",
      dropdownItems: ["Collectibles", "Artwork", "Comics"],
      dropDownHref: ["/collectibles", "/artwork", "/comics"],
      href: "/marketplace",
    },

    {
      title: "Collections",
      dropdownItems: [],
      href: "/collections",
    },
    {
      title: "Packs",
      dropdownItems: [],
      href: "/packs",
    },
    {
      title: "Dashboard",
      dropdownItems: [],
      href: "/dashboard",
    },
    {
      title: "Trading",
      dropdownItems: [],
      href: "/trading",
    },

  ];

  const BottomNavItems = [
    {
      title: "Home",
      icon: <HomeIcon />,
      to: "/introduction",
      active: false,
    },
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      to: "/dashboard",
      active: false,
    },
    {
      title: "Marketplace",
      icon: <MarketPlaceIcon color={"black"} />,
      to: "/marketplace",
      active: true,
    },
    {
      title: "Collection",
      icon: <CollectionIcon />,
      to: "/collections",
      active: false,
    },
    {
      title: "Packs",
      icon: <PacksIcon />,
      to: "/packs",
      active: false,
    },
  ];
  return (
    <>
      {/* <FullLoader /> */}
      <div className="tv-navbar-wrapper">
        <TvNavBar
          items={NavBarItems}
          selectedItem={itemSelected}
          handleClickEvent={handleClickEvent}
        />
      </div>
      <main className="pb-5 pb-sm-0 overflow-hidden">{props.children}</main>
      <TvBottomNavigation items={BottomNavItems} />
    </>
  );
};

export default Layout;
