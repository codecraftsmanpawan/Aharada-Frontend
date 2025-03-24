import React, { useState } from "react";

// Reusable InputField Component
const InputField = ({ type, name, value, onChange, placeholder, error }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          border: error ? "1px solid red" : "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "16px",
          width: "100%",
        }}
      />
      {error && <span style={{ color: "red", fontSize: "14px" }}>{error}</span>}
    </div>
  );
};

// LeadForm Component
const LeadForm = () => {
  const [lead, setLead] = useState({
    name: "",
    number: "",
    email: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!lead.name.trim()) tempErrors.name = "Name is required!";
    if (!lead.number.trim()) {
      tempErrors.number = "Phone number is required!";
    } else if (!/^\d{10}$/.test(lead.number)) {
      tempErrors.number = "Enter a valid 10-digit phone number!";
    }
    if (!lead.email.trim()) {
      tempErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(lead.email)) {
      tempErrors.email = "Enter a valid email!";
    }
    if (!lead.state.trim()) tempErrors.state = "State is required!";
    if (!lead.city.trim()) tempErrors.city = "City is required!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Lead Submitted:", lead);
      alert("Lead added successfully!");
      setLead({ name: "", number: "", email: "", state: "", city: "" });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      <InputField
        type="text"
        name="name"
        value={lead.name}
        onChange={handleChange}
        placeholder="Enter Name"
        error={errors.name}
      />
      <InputField
        type="tel"
        name="number"
        value={lead.number}
        onChange={handleChange}
        placeholder="Enter Number"
        error={errors.number}
      />
      <InputField
        type="email"
        name="email"
        value={lead.email}
        onChange={handleChange}
        placeholder="Enter Email"
        error={errors.email}
      />
      <InputField
        type="text"
        name="state"
        value={lead.state}
        onChange={handleChange}
        placeholder="Enter State"
        error={errors.state}
      />
      <InputField
        type="text"
        name="city"
        value={lead.city}
        onChange={handleChange}
        placeholder="Enter City"
        error={errors.city}
      />

      <button
        type="submit"
        style={{
          backgroundColor: Object.keys(errors).length ? "#ccc" : "#d89e37",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: Object.keys(errors).length ? "not-allowed" : "pointer",
          border: "none",
        }}
        disabled={Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
};

export default LeadForm;
