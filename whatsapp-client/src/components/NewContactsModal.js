import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from "../context/ContactsProvider"

export default function NewContactsModal({ modalClose }) {
    const idRef = useRef()
    const nameRef = useRef()
    const { createContact } = useContacts()

    const handleSubmit = (e) => {
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        modalClose()
    }
    return (
        <>
            <Modal.Header closeButton>
                Create Contact
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            ID
                    </Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                        <Form.Label>
                            Name
                    </Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
