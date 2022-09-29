import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PreviewGambar({urlGambar}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-sm" variant="primary" onClick={handleShow}>
        Preview Gambar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview Gambar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img src={urlGambar} alt="Gambar" class="img-thumbnail" width="auto" height="500"></img>
        </Modal.Body>
      </Modal>
    </>
  );
}
 
export default PreviewGambar;