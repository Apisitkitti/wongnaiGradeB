export default function Card({ content_pic, imageIsNotLoad, typeOfInformation, restuarant_name, restuarant_place }
  : { content_pic?: string, imageIsNotLoad: string, typeOfInformation?: string, restuarant_name: string, restuarant_place: string }) {
  return (
    <>
      <div className="pic_content_container">
        <img src={content_pic} alt={imageIsNotLoad} />
        <img src={content_pic} alt={imageIsNotLoad} />
        <img src={content_pic} alt={imageIsNotLoad} />
        <img src={content_pic} alt={imageIsNotLoad} />
        <img src={content_pic} alt={imageIsNotLoad} />
      </div>
      <div className="title_container">
        <div className="title_first_line">
          {typeOfInformation}
          <span>{restuarant_name}</span>
          <span>{restuarant_place}</span>
          <img src="./img/bookmark-white_icon.png" alt="bookmark_icon" />
        </div>
        <div className="title_second_line">

        </div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}