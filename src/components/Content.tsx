import PicFrame from "./PhotoSlideFrame";
import "../components_css/Sidebar.css";
export default function Content() {
  return (
    <div className="body_contain">
      <div className="sidebar_container ">
        <div className="shop_type container">
          <label>
            <input type="radio" name="restuarant" id="shop_type_1" />
            <div className="label_in_sidebar">ร้านอาหาร</div>
          </label >

          <label>
            <input type="radio" name="beauty_spa" id="shop_type_2" />
            <div className="label_in_sidebar">ร้านเสริมสวยและสปา</div>
          </label >

          <label>
            <input type="radio" name="hotel" id="shop_type_3" />
            <div className="label_in_sidebar">ที่พัก</div>
          </label >

          <label>
            <input type="radio" name="tourist" id="shop_type_4" />
            <div className="label_in_sidebar">สถานที่ท่องเที่ยว</div>
          </label >
        </div>
        <hr />
        <div className="rating container">
          <label>
            <h2>เรตติ้ง</h2>
            <input type="radio" name="3.5+" id="rating_1" />
            <div className="label_in_sidebar">3.5 +</div>
          </label>

          <label>
            <input type="radio" name="4.0+" id="rating_2" />
            <div className="label_in_sidebar">4.0 +</div>
          </label>
        </div>
        <hr />
        <div className="length container">
          <h2 className="length label">ค้นหาตามระยะห่างจาก</h2>
          <input type="text" name="location" id="location_input" placeholder="เช่น วัดพระแก้ว" />
          <input type="text" name="distance" id="distance_input" placeholder="1 กม." />
          <img src="../dropdown_icon.png" alt="dropdown_icon" width="12px" />
        </div>
        <hr />
        <div className="food_category container">
          <h2 className="food_category_label">ประเภทอาหาร</h2>
          <label>
            <input type="checkbox" name="up_to_you_food" id="up_to_you_food_input" />
            <div className="label_in_sidebar">อาหารตามสั่ง</div>
          </label>
          <label>
            <input type="checkbox" name="single_dish_meal" id="single_dish_meal_input" />
            <div className="label_in_sidebar">อาหารจานเดี่ยว</div>
          </label>
          <label>
            <input type="checkbox" name="noodle" id="noodle-input" />
            <div className="label_in_sidebar">ก๋วยเตี๋ยว</div>
          </label>
          <label>
            <input type="checkbox" name="dessert" id="dessert_input" />
            <div className="label_in_sidebar">ของหวาน</div>
          </label>
          <label>
            <input type="checkbox" name="beverage" id="beverage_input" />
            <div className="label_in_sidebar">เครื่องดื่ม/น้ำผลไม้</div>
          </label>
          <label>
            <input type="checkbox" name="bakery" id="bakery_input" />
            <div className="label_in_sidebar">เบเกอรี่เค้ก</div>
          </label>
          <a href="#" className="more_item_label">ดูเพิ่มเติม (18 ประเภท)</a>
        </div>
        <hr />
        <div className="discount container">
          <label>
            <input type="checkbox" name="wongnai" id="wongnai_input" />
            <div className="label_in_sidebar">Wongnai</div>
          </label>
          <label>
            <input type="checkbox" name="serenade_member" id="serenade_member_input" />
            <div className="label_in_sidebar">ลูกค้าเซเรเนด</div>
          </label>
          <label>
            <input type="checkbox" name="uob" id="uob_input" />
            <div className="label_in_sidebar">UOB</div>
          </label>
          <label>
            <input type="checkbox" name="ais" id="ais_input" />
            <div className="label_in_sidebar">ลูกค้าเอไอเอส</div>
          </label>
          <label>
            <input type="checkbox" name="shell_clubsmart" id="shell_clubsmart_input" />
            <div className="label_in_sidebar">Shell ClubSmart</div>
          </label>
        </div>
        <hr />
        <div className="price container">
          <label>
            <input type="checkbox" name="price_less_than_100" id="price_input" />
            <div className="label_in_sidebar">฿ ถูกกว่า 100</div>
          </label>
          <label>
            <input type="checkbox" name="price_between_hundred_to_two_five_zero" id="price_input" />
            <div className="label_in_sidebar">฿฿ 100-250</div>
          </label>
          <label>
            <input type="checkbox" name="price_between_two_five_one_to_five_hundred" id="uob_input" />
            <div className="label_in_sidebar">฿฿฿ 251-500</div>
          </label>
          <label>
            <input type="checkbox" name="price_morethan_five_hundred" id="ais_input" />
            <div className="label_in_sidebar">฿฿฿฿ 500+</div>
          </label>
          <label>
            <input type="checkbox" name="price_morethan_thousand" id="shell_clubsmart_input" />
            <div className="label_in_sidebar">฿฿฿฿฿ 1,000+</div>
          </label>
        </div>
        <hr />
        <div className="restaurant_condition container">
          <label>
            <input type="checkbox" name="best_deal" id="best_deal_input" />
            <div className="label_in_sidebar">ดีลสุดคุ้ม</div>
          </label>
          <label>
            <input type="checkbox" name="delivery" id="serenade_member_input" />
            <div className="label_in_sidebar">เดลิเวอรี่</div>
          </label>
          <label>
            <input type="checkbox" name="open_now" id="open_now_input" />
            <div className="label_in_sidebar">เปิดตอนนี้</div>
          </label>
          <label>
            <input type="checkbox" name="open_new" id="open_new_input" />
            <div className="label_in_sidebar">ร้านเปิดใหม่</div>
          </label>
          <label>
            <input type="checkbox" name="car_park" id="car_park_input" />
            <div className="label_in_sidebar">ที่จอดรถ</div>
          </label>
          <a href="#">ดูเพิ่มเติม</a>
        </div>
      </div>
      <PicFrame />
    </div>
  );
}