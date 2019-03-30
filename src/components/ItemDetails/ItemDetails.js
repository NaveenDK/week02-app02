import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Well,
  Media,
  Row,
  Col,
  Image
} from "react-bootstrap";

const styleImg = {
  marginTop: "20px",
  paddingTop: "8px",
  paddingBottom: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.3)"
};
export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div style={styleImg}>
            <img
              width={100}
              height={160}
              alt="thumbnail"
              src="./images/iphonex.png"
            />
          </div>
        </Collapse>
      </div>
    );
  }
}
