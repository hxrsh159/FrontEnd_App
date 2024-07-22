// src/Portal.js
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createServiceRequest, listServiceRequests } from "./graphql/queries";
import { v4 as uuidv4 } from "uuid";

function Portal() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    creationDate: "",
    severity: "Low",
    reporterName: "",
    contactInfo: "",
    location: "",
  });
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const result = await API.graphql(graphqlOperation(listServiceRequests));
    setRequests(result.data.listServiceRequests.items);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = uuidv4();
    const resolutionDate = calculateResolutionDate(
      formData.creationDate,
      formData.severity
    );
    const requestData = { ...formData, id, resolutionDate };

    await API.graphql(
      graphqlOperation(createServiceRequest, { input: requestData })
    );
    fetchRequests();
    setFormData({
      name: "",
      description: "",
      creationDate: "",
      severity: "Low",
      reporterName: "",
      contactInfo: "",
      location: "",
    });
  };

  const calculateResolutionDate = (creationDate, severity) => {
    const date = new Date(creationDate);
    const daysToAdd = severity === "High" ? 1 : severity === "Medium" ? 3 : 5;
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split("T")[0];
  };

  return (
    <div>
      <h1>Service Requests</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Service Request Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Service Request Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="creationDate"
          value={formData.creationDate}
          onChange={handleChange}
          required
        />
        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="text"
          name="reporterName"
          placeholder="Reporter Name"
          value={formData.reporterName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="contactInfo"
          placeholder="Contact Information"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Requests</h2>
        {requests.map((request) => (
          <div key={request.id}>
            <p>
              <strong>Case Number:</strong> {request.id}
            </p>
            <p>
              <strong>Name:</strong> {request.name}
            </p>
            <p>
              <strong>Description:</strong> {request.description}
            </p>
            <p>
              <strong>Creation Date:</strong> {request.creationDate}
            </p>
            <p>
              <strong>Severity:</strong> {request.severity}
            </p>
            <p>
              <strong>Resolution Date:</strong> {request.resolutionDate}
            </p>
            <p>
              <strong>Reporter Name:</strong> {request.reporterName}
            </p>
            <p>
              <strong>Contact Information:</strong> {request.contactInfo}
            </p>
            <p>
              <strong>Location:</strong> {request.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portal;
