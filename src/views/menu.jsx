import React, { useState, useEffect } from 'react';
import firebaseApp from '../firebase.js';
import { Link } from 'react-router-dom';
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import { Col, Card, Row} from "react-bootstrap";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  
} from "reactstrap";

// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";


function Dashboard(){ 
    // ประกาศตัวแปร state
    const [ Food, setFood ] = useState({})
    const [ cate, setCate] = useState('อาหาร')
    const [ search, setSearch] = useState('')

    // ประกาศตัวแปรเพื่ออ้างอิง user collection
    const db = firebaseApp.firestore()
    const Collection = db.collection('Food')  
    const CateCollection = Collection.where('searchkey', 'array-contains-any', [cate])
    //const SearchCollection = CateCollection.orderBy("name").startAt(search).endAt(search + "\uf8ff")
    
    useEffect(() => {
        // subscription นี้จะเกิด callback กับทุกการเปลี่ยนแปลงของ collection Food
        const unsubscribe =  CateCollection.onSnapshot(ss => {
            // ตัวแปร local
            const Food = {}

            ss.forEach(document => {
                // manipulate ตัวแปร local
                Food[document.id] = document.data()
            })

            // เปลี่ยนค่าตัวแปร state
            setFood(Food)
        })

        if(cate == ''){
          setCate('...')
        }

        return () => {
            // ยกเลิก subsciption เมื่อ component ถูกถอดจาก dom
            unsubscribe()
        }
    }, [cate, search])//เมื่อค่า cate เปลี่ยนจะทำการอัพเดท useEffect ใหม่ #ไอห่า หาเป็นวันกว่าจะได้ 



    return (
      
      <>
     
    
        <div className="content">            
            <Row>             
              
           <Col md="5">                                
            <form >
              <InputGroup >
                <Input  placeholder="ค้นหาเมนูของคุณ  " onChange={e => setCate(e.target.value)}/>
                <InputGroupAddon  addonType="append">
                  <InputGroupText >
                    <i className="nc-icon nc-zoom-split" />
                    
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
            </Col> 
     </Row>


      <Row>
           <Col md="5">
              <Card  className="card-user" >
                <CardHeader>
                  <CardTitle tag="h5">เลือกเมนูอาหารตามหมวดหมู่</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  
                <table class="table table-borderless">
                <thead class="thead-dark">
    <tr>
     

      <th scope="col">  <img
                 alt="..."
                 src={require("assets/img/meat.png")}
                 className="photo"
               />วัตถุดิบ</th>
      <th scope="col"><img
                 alt="..."
                 src={require("assets/img/taste.png")}
                 className="photo"
               />รสชาติ</th>
      <th scope="col"><img
                 alt="..."
                 src={require("assets/img/boiling.png")}
                 className="photo"
               />วิธีการ</th>
      <th scope="col"><img
                 alt="..."
                 src={require("assets/img/salad.png")}
                 className="photo"
               />อาหารสุขภาพ</th>
      <th scope="col"><img
                 alt="..."
                 src={require("assets/img/flag.png")}
                 className="photo"
               />สัญชาติ</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
   
    <td> <button class="btn22 default" value={ cate } onClick={e => setCate("หมู")}>หมู    </button></td>

    
      <td><button class="btn22 default" value={ cate } onClick={e => setCate("เปรี้ยว")}>เปรี้ยว   </button></td>

      <td><button class="btn22 default" value={ cate } onClick={e => setCate("ต้ม")}> ต้ม </button></td>
      <td><button class="btn22 default" value={ cate } onClick={e => setCate("อาหารคลีน")}>  อาหารคลีน</button></td>
      <td><button class="btn22 default" value={ cate } onClick={e => setCate("ไทย-กลาง")}> ไทย-กลาง</button></td>
     

    </tr>
    <tr>
    
    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ไก่")}>ไก่</button></td>
   
    
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("หวาน")}>หวาน</button></td>
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ผัด")}>ผัด</button></td>
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("สลัด")}>สลัด</button></td>
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ไทย-เหนือ")}>ไทย-เหนือ</button></td>
    </tr>
    <tr>
  
    <td>  <button class="btn22 default"  value={ cate } onClick={e => setCate("เนื้อวัว")}>เนื้อวัว  </button></td>
  
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("เค็ม")}>เค็ม</button></td>
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ตุ๋น")}>ตุ๋น</button></td>
      <td></td>
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ไทย-อีสาน")}>ไทย-อีสาน</button></td>
    </tr>
    <tr>

    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ปลา")}>ปลา</button></td>

     <td><button  class="btn22 default" value={ cate } onClick={e => setCate("เผ็ด")}>เผ็ด</button></td>
     <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ปิ้ง/ย่าง")}>ปิ้ง/ย่าง</button></td>
     <td></td>
    
     <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ไทย-ใต้")}>ไทย-ใต้</button></td>
   
    </tr>
    <tr>
    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("กุ้ง")}>กุ้ง</button></td>
 
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("จืด")}>จืด</button></td>
      <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ทอด")}>ทอด</button></td>
      <td></td>
    
      <td><button class="btn22 default" value={ cate } onClick={e => setCate("ต่างประเทศ")}>ต่างประเทศ</button></td>
    
    </tr>
    <tr>
    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("หมึก")}>หมึก</button></td>
    <td></td>
    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("นึ่ง")}>นึ่ง</button></td>
   
    
    </tr>
    <tr>

    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ไข่")}>ไข่</button></td>
    
    <td></td>
    
    <td><button  class="btn22 default" value={ cate } onClick={e => setCate("ไมโครเวฟ")}>ไมโครเวฟ</button></td>

     
  
    </tr>

  </tbody>
</table>

                </CardBody>
            
              </Card>
            </Col> 
            
      
          <Col md="7">
              <Card className="card-user">
                <CardHeader>
                <CardTitle tag="h5">เมนู</CardTitle>
                </CardHeader>
                <CardBody>
                <Form>
                   
                   <Row>

                { Object.keys(Food).map((id) => {

          
            return<Col md="2"> 
                        <div key={id}>
                       <Card>
                         
                      <Card.Img  src={Food[id].image} style={{ width : '250px', height: '120px' }}/>
                     
                            <Card.Title   style={{
                             
          display: "flex",
          justifyContent: "center",
          
          alignItems: "center",
       
        }} class="namefood" >{Food[id].name}</Card.Title>
                     
                          </Card>

                                
                    </div>
                    </Col> 
        }) }   
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

export default Dashboard;
 