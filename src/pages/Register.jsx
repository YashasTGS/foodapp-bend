import React from "react";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        backgroundImage: "url('data:image/jpeg;base64,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')", // Add your background image path
        backgroundSize: "cover", // Cover the entire screen
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent image repetition
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Register
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Name:
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Email:
          </label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Password:
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            minLength="6"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="confirmPassword"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            minLength="6"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="phone"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Phone Number:
          </label>
          <input
            type="tel"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="address"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Address:
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="address"
            name="address"
            placeholder="Enter your address"
            required
          />
        </div>
        <div id="errorMessage" style={{ color: "red", marginBottom: "15px" }}></div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
