import React, { useState } from 'react'
import Display from "components/Display.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// เรียกใช้ module
import firebaseApp from '../firebase.js'


function Insert() {
    const [Uimage, setUimage] = useState('')
    const [loading, setLoading] = useState(false)
  
    const uploadUimage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'Food_images')
      setLoading(true)
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/daxwfdlwj/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
   //เปลี่ยน setIimage เป็น setImage เพื่อเก็บ url โดยตรง
      setimage(file.secure_url)
      setLoading(false)
    }

    // ประกาศตัวแปร state และ method สำหรับเปลี่ยนค่าตัวแปร
    const [image, setimage] = useState('')
    const [name, setname] = useState('')
    const [cate1, setcate1] = useState('')
    const [cate2, setcate2] = useState('')
    const [cate3, setcate3] = useState('')
    const [cate4, setcate4] = useState('')
    const [cate5, setcate5] = useState('')
  


    // ประกาศตัวแปรเพื่ออ้างอิง user collection
    const db = firebaseApp.firestore()
    const userCollection = db.collection('Food')

    async function insertDocument() {
        // insert และคืน document reference
        const documentRef = await userCollection.add({
            image,
            name,
            searchkey,
            cate:[
              cate1,
              cate2,
              cate3,
              cate4,
              cate5,
            ]
        })
    
        // ใช้ document reference เข้าถึงค่า document id
        alert(`new document has been inserted as ${ documentRef.id }`)
    }

      const searchkey = [];
      let curName = '';
      name.split('').forEach((letter) => {
        curName += letter;
        searchkey.push(curName);
      })
      searchkey.push(cate1)
      searchkey.push(cate2)
      searchkey.push(cate3)
      searchkey.push(cate4)
      searchkey.push(cate5)

    return <div className="content">

        <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadUimage}
            />
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <img src={image} style={{ width: '300px' }} />
            )}

        {/* ตัวแปร state จะถูกเปลี่ยนค่าเมื่อพิมพ์ข้อมูล และ trigger การ re-render */}

        <h3> ชื่ออาหาร </h3>
        <input type="text" value={ name } onChange={e => setname(e.target.value)} />
        <h3> วัตถุดิบ </h3>
        <select id="ddlViewBy"onChange={e => setcate1(e.target.value)} >
          <option value="None">-- Select --</option>
          <option value="หมู">หมู</option>
          <option value="ไก่">ไก่</option>
          <option value="ปลา">ปลา</option>
          <option value="เนื้อวัว">เนื้อวัว</option>
          <option value="กุ้ง">กุ้ง</option>
          <option value="หมึก">หมึก</option>
          <option value="ไข่">ไข่</option>

        </select>  
        <h3> วิธีการ </h3>  
        <select id="ddlViewBy" onChange={e => setcate2(e.target.value)} >
          <option value="None">-- Select --</option>
          <option value="ผัด">ผัด</option>
          <option value="ต้ม">ต้ม</option>
          <option value="ตุ๋น">ตุ๋น</option>
          <option value="ปิ้ง">ปิ้ง/ย่าง</option>
          <option value="ทอด">ทอด</option>
          <option value="นิ่ง">นึ่ง</option>
          <option value="ไมโครเวฟ">ไมโครเวฟ</option>
        </select>    
        <h3> รสชาติ</h3>  
        <select id="ddlViewBy" onChange={e => setcate3(e.target.value)} >
          <option value="None">-- Select --</option>
          <option value="เปรี้ยว">เปรี้ยว</option>
          <option value="หวาน">หวาน</option>
          <option value="เค็ม">เค็ม</option>
          <option value="เผ็ด">เผ็ด</option>
          <option value="จืด">จืด</option>
    
        </select>    
        
        <h3> อาหารสุขภาพ</h3>  
        <select id="ddlViewBy" onChange={e => setcate4(e.target.value)} >
          <option value="None">-- Select --</option>
          <option value="อาหารคลีน">อาหารคลีน</option>
          <option value="สลัด">สลัด</option>
       
    
        </select>    
        <h3> สัญชาติ</h3>  
        <select id="ddlViewBy" onChange={e => setcate5(e.target.value)} >
          <option value="None">-- Select --</option>
          <option value="ไทย-กลาง">ไทย-กลาง</option>
          <option value="ไทย-เหนือ">ไทย-เหนือ</option>
          <option value="ไทย-อีสาน">ไทย-อีสาน</option>
          <option value="ไทย-ใต้">ไทย-ใต้</option>
          <option value="ต่างประเทศ">ต่างประเทศ</option>
    
        </select>    
        
        {/* เรียกใช้ method เมื่อ click ปุ่ม */}
        <div><button onClick={ insertDocument }>Save</button></div>

        <br></br>
        <Display/>

    </div>
}

export default Insert;