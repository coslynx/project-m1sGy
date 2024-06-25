import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Allocation = () => {
  const [allocationDetails, setAllocationDetails] = useState([]);

  useEffect(() => {
    // Function to fetch allocation details from backend API
    const fetchAllocationDetails = async () => {
      try {
        const response = await fetch('/api/getAllocationDetails');
        if (response.ok) {
          const data = await response.json();
          setAllocationDetails(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllocationDetails();
  }, []);

  return (
    <div>
      <h1>Room Allocation Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Hostel Name</th>
            <th>Room Number</th>
            <th>Members Allocated</th>
          </tr>
        </thead>
        <tbody>
          {allocationDetails.map((allocation) => (
            <tr key={allocation.groupId}>
              <td>{allocation.groupId}</td>
              <td>{allocation.hostelName}</td>
              <td>{allocation.roomNumber}</td>
              <td>{allocation.membersAllocated}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Allocation;