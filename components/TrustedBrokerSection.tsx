export default function AwardCertificate() {
  return (
    <section className="py-[clamp(6vw,72px,72px)] bg-white">
      <div className="w-[min(1100px,92vw)] mx-auto">

        {/* ===================== HEADING + DESCRIPTION ===================== */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-[clamp(26px,3vw,36px)] font-black text-[#000] leading-tight mb-4">
            Choose a Broker Trusted by Traders Worldwide
          </h2>

          <p className="text-[#4d6e55] text-[clamp(14px,1.4vw,17px)] leading-relaxed">
            Stonefort is recognised for delivering a secure, transparent and
            client-focused trading experience in the global margin FX and CFD
            markets. Operating under the regulatory oversight of SCA and FSC,
            we are committed to maintaining high standards of integrity,
            platform reliability and customer support.
          </p>
        </div>

        {/* ===================== TWO CARDS GRID ===================== */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* ===================== CARD 1 ===================== */}
          <article
            className="
              relative overflow-visible rounded-[22px]
              p-[clamp(16px,2.4vw,24px)]
              bg-gradient-to-br from-[#4d6e55]/80 via-transparent to-[#1E4862]/20
              shadow-[0_18px_48px_rgba(0,0,0,0.10)]
              border border-[#4d6e55]/10
              transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
            "
          >
            {/* Trophy – pop out */}
            <div
              className="
                absolute left-1/2 -top-14 -translate-x-1/2 
                z-30 pointer-events-none
              "
            >
              <img
                src="/images/awards.webp"
                alt="Trophy"
                className="w-[120px] h-auto drop-shadow-xl"
              />
            </div>

            {/* Ribbon */}
            <span
              className="
                absolute top-[28px] right-[-40px] z-20
                bg-[#DAE1B7] text-[#223647] font-extrabold
                px-10 py-[6px] rotate-[32deg]
                shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                border border-[#1E4862]/10
                flex items-center gap-1
              "
            >
              <strong className="font-black">Winner</strong> · 2025–2026
            </span>

            {/* Paper */}
            <div
              className="
                rounded-[18px]
                bg-[repeating-linear-gradient(0deg,transparent_0_23px,rgba(218,225,183,0.06)_23px_24px)]
              
                bg-no-repeat bg-left bg-contain
                p-[clamp(16px,2.2vw,22px)]
                border border-[#4d6e55]/10
              "
            >
              {/* Inner Box */}
              <div
                className="
                  text-center rounded-[14px]
                  p-[clamp(18px,3.2vw,36px)]
                  border border-dashed border-[#4d6e55]/20
                "
              >
                <h3
                  className="
                    text-[#000] font-black
                    text-[clamp(20px,2.4vw,28px)] tracking-tight mb-3
                  "
                >
                  Best Emerging Broker 2025–2026
                </h3>

                <p
                  className="
                    flex justify-center flex-wrap gap-2 
                    text-[#4d6e55] font-bold mb-3
                  "
                >
                  <span className="font-black">Recognised for growth & innovation</span>
                  <span className="opacity-40">•</span>
                  <span className="text-[#4d6e55]/80">Client-focused trading experience</span>
                </p>

                <p
                  className="
                    max-w-[58ch] mx-auto text-[#4d6e55]
                    leading-[1.65] mb-4
                  "
                >
                  Stonefort has been recognised for its growth, innovation and
                  client-focused approach, earning the Best Emerging Broker
                  award for 2025–2026.
                </p>
              </div>
            </div>

            {/* Wax Seal */}
            <span
              className="
                absolute right-6 bottom-0 z-30
                w-[82px] h-[82px] grid place-items-center
                rounded-full rotate-[-6deg]
                bg-[#DAE1B7] shadow-[0_8px_22px_rgba(0,0,0,0.18)]
                border border-[#1E4862]/20
              "
            >
              <svg viewBox="0 0 64 64" width="64" height="64">
                <defs>
                  <radialGradient id="wax1" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#f3f7f1" />
                    <stop offset="100%" stopColor="#4d6e55" />
                  </radialGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#wax1)" />
                <path
                  d="M22 33l6 6 14-14"
                  fill="none"
                  stroke="#4d6e55"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </article>

          {/* ===================== CARD 2 ===================== */}
          <article
            className="
              relative overflow-visible rounded-[22px]
              p-[clamp(16px,2.4vw,24px)]
              bg-gradient-to-br from-[#4d6e55]/80 via-transparent to-[#1E4862]/20
              shadow-[0_18px_48px_rgba(0,0,0,0.10)]
              border border-[#4d6e55]/10
              transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
            "
          >

            {/* Trophy popping out */}
            <div
              className="
                absolute left-1/2 -top-14 -translate-x-1/2 
                z-30 pointer-events-none
              "
            >
              <img
                src="/images/Top-100-award-scaled.webp"
                alt="Trophy"
                className="w-[120px] h-auto drop-shadow-xl"
              />
            </div>

            {/* Ribbon */}
            <span
              className="
                absolute top-[28px] right-[-40px] z-20
                bg-[#DAE1B7] text-[#223647] font-extrabold
                px-10 py-[6px] rotate-[32deg]
                shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                border border-[#1E4862]/10
                flex items-center gap-1
              "
            >
              <strong className="font-black">Top 100</strong> · GCC 2025–2026
            </span>

            {/* Paper */}
            <div
              className="
                rounded-[18px]
                bg-[repeating-linear-gradient(0deg,transparent_0_23px,rgba(218,225,183,0.06)_23px_24px)]
             
                bg-no-repeat bg-left bg-contain
                p-[clamp(16px,2.2vw,22px)]
                border border-[#4d6e55]/10
              "
            >
              <div
                className="
                  text-center rounded-[14px]
                  p-[clamp(18px,3.2vw,36px)]
                  border border-dashed border-[#4d6e55]/20
                "
              >
                <h3
                  className="
                    text-[#000] font-black
                    text-[clamp(20px,2.4vw,28px)] tracking-tight mb-3
                  "
                >
                  Top 100 Broker in the GCC 2025–2026
                </h3>

                <p
                  className="
                    flex justify-center flex-wrap gap-2 
                    text-[#4d6e55] font-bold mb-3
                  "
                >
                  <span className="font-black">Strong presence across the GCC</span>
                  <span className="opacity-40">•</span>
                  <span className="text-[#4d6e55]/80">Trusted by traders in the Middle East</span>
                </p>

                <p
                  className="
                    max-w-[58ch] mx-auto text-[#4d6e55]
                    leading-[1.65] mb-4
                  "
                >
                  We are proud to be acknowledged as one of the Top 100 Brokers
                  in the GCC for 2025–2026, reflecting our regional strength and
                  commitment to delivering a trusted trading experience.
                </p>
              </div>
            </div>

            {/* Wax Seal */}
            <span
              className="
                absolute right-6 bottom-0 z-30
                w-[82px] h-[82px] grid place-items-center
                rounded-full rotate-[-6deg]
                bg-[#DAE1B7] shadow-[0_8px_22px_rgba(0,0,0,0.18)]
                border border-[#1E4862]/20
              "
            >
              <svg viewBox="0 0 64 64" width="64" height="64">
                <defs>
                  <radialGradient id="wax2" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#f3f7f1" />
                    <stop offset="100%" stopColor="#4d6e55" />
                  </radialGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#wax2)" />
                <path
                  d="M22 33l6 6 14-14"
                  fill="none"
                  stroke="#4d6e55"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
