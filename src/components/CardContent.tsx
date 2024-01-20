export default function Card({ content_pic, imageIsNotLoad, typeOfInformation, restuarant_name, restuarant_place }
  : { content_pic?: string, imageIsNotLoad: string, typeOfInformation?: string, restuarant_name: string, resturarant_place: string }) {
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
        <div>
          {typeOfInformation}
          <span>{restuarant_name}</span>
          <span>{restuarant_place}</span>
          <span></span>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}