"use client";

const PARTNERS = [
  { name:"Flutterwave", logo:"https://lh3.googleusercontent.com/aida-public/AB6AXuCMPEMobgUt5iy4b9dKCje4k6YL_4hAgDUpCCVYUAAA20Qw8tYkkSiUXjX-p2yd3v5XDjQMc5Q98aJKlCtVcfhyCq0Soz4clHp1gryLnDWwHkYz5SbMM5Y0Olq8SdeRY7BGePHN7DFhSaNvgGNO1Ou2HnRVU_GGK2zEXPJqDnDkTcYs9SVKW7tx6eWsDiCv-Be86GrgUxajfU8_nSSCeLM1OAGw3v-QO-IpBqruJbtQEZwdQXRg46OR1QiyjFqbuvqiRBgTpoi3VfWW" },
  { name:"OPay",        logo:"https://lh3.googleusercontent.com/aida-public/AB6AXuAHfJaKuKewkAWVaq3hrviRoXUKY0UHITNxnpyWTLH5WAke8wzEVhkGgruMubxwJOBe7F7pvOYlzTBPLOndgUyz_gcWjfEJ_NCGSDmKCEblhJ07EyVx5Pjzyq_3SQwAtT1zfcuYECxzN3SQJnujTJyWbI4O7xjjdBLQYTNDn4WFngUSjeBTMw09idNP8qjFft5ZePf-MHN5BYD3PVoXCbMxiBMWTLKWGh35mliV7I0jsR8IFDCk_Kdr7GLoz0V1aHOve5OK5fNiSBzI" },
  { name:"Paystack",    logo:"https://lh3.googleusercontent.com/aida-public/AB6AXuB72Jxq672csCeyVG0mbUWB7qc7UHHhIAVGz5uTq8icke14OlhSKYubmVnBQstefrEoNzQIC2EWCqwiQpz2nJIfSoQ8nolCX3Xo6fqm18y2fZvFev-we74f-SSb74YLVuQ14pF3yi-3m8dynp86aDfJTYOoeZZalDCsyTN4ARtCXk98diX0xw45y6ZeWExToBHBnz9_4L5hBGU0r6X4LOPGSQZ6Oly1P-A_lfiLm5vkzoqycCU81iu_GIyrgli-bUtfnv9UbZgby8Lr" },
  { name:"Andela",      logo:"https://lh3.googleusercontent.com/aida-public/AB6AXuCjfGDYKzEUox5mD51w1d5QBqcR1AXseM0d4XVsdD-vB03eb66_SlsluzVsmZ4neRofdVJjmQFFz4gb9Nr0Ysc7ZvK08L-ZY3dU-uK01Mr4e64TAaDBmiDLqbwScYPIKO4GiFK4u3ttlUxJLoHm2p2gRyRaQPdmbbyyfPEaTBcDYcTVsare4RCijfMWzZqlJR1Nh_GVSmb6scVjOsBbbEmQ21jsf5V-NZKEbZ-GNOvNFsmFAqZ4CLzvM2dvGJ5VRcSIKpvAHuiV6ycI" },
  { name:"PiggyVest",   logo:"https://lh3.googleusercontent.com/aida-public/AB6AXuDtBEaAblFDnCI6wA5KE6QSeywtXNq-JPXytqpeX16Lr5YG47u3REARFO7kyahQSaTxHtWU5UgdLUiXQcylnOikhxskhtLmTwyM8A5fK0LnxWtD2TgoUBk5smfAEAVlwUSwbH84-hf-tRfohPvzDKTH_8VC42JcJQDUj_EUM9mDYgtyHGzXEKsm-Z3191-I0k4EsbOw7MPxACxLWq2qerCQMwm2dIBPtj2UqcnQicoZt7Wu4DRJMok7Vc6pzHkI_aRuGXEKo588XUI_" },
  { name:"Kuda Bank",   logo:"https://lh3.googleusercontent.com/aida-public/AB6AXuD4NMnoIosR21egjeZIo8ddCalDZpThUeyngDoKhPMh4dxx1BH_SbMmvdfrhTrl8X7D8N6xbOOyUPnTD22lnVlv9JsQNBl8ymuhFNN5lnKOzrR3kJ2bQV_ve6Taj2bMuN--Hoar0-KlNUBrhDO__LEm7igKKhvGNvcqkQsbyLzjYA9LXw6cyC7XC4dbFnWo6LVVEAFiLRm3VHB3Z9U3yl2ZaEvH3GnNjPgVHJJk5_R62pRFw9wl1DQek8wnkDTWSwdxPL1rLLX1uH6n" },
];

export default function PartnersSection() {
  return (
    <section className="py-section-gap">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left */}
        <div className="lg:w-1/2 reveal-left">
          <div className="font-label-caps text-label-caps text-primary mb-4">THE OUTCOME</div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Get found by the companies already searching for you.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Once you complete your roadmap and pass the final verifications, your profile is unlocked for our corporate partners. Top scoring graduates get matched directly to internships and junior roles.
          </p>
          <button className="font-button-text text-button-text px-8 py-4 border-2 border-primary rounded-full hover:bg-primary-container hover:text-on-primary transition-all">
            Explore Partners
          </button>
        </div>

        {/* Right: partner logos */}
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 w-full stagger">
          {PARTNERS.map(p => (
            <div key={p.name}
              className="bg-white border-2 border-primary-container/40 p-6 flex flex-col items-center justify-center gap-4 rounded-lg hover:-translate-y-1 transition-transform duration-200"
              style={{ boxShadow: "6px 6px 0px #344C11" }}
            >
              <img src={p.logo} alt={p.name} className="h-12 w-auto object-contain" />
              <span className="font-body-md font-bold text-on-surface">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
