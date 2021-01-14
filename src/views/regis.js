
import React from "react";

// reactstrap components
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
  Table,
} from "reactstrap";

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
               
                   
              <img
                 alt="..."
                 src={require("assets/img/tong.png")}
               
               />
               
               
                
                
                
              </Card>
              <Card className="card-user">
               
               <img
                 alt="..."
                 src={require("assets/img/tong1.png")}
               />
               
            
             
             
             
           </Card>
           <Card className="card-user">
               
               <img
                 alt="..."
                 src={require("assets/img/tong2.png")}
               />
               
            
             
             
             
           </Card>
        
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}className="content"><h3>สมัครสมาชิก</h3></CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                   
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>ชื่อจริง</label>
                          <Input
                           
                          
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>นามสกุล</label>
                          <Input
                           
                          
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Email Address</label>
                          <Input
                         
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>เดือน/วัน/ปีเกิด</label>
                          <Input
                         
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>ชื่อบัญชี</label>
                          <Input
                           
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>รหัสผ่าน</label>
                          <Input
                     
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>ยืนยันรหัสผ่าน</label>
                          <Input
                       
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                   
                    </Row>
                    <Row>
               
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                        color="info"
                          className="btn-round"
                         
                          type="submit"
                        >
                         สร้างบัญชี
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

  
        </div>
      </>
    );
  }
}

export default User;
