import Header from "../tsx/components/Header";
import Footer from "../tsx/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Link href="/sections/about">Go to About <br/><br/></Link>
      <Link href="/sections/contact">Go to Contact</Link>

    </div>
  );
}

