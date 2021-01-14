
import React from "react";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class Upgrade extends React.Component {
  render() {
    return (
      <>
       
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}className="content">
        <Col md="4">
              <Card className="card-user">
                <CardHeader  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}className="content">
                 
                </CardHeader>
                <CardBody>
                  <Form>
                  <CardTitle style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}className="content"><h3>เข้าสู่ระบบ</h3></CardTitle>
                  <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>ยูสเซอร์เนม</label>
                          <Input
                         
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>รหัสผ่าน</label>
                          <Input
                         
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                 
                    <Row>
               
                    </Row>
                    <p><b><a href="" >ลืมรหัสผ่าน</a></b></p>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="info"
                          type="submit"
                        >
                        เข้าสู่ระบบ
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>

           

        </div>
        
      </>
    );
  }
}

export default Upgrade;
