import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import "./cardWhite.css";
export default function CardWhite() {

    return (
        <div className='cardwhite'>
            <CardGroup>
                <Card >
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
