"use client";
import dynamic from "next/dynamic";
import Footer from "tsx/Footer";
import Navbar from "tsx/Navbar";
import Title from "tsx/Title";

// Dynamically import InstagramEmbed with SSR disabled
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then(mod => mod.InstagramEmbed),
  { ssr: false }
);

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Title imageSrcPath="/media/images/blog.jpg" name="BLOGS" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/ubcsupermileage/" width={328} />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;