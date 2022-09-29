import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function TambahData() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addRuas = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post(`https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas/`, 
      { 
        "ruas": data.get('ruas'),
        "unit": data.get('unit'),
        "date_create": data.get('tgl')
      })
      .then(res => {
        const dataRuas = this.state.dataRuas.filter(query => query.id !== 0);  
        this.setState({ dataRuas });  
      })
  }
  return (
    <>
      <Button className="my-3" variant="success" onClick={handleShow}>
        <i className="fa-solid fa-circle-plus"></i> Tambah Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bold">Tambah Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addRuas}>
            <Form.Group className="mb-3" controlId="unit">
              <Form.Label>Unit Kerja</Form.Label>
              <Form.Select aria-label="Default select example" name="unit" required>
                <option>--Pilih Unit--</option>
                {[...Array(100)].map((x, i) =>
                  <option value={"Unit " + i}>Unit {i}</option>
                )}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ruas</Form.Label>
              <Form.Control type="text" name="ruas" placeholder="Masukan nama ruas" required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file"/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control type="date" name="tgl" required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--Pilih Status--</option>
                <option value="1">Aktif</option>
                <option value="0">Tidak</option>
              </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
 
export default TambahData;