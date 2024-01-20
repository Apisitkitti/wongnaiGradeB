import PicFrame from "./PhotoSlideFrame";
import NavSidebar from "./NavSidebar";
import "../components_css/Sidebar.css";
export default function Content() {
  return (
    <div className="body_contain">
      <NavSidebar />
      <PicFrame />
    </div>
  );
}