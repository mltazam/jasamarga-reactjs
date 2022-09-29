import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditData({id, ruas, unit, date_create}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const editRuas = event => {
      event.preventDefault();
      const data = new FormData(event.target);
      const id = data.get('id');
      axios.put(`https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas/${id}`,
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
      <Button className="btn-sm btn-warning m-1" onClick={handleShow}>
        <i className="fa-solid fa-eye"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bold">Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editRuas}>
            <Form.Control type="hidden" defaultValue={id} name="id"/>
            <Form.Group className="mb-3" controlId="unit">
              <Form.Label>Unit Kerja</Form.Label>
              <Form.Select aria-label="Default select example" name="unit" required>
                <option defaultValue={unit}>{unit}</option>
                {[...Array(10)].map((x, i) =>
                  <option value={"Unit " + i}>Unit {i}</option>
                )}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ruas</Form.Label>
              <Form.Control type="text" defaultValue={ruas} name="ruas" required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file"/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control type="date" defaultValue={date_create} name="tgl" required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--Pilih Status--</option>
                <option defaultValue="1">Aktif</option>
                <option defaultValue="0">Tidak</option>
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
 
export default EditData;