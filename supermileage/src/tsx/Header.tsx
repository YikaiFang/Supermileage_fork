import Navbar from "tsx/Navbar";
import imagePath from "public/media/images/default.jpg";

function Header() {
  const navItems = ["About", "Competition", "Blog", "Contact", "Join"]
  return (
    <div>
      <Navbar 
      imageSrcPath="/media/images/ubcst-logo-inverted.png"
      navItems={navItems}/>
    </div>
  );
}
export default Header;
