import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function EpisodeCard(props) {
  if (!props.data) {
    return <h1 className="hide">Loading...</h1>;
  }
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Episode Name : {props.data.name}</CardTitle>
          <CardSubtitle>Episode : {props.data.episode}</CardSubtitle>
          <CardText>Air Date : {props.data.air_date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}