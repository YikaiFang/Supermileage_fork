// components/Sponsors.tsx
const tiers = {
    Diamond: ["dff.png"],
    Platinum: ["Unilia logo white.png"],
    Gold: ["UBC PAF.png", "UBC MECH.png"],
    Silver: ["SCCBC.png", "InnovativeToolAndDieEdit.png", "hcs_logo.png"],
    Bronze: ["shell.png", "HTECss.png"],
    Select: ["Electro-Meters.png", "SAEBC2.jpg", "core tool.png", "CNCmanu.png", "sticker-mule.svg"]
  };
  
  export default function Sponsors() {
    return (
      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">Sponsors</h2>
          <p className="text-gray-500 mb-12">Thank you to all our 2021-2022 sponsors!</p>
          {Object.entries(tiers).map(([tier, logos]) => (
            <div key={tier} className="mb-10">
              <h3 className="text-xl font-semibold uppercase mb-4">{tier} Tier</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {logos.map((src, i) => (
                  <img key={i} src={`/media/images/${src}`} alt={`${tier} sponsor`} className="h-20 max-w-[150px] object-contain" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  