import "../components_css/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="header_left">
          <img src="../img/Wongnai_logo.png" alt="WebLogo" />
        </div>

        <div className="header_center">
          <div className="place_container">
            <img src="../img/pin.png" alt="location_pic" id="pin_img" />
            <input type="text" id="search_area" name="search_area" placeholder="กรุงเทพและปริมณฑล" />
            <img src="../img/dropdown_search.png" alt="dropdown_search" id="moreLocation_button" />
          </div>
          <div className="search_restaurant_container">
            <input type="text" name="search_res" id="search_res" placeholder="ร้านอาหาร โรงแรม ที่เที่ยว ร้านเสริมสวย" />
            <button className="search_but">
              <img src="../img/white_search.png" alt="search_pic" width="18px" />
            </button>
          </div>
        </div>

        <div className="header_right">
          <button className="login_button">
            <div className="inside_button">
              <img src="../img/profile_icon.png" alt="icon" />
              <span className="login_label">เข้าสู่ระบบ</span>
            </div>
          </button>

          <button className="dropdown_button">
            <img src="../img/dropdown_icon.png" alt="dropdown_icon" width="15px" />
          </button>
        </div>
      </div>
    </header>
  );
}