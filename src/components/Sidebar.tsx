import "../components_css/Sidebar.css";
import "../components_css/BodySetting.css";

export default function Sidebar() {
  return (
    <aside className="body_contain">
      <div className="sidebar_container ">
        <div className="shop_type container">
          <label className="label_in_sidebar">
            <input type="radio" name="restuarant" id="shop_type_1" />
            ร้านอาหาร
          </label >

          <label className="label_in_sidebar">
            <input type="radio" name="beauty_spa" id="shop_type_2" />
            ร้านเสริมสวยและสปา
          </label >

          <label className="label_in_sidebar">
            <input type="radio" name="hotel" id="shop_type_3" />
            ที่พัก
          </label >

          <label className="label_in_sidebar">
            <input type="radio" name="tourist" id="shop_type_4" />
            สถานที่ท่องเที่ยว
          </label >
        </div>
        <hr />
        <div className="rating container">
          <label className="label_in_sidebar">
            <h2>เรตติ้ง</h2>
            <input type="radio" name="3.5+" id="rating_1" />
            3.5 +
          </label>

          <label className="label_in_sidebar">
            <input type="radio" name="4.0+" id="rating_2" />
            4.0 +
          </label>
        </div>
        <hr />
        <div className="length container">
          <h2 className="length label">ค้นหาตามระยะห่างจาก</h2>
          <input type="text" name="location" id="location_input" placeholder="เช่น วัดพระแก้ว" />
          <input type="text" name="distance" id="distance_input" placeholder="1 กม." />
        </div>
        <hr />
        <div className="food_category container">
          <h2 className="food_category_label">ประเภทอาหาร</h2>
          <label>
            <input type="checkbox" name="up_to_you_food" id="up_to_you_food_input" />
            อาหารตามสั่ง
          </label>
          <label>
            <input type="checkbox" name="single_dish_meal" id="single_dish_meal_input" />
            อาหารจานเดี่ยว
          </label>
          <label>
            <input type="checkbox" name="noodle" id="noodle-input" />
            ก๋วยเตี๋ยว
          </label>
          <label>
            <input type="checkbox" name="dessert" id="dessert_input" />
            ของหวาน
          </label>
          <label>
            <input type="checkbox" name="beverage" id="beverage_input" />
            เครื่องดื่ม/น้ำผลไม้
          </label>
          <label>
            <input type="checkbox" name="bakery" id="bakery_input" />
            เบเกอรี่เค้ก
          </label>
          <a href="#" className="more_item_label">ดูเพิ่มเติม (18 ประเภท)</a>
        </div>
        <hr />
        <div className="discount container">
          <label>
            <input type="checkbox" name="wongnai" id="wongnai_input" />
            Wongnai
          </label>
          <label>
            <input type="checkbox" name="serenade_member" id="serenade_member_input" />
            ลูกค้าเซเรเนด
          </label>
          <label>
            <input type="checkbox" name="uob" id="uob_input" />
            UOB
          </label>
          <label>
            <input type="checkbox" name="ais" id="ais_input" />
            ลูกค้าเอไอเอส
          </label>
          <label>
            <input type="checkbox" name="shell_clubsmart" id="shell_clubsmart_input" />
            Shell ClubSmart
          </label>
        </div>
        <hr />
        <div className="price container">
          <label>
            <input type="checkbox" name="price_less_than_100" id="price_input" />
            ฿ ถูกกว่า 100
          </label>
          <label>
            <input type="checkbox" name="price_between_hundred_to_two_five_zero" id="price_input" />
            ฿฿ 100-250
          </label>
          <label>
            <input type="checkbox" name="price_between_two_five_one_to_five_hundred" id="uob_input" />
            ฿฿฿ 251-500
          </label>
          <label>
            <input type="checkbox" name="price_morethan_five_hundred" id="ais_input" />
            ฿฿฿฿ 500+
          </label>
          <label>
            <input type="checkbox" name="price_morethan_thousand" id="shell_clubsmart_input" />
            ฿฿฿฿฿ 1,000+
          </label>
        </div>
        <hr />
        <div className="restaurant_condition container">
          <label>
            <input type="checkbox" name="best_deal" id="best_deal_input" />
            ดีลสุดคุ้ม
          </label>
          <label>
            <input type="checkbox" name="delivery" id="serenade_member_input" />
            เดลิเวอรี่
          </label>
          <label>
            <input type="checkbox" name="open_now" id="open_now_input" />
            เปิดตอนนี้
          </label>
          <label>
            <input type="checkbox" name="open_new" id="open_new_input" />
            ร้านเปิดใหม่
          </label>
          <label>
            <input type="checkbox" name="car_park" id="car_park_input" />
            ที่จอดรถ
          </label>
          <a href="#">ดูเพิ่มเติม</a>
        </div>

      </div>
    </aside>
  );
}