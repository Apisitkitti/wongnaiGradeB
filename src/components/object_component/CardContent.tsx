export default function Card({ content_pic, imageIsNotLoad, typeOfInformation, restuarant_name, restuarant_place, restuarant_score, reviewer_number, food_category_first,
  food_category_second, food_category_final }
  : {
    content_pic?: string, imageIsNotLoad: string, typeOfInformation?: string, restuarant_name: string, restuarant_place: string, restuarant_score: number,
    reviewer_number: number, food_category_first?: string, food_category_second?: string, food_category_final?: string
  }) {
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
          <div className="rating_label">
            <span id="rating_show">{restuarant_score}</span> &starf;
          </div>
          <span id="review">{reviewer_number} รีวิว</span>
        </div>
        <div>
          <a href="#">{food_category_first}</a>,
          <a href="#"> {food_category_second}</a>,
          <a href="#"> {food_category_final}</a>
        </div>
        <div></div>
      </div>
    </>
  )
}