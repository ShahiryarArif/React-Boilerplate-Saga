import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ConfigButton from "../ConfigButton/ConfigButton";
import "./smallNavTabs.scss";
import { SettingIcon } from "../../../assets/SVGs/SVGs";

const SmallNavTabs = ({
  noBackground,

  items,
  haveConfigure,
  isResponsive,
  isRounded,
}) => {
  return (
    <div className={`${isResponsive && "mygrid1"}`}>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={items && items.filter((i) => i.default)[0].eventKey}
      >
        <div id="small-tv-tabs">
          <Nav variant="pills" className="tv-tabs-transparent">
            {items &&
              items.map((item, i) => {
                return (
                  <Nav.Item>
                    <Nav.Link
                      id={i}
                      eventKey={item.eventKey}
                      onClick={() => {
                        item.handleClick(item.eventKey);
                      }}
                    >
                      {item.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            {haveConfigure && (
              <Nav.Item className="config-btn">
                <ConfigButton isGrey>
                  <SettingIcon />
                  Configure
                </ConfigButton>
              </Nav.Item>
            )}
          </Nav>
        </div>

        <Tab.Content className="position-absolute w-100 tv-mt-32">
          {items &&
            items.map((item, i) => {
              return (
                <Tab.Pane eventKey={item.eventKey}>{item.component}</Tab.Pane>
              );
            })}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default SmallNavTabs;
