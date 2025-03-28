import Header from "tsx/Header";
import Image from "next/image";
import Footer from "tsx/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      {/* <h1>Welcome to the Landing Page</h1> */}
      {/* <Link href="/sections/about">Go to About <br/><br/></Link>
      <Link href="/sections/contact">Go to Contact</Link> */}
      <Header/>
      {/* <Image src="/media/images/default.jpg" alt="" width={1000} height={1000}/> */}
    </div>
  );
}

