import Header from "tsx/Header";
import Footer from "tsx/Footer";
import Link from "next/link";
import About from "./sections/about/page";

export default function Home() {
  const navItems = ["About", "Competition", "Blog", "Contact", "Join"]
  return (
    <div>
      {/* <h1>Welcome to the Landing Page</h1> */}
      {/* <Link href="/sections/about">Go to About <br/><br/></Link>
      <Link href="/sections/contact">Go to Contact</Link> */}
      <Header />
    </div>
  );
}

