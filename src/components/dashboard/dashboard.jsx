import { useState,React,Component,Link } from 'react';
import { render } from "react-dom";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarFooter,SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import {headercss} from "../../header.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Chart } from "react-google-charts";

export const data = [
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];

  export const data_second = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];
  
  export const options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

function DashboardUser() {

    

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handlemenusClick = (event) => {
    const activeid = event.target.getAttribute("data-item");
    console.log(activeid);
    
   

  }



    return (
        <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
                <a href='javascript:void(0);' data-item="dashboard-home" onClick={handlemenusClick} className="Menus-dashboards">Dashboard</a>
                <a href='javascript:void(0);' data-item="credential-setup" onClick={handlemenusClick} className="Menus-dashboards">Credential Setup</a>
                <a href='javascript:void(0);' data-item="issuer-did" onClick={handlemenusClick} className="Menus-dashboards">Issuer DIDS</a>
                <a href='javascript:void(0);' data-item="ecosystems" onClick={handlemenusClick} className="Menus-dashboards">Dashboard</a>
            </Menu>
            
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        
      </div>
      <div className="full-content">
        <div id="dashboard-main" className='dashboard-show'>
            <h2>Dashboard</h2>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="home" title="TODAY">
                <Chart chartType="ColumnChart" width="100%" height="400px" data={data_second} />
                </Tab>
                <Tab eventKey="profile" title="LAST 7 DAYS">
                <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
                </Tab>
                <Tab eventKey="contact" title="LAST 30 DAYS">
                    Testing third
                </Tab>
                </Tabs>
        </div>
        <div id="credential-setup" className='dashboard-show hide-content'>Main Dashboard second</div>
        <div id="ecosystems" className='dashboard-show hide-content'>Main Dashboard third</div>
        
    </div>
    </>
        );
}
export default DashboardUser;