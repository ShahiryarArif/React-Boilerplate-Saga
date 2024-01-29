import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./tabs.scss";
import TvBadge from "../Badge/TvBadge";

const NavTab = ({
  noBackground,
  items,
  haveConfigure,
  isResponsive,
  isRounded,
  isDashboard,
  noMargin,
}) => {
  return (
    <div>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={items && items.filter((i) => i.default)[0]?.eventKey}
      >
        <div id="tv-tabs-md" className={`${isDashboard && "border-0"}`}>
          <Nav
            variant="pills"
            id="tv-tabs"
            className={` tv-container ${isDashboard && "tv-tabs-dashboard"} ${
              noBackground && "tv-tabs-transparent"
            }
           ${isResponsive && "mygrid2"}
           ${isRounded && "tv-tabs-rounded"} `}
          >
            {items &&
              items.map((item, i) => {
                return (
                  <Nav.Item
                    className={` ${
                      item.disabled ? "in-active" : ""
                    } position-relative`}
                    key={`navItem_${i}`}
                  >
                    {item.pillContent && (
                      <TvBadge
                        isSmall
                        colorClass="badge-red"
                        key={`tvBadge_${i}`}
                      >
                        {" "}
                        {item.pillContent}{" "}
                      </TvBadge>
                    )}

                    <Nav.Link
                      id={i}
                      eventKey={item.eventKey}
                      onClick={() => item.handleClick()}
                    >
                      {item.title}

                      {/* <p className="tv-ml-6">12</p> */}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
        </div>

        <Tab.Content
          className={`${isDashboard ? "" : "tv-container"} ${
            noMargin ? "" : "u-mt-230"
          } ${isRounded && "is-Rounded"}`}
        >
          {items &&
            items.map((item, i) => {
              return (
                <Tab.Pane eventKey={item.eventKey} key={`${item.eventKey}`}>
                  {item.component}
                </Tab.Pane>
              );
            })}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default NavTab;
