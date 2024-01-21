import PicFrame from "./PhotoSlideFrame";
import HeroSection from "./Hero_section";
import NavSidebar from "./NavSidebar";

export default function Content() {
  return (
    <div className="body_contain">
      <HeroSection />
      <NavSidebar />
      <PicFrame />
    </div>

  );
}