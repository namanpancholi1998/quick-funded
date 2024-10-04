import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AffliatePortal = ({ className = "" }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h1
        className="text-5xl font-bold text-green-600 bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4"
      >
        Affiliate Portal
      </h1>
      <p className="text-gray-700 mb-6 max-w-md">
        Click the button below, complete the form, and you'll receive all the
        necessary information to get started.
      </p>
      <Button
        color="success"
        onClick={toggle}
        className="justify-center px-8 py-3 text-base font-semibold text-white 
                  bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[120px] max-md:px-5"
      >
        Become An Affiliate
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Become An Affiliate</ModalHeader>
        <ModalBody>
          Here you can add your affiliate registration form or additional
          information.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AffliatePortal;
