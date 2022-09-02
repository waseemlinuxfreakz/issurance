import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideMenu from './dashboard-side-menu';
import DashboardTopNav from './dashboard-topnav';

import ActiveWall from '../../assets/img/activeWall.svg';
import Credentials from '../../assets/img/credentials.svg';
import Unsuccessful from '../../assets/img/Unsuccessful.svg';
import GoogleChartcolum from './google-chart-colum';
import GoogleChartDate from './google-chart-Date';
import CredentionOverview from './CredentionOverview';
import CredentionOverviewNotIssue from './CredentionOverview-notIssue';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Dashboard() {
    return (
        <div className="dashboard_container dashboardPage">
            <div className="sideMenu ">
                <SideMenu />
            </div>
            <div className="dashboard_content">
                <DashboardTopNav />
                <div className="dashboad_mainCont">

                    <Tabs
                        defaultActiveKey="today"
                        id="daysTabs"
                        className='DaysTabs'
                    >
                        <Tab eventKey="today" title="TODAY">
                            <div className="dashInf">
                                <div className="dashinf_col activeWall">
                                    <div className="dashinf_colTitle">
                                        <img src={ActiveWall} alt="ActiveWall" /> Active Wallets
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>1.57m</h2>
                                        <span>+2740 Today</span>
                                    </div>
                                </div>
                                <div className="dashinf_col credent">
                                    <div className="dashinf_colTitle">
                                        <img src={Credentials} alt="Credentials" /> Credentials Issued
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>156</h2>
                                        <span>+0 Today</span>
                                    </div>
                                </div>
                                <div className="dashinf_col unsuccess">
                                    <div className="dashinf_colTitle">
                                        <img src={Unsuccessful} alt="Unsuccessful" /> Unsuccessful Requests
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>276</h2>
                                        <span>+61 Today</span>
                                    </div>
                                </div>
                            </div>
                            <div className="graph_box">
                                <GoogleChartcolum />
                            </div>
                            <div className="graph_box">
                                <GoogleChartDate />
                            </div>
                        </Tab>

                        <Tab eventKey="days7" title="7 DAYS">
                        <div className="dashInf">
                                <div className="dashinf_col activeWall">
                                    <div className="dashinf_colTitle">
                                        <img src={ActiveWall} alt="ActiveWall" /> Active Wallets
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>1.57m</h2>
                                        <span>+2740 Today</span>
                                    </div>
                                </div>
                                <div className="dashinf_col credent">
                                    <div className="dashinf_colTitle">
                                        <img src={Credentials} alt="Credentials" /> Credentials Issued
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>156</h2>
                                        <span>+0 Today</span>
                                    </div>
                                </div>
                                <div className="dashinf_col unsuccess">
                                    <div className="dashinf_colTitle">
                                        <img src={Unsuccessful} alt="Unsuccessful" /> Unsuccessful Requests
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>276</h2>
                                        <span>+61 Today</span>
                                    </div>
                                </div>
                            </div>
                            <div className="graph_box">
                                <GoogleChartcolum />
                            </div>
                            <div className="graph_box">
                                <GoogleChartDate />
                            </div>
                        </Tab>

                        <Tab eventKey="days30" title="30 DAYS">
                        <div className="dashInf">
                                <div className="dashinf_col activeWall">
                                    <div className="dashinf_colTitle">
                                        <img src={ActiveWall} alt="ActiveWall" /> Active Wallets
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>1.57m</h2>
                                        <span>+2740 Today</span>
                                    </div>
                                </div>
                                <div className="dashinf_col credent">
                                    <div className="dashinf_colTitle">
                                        <img src={Credentials} alt="Credentials" /> Credentials Issued
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>156</h2>
                                        <span>+0 Today</span>
                                    </div>
                                </div>
                                <div className="dashinf_col unsuccess">
                                    <div className="dashinf_colTitle">
                                        <img src={Unsuccessful} alt="Unsuccessful" /> Unsuccessful Requests
                                    </div>
                                    <div className="dashinf_cont">
                                        <h2>276</h2>
                                        <span>+61 Today</span>
                                    </div>
                                </div>
                            </div>
                            <div className="graph_box">
                                <GoogleChartcolum />
                            </div>
                            <div className="graph_box">
                                <GoogleChartDate />
                            </div>
                        </Tab>

                    </Tabs>
                </div>
                <div className="dashboad_mainRight">
                    <CredentionOverview/>
                    <CredentionOverviewNotIssue/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;