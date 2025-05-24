// components/Sponsors.tsx
const tiers = {
    Platinum: ["dff.png", "UBC PAF.png"],
    Gold: ["Transoft Solutions.png", "infrastructure safety solutions.png"],
    Silver: ["UBC MECH.png", "SCCBC.png", "UBC AMS.jpg", "Solas Energy.png", "Zaber.jpg"],
    Bronze: ["shell.png", "HTECss.png", "Walter Gage Memorial Fund.png", "UBC ECE.jpg", "Horizon Educational.png"],
    Select: ["SAEBC2.jpg", "core tool.png", "CNCmanu.png", "AVL.png", "enepaq.png", "hy-fcell.png",]
  };
  
  export default function Sponsors() {
    return (
      <section id="sponsors" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">Sponsors</h2>
          <p className="text-gray-500 mb-12">Thank you to all our 2025-2026 sponsors!</p>
          {Object.entries(tiers).map(([tier, logos]) => (
            <div key={tier} className="mb-10">
              <h3 className="text-xl font-semibold uppercase mb-4">{tier} Tier</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {logos.map((src, i) => (
                  <img 
                    key={i} 
                    src={`/media/images/${src}`} 
                    alt={`${tier} sponsor`} 
                    className={`h-20 max-w-[150px] object-contain ${
                      src === "infrastructure safety solutions.png" ? "bg-black p-2" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  