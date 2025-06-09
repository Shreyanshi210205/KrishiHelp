import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    waterUsage: "",
    fertilizerUsed: "",
    fertilizerQty: "",
    cropImage: null,
    farmLocation: "",
    additionalDetails: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cropImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your analysis request has been submitted!");
  };

  return (
    <div className="dashboard-container">
      <section className="welcome-section">
        <h1>Welcome to Your Dashboard</h1>
        <p>
          Track your agricultural progress. Fill the weekly form below to get
          insights and analysis.
        </p>
      </section>

      <section className="form-section">
        <form className="analysis-form" onSubmit={handleSubmit}>
          <label>Water Used (litres)</label>
          <input
            type="number"
            name="waterUsage"
            value={formData.waterUsage}
            onChange={handleChange}
            required
          />

          <label>Fertilizer Used</label>
          <input
            type="text"
            name="fertilizerUsed"
            value={formData.fertilizerUsed}
            onChange={handleChange}
            required
          />

          <label>Fertilizer Quantity (kg)</label>
          <input
            type="number"
            name="fertilizerQty"
            value={formData.fertilizerQty}
            onChange={handleChange}
            required
          />

          <label>Upload Crop Image</label>
          <input
            type="file"
            name="cropImage"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <label>Farm Location</label>
          <input
            type="text"
            name="farmLocation"
            value={formData.farmLocation}
            onChange={handleChange}
            required
          />

          <label>Additional Details</label>
          <textarea
            name="additionalDetails"
            rows="4"
            value={formData.additionalDetails}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-btn">
            Get Your Analysis Done
          </button>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
