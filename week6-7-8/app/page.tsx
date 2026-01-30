function HomePage() {
  return (
    <div>
      <div className="text-center mt-5 p-3 border-10 ">
        <h1 className="text-3xl bg-blue-500 text-white border-8 p-4">Welcome Hi Hello To My APP</h1>
        <p className="text-2xl m-2 bg-green-600  text-white p-4 m-4" >นี่คือ Next.js ที่ฉันเขียนเพื่อเรียนเพื่อหางานหาเงินแล้วก็ตาย</p>
        <a className="text-xl m-2 bg-orange-600  text-amber-200 p-1 m-2" href="/light">บทเรียนที่ 1 State ของการเปิด / ปิด หลอดไฟ</a>
        <br/>
        <a className="text-xl m-2 bg-blue-600  text-white p-1 m-2 "  href="/count">บทเรียนที่ 2 State ของการเพิ่มลดตัวเลข</a>
        <br/>
        <a className="text-xl m-2 bg-purple-600  text-white p-1 m-2 "  href="/form">บทเรียนที่ 3 State ของการทำแบบฟอร์มลงทะเบียน</a>
        
      </div>
    </div>
  
 
    
     
  );
}

export default HomePage

//production ระบบที่ใช้งานจริง ทำเสร็จแล้ว upload ให้คนใช้งาน
//local host ทำเว็ปในเครื่องตัวเอง เจอในเครื้องตัวเอง เครื่องอื่นหาไม่เจอ
// test,dev ,และอื่นๆ หน้าเว็ปไซด์ที่มีไว้สำหรับ test เท่านั้น
