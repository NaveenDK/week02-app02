import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class PromoCodeDiscount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ""
    };
  }
  render() {
    return (
      <div>
        <br />
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : "Hide "}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="formInlineName">
                    <Form.Label>Promo Code</Form.Label>
                    <FormControl
                      type="text"
                      placeholder="Enter promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button
                    block
                    bsStyle="success"
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default PromoCodeDiscount;
