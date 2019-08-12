import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";


export default function LocationCard (props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name : {props.data.name}</CardTitle>
          <CardSubtitle>
            Type : {props.data.type} Dimension : {props.data.dimension}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}
