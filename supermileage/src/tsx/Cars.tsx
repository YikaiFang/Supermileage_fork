// components/Cars.tsx
import Image from "next/image";

const cars = [
  { name: "Urban Concept", img: "/media/images/Urban3.jpg", modal: "#portfolioModal1" },
  { name: "Gasoline Prototype", img: "/media/images/GProto2.jpeg", modal: "#portfolioModal2" },
  { name: "Hydrogen Prototype", img: "/media/images/FCPProto2.jpg", modal: "#portfolioModal3" },
];

export default function Cars() {
  return (
    <section className="bg-gray-100 py-10" id="cars">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold uppercase pb-6">Our Cars</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map(({ name, img, modal }) => (
            <div key={name} className="relative group">
              <div className="overflow-hidden rounded shadow-md">
                <Image src={img} alt={name} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition" priority/>
              </div>
              <div className="text-lg font-medium mt-3">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
