import React, { useState } from 'react'
import { Modal, Form, Button } from "react-bootstrap"
import { useContacts } from '../context/ContactsProvider'
import { useConversations } from '../context/ConverstationProvider'

export default function NewConversationModal({ modalClose }) {
    const [selectedContactsId, setSelectedContactsId] = useState([])
    const { createConversation } = useConversations()
    const { contacts } = useContacts()

    const handleSubmit = (e) => {
        e.preventDefault()
        createConversation(selectedContactsId)
        modalClose()
    }
    const handleCheckboxChange = (contactId) => {
        setSelectedContactsId(prevContact => {
            if (prevContact.includes(contactId)) {
                return prevContact.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevContact, contactId]
            }
        })
    }
    return (
        <>
            <Modal.Header closeButton>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check type="checkbox"
                                value={selectedContactsId.includes(contact.id)}
                                label={contact.name}
                                onChange={() => { handleCheckboxChange(contact.id) }} />
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
