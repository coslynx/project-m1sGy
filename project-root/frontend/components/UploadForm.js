import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UploadForm = () => {
  const [groupFile, setGroupFile] = useState(null);
  const [hostelFile, setHostelFile] = useState(null);

  const handleGroupFileChange = (e) => {
    setGroupFile(e.target.files[0]);
  };

  const handleHostelFileChange = (e) => {
    setHostelFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (groupFile && hostelFile) {
      const formData = new FormData();
      formData.append('groupFile', groupFile);
      formData.append('hostelFile', hostelFile);

      // Call API to upload files
    } else {
      alert('Please select both group and hostel files');
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Upload Group CSV File:</Form.Label>
        <Form.Control type="file" onChange={handleGroupFileChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Upload Hostel CSV File:</Form.Label>
        <Form.Control type="file" onChange={handleHostelFileChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleUpload}>Upload</Button>
    </Form>
  );
};

export default UploadForm;