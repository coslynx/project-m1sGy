import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReactDropzone from 'react-dropzone';
import { CSVReader } from 'react-papaparse';

const Upload = () => {
  const [groupFile, setGroupFile] = useState(null);
  const [hostelFile, setHostelFile] = useState(null);

  const handleGroupDrop = (acceptedFiles) => {
    setGroupFile(acceptedFiles[0]);
  };

  const handleHostelDrop = (acceptedFiles) => {
    setHostelFile(acceptedFiles[0]);
  };

  const handleUpload = () => {
    if (groupFile && hostelFile) {
      // Call API to upload files and trigger room allocation algorithm
    } else {
      alert('Please upload both group and hostel files');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Upload CSV Files</h2>
          <Row>
            <Col>
              <h4>Upload Group Information CSV</h4>
              <ReactDropzone onDrop={handleGroupDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag and drop file here, or click to select file</p>
                  </div>
                )}
              </ReactDropzone>
            </Col>
            <Col>
              <h4>Upload Hostel Information CSV</h4>
              <ReactDropzone onDrop={handleHostelDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag and drop file here, or click to select file</p>
                  </div>
                )}
              </ReactDropzone>
            </Col>
          </Row>
          <Button onClick={handleUpload}>Upload Files</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;