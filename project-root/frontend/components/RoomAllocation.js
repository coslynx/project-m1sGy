import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const RoomAllocation = () => {
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/allocate');
      setAllocations(res.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <h1>Room Allocation Details</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Hostel Name</th>
            <th>Room Number</th>
            <th>Members Allocated</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map((allocation, index) => (
            <tr key={index}>
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

export default RoomAllocation;