import React from "react";
import { Text, Modal } from '@nextui-org/react'

const Help = ({ helpVisible, helpCloseHandler }) => {
  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={helpVisible}
        onClose={helpCloseHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} b>
            What's this?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            This is a just a simple login check. (Yeah i just want to learn a
            bit next.js including zustand..)
          </Text>
          <Text>
            If u don't have .env added with ur api, u can use my test data:
          </Text>
          <Text>
            Username: <Text i>sampleuser</Text>
          </Text>
          <Text>
            Password: <Text i>password1</Text>
          </Text>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Help;
