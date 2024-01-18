import '../components_css/Hero_section.css';
export default function HeroSection() {
  return (
    <div className="hero_section">
      <p className="hero_section_label">
        <a href="#" className="navigation_label">หน้าแรก</a>
        <span id='slash_in_hero_section'>/</span>
        <a href="#" className="navigation_label">ร้านอาหาร</a>
        <span id='slash_in_hero_section'>/</span>
        <span id='search_res_label'>ค้นหาร้านอาหาร</span>
      </p>
      <h1>ร้านอาหารยอดนิยม</h1>
    </div>
  )
}