import PhotoSet from "./object_component/PhotoSet"
import '../components_css/PicSlide.css'
export default function PicFrame() {
  return (
    <div className="all_pic_container">
      <PhotoSet photoLabel="ร้านใหม่ และ แนะนำ" photoUrl="../img/firstPicRestuarant.png" pictureNotIsNotLoad="First picture of the slider" />
      <PhotoSet photoLabel="ถูกและดี" photoUrl="../img/SecondPicRestuarant.png" pictureNotIsNotLoad="Second picture of the slider" />
      <PhotoSet photoLabel="ไลฟ์สไตล์ยามค่ำคืน" photoUrl="../img/ThirdPicRestuarant.png" pictureNotIsNotLoad="Third picture of the slider" />
      <PhotoSet photoLabel="อาณาจักรหม่าล่า" photoUrl="../img/FourthPicRestuarant.png" pictureNotIsNotLoad="Fourth picture of the slider" />
      <PhotoSet photoLabel="มือเช้าเริ่มวันใหม่" photoUrl="../img/FifthPicRestuarant.png" pictureNotIsNotLoad="Fifth picture of the slider" />
    </div>
  )
}