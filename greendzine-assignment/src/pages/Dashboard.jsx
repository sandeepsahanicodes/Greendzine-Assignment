import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import InventoryChart from "../components/charts/InventoryChart";
import OrdersChart from "../components/charts/OrdersChart";
import BatteryDonutChart from "../components/charts/BatteryDonutChart";
import MarginChart from "../components/charts/MarginChart";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header isLogoutButtonHidden={false} />
      <div style={{ display: "flex", width: "100vw" }}>
        <SideMenu />
        <div className="charts-container">
          <div className="charts-inventory-container">
            <div className="charts-heading-container">
              <h2>Inventory</h2>
              <span>7 days</span>
            </div>
            <InventoryChart />
          </div>

          <div className="charts-orders-container">
            <div className="charts-heading-container">
              <h2>Orders</h2>
              <span>7 days</span>
            </div>
            <OrdersChart />
          </div>

          <div className="charts-battery-container">
            <div className="charts-heading-container">
              <h2>Battery</h2>
              <img src="../assets/three-dots.png" alt="three dots" />
            </div>
            <BatteryDonutChart />
          </div>

          <div className="charts-margin-container">
            <div className="charts-heading-container">
              <h2>Margin % </h2>
              <span>7 days</span>
            </div>

            <MarginChart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
