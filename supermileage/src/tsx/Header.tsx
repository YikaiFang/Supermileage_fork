import Navbar from "tsx/Navbar";

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
