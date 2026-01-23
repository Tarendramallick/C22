'use client'

import SelectUnderline from "./reusableComponents/SelectUnderline"

/* =======================
   HIGHLIGHT CONFIG
======================= */
const highlightWords: Record<string, string> = {
  CAN: 'font-bold text-[#FE5A1D]',
  WILL: 'font-bold text-[#FE5A1D]',
  brand: 'font-bold text-[#FE5A1D]',
  horizons: 'font-bold text-[#FE5A1D]',
  'CONVERSION FOCUSED': 'font-bold text-[#FE5A1D] italic',
  STRATEGIC: 'font-normal text-[#FE5A1D] italic',
  DATA: 'font-bold text-[#FE5A1D] italic',
  DRIVEN: 'font-bold text-[#FE5A1D] italic',
  SEO: 'font-bold underline',

  // symbols
  '—': 'text-[#FE5A1D]',
  '-': 'text-[#FE5A1D]',
  '/': 'text-[#FE5A1D]',
}

/* =======================
   TEXT RENDER FUNCTION
======================= */
function renderText(text: string) {
  const keys = Object.keys(highlightWords)
    .sort((a, b) => b.length - a.length)
    .map(key =>
      key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    )

  const regex = new RegExp(`(${keys.join('|')}|SEO)`, 'gi')

  return text.split(regex).map((part, index) => {
    // 🎯 Custom SEO underline
    if (part.toLowerCase() === 'seo') {
      return (
        <span key={index} className="relative inline-block font-bold">
          SEO
          <SelectUnderline
            className="absolute -left-1 -bottom-6"
            width={55}
            waves={8}
            strokeWidth={23}
          />
        </span>
      )
    }

    // Existing highlights
    const matchKey = Object.keys(highlightWords).find(
      key => key.toLowerCase() === part.toLowerCase()
    )

    if (matchKey) {
      return (
        <span key={index} className={highlightWords[matchKey]}>
          {part}
        </span>
      )
    }

    return <span key={index}>{part}</span>
  })
}


/* =======================
   COMPONENT
======================= */
export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Marketing',
      description:
        'Expertise in marketing and market strategies that CAN and WILL help your brand reach new horizons.'
    },
    {
      number: '02',
      title: 'Web Development',
      description:
        'Designing / Building websites using our CONVERSION FOCUSED framework.'
    },
    {
      number: '03',
      title: 'Search-Engine Optimization',
      description:
        'STRATEGIC, DATA-DRIVEN SEO that punches your brand to the top of search results — and keeps it there.'
    }
  ]

  return (
    <section className="bg-black px-8 md:px-12 py-6 min-h-screen">
      {/* Section Heading */}
      <h2 className="text-[40px] md:text-[60px] mb-30 ml-4 md:ml-8">
        <span className="text-white font-black mr-4 italic">[</span>
        <span className="text-[#FE5A1D] font-light italic tracking-widest mx-2">
          WHAT WE OFFER
        </span>
        <span className="text-white font-black ml-4 italic">]</span>
      </h2>

      {/* Services List */}
      <div className="max-w-[82%] ml-auto">
        {services.map(service => (
          <div
            key={service.number}
            className="border-t-2 border-dashed border-white py-10"
          >
            {/* GRID: Desktop → Mobile */}
            <div
              className="
                grid
                grid-cols-[80px_240px_1fr]
                items-center
                gap-16

                max-md:grid-cols-1
                max-md:gap-3
              "
            >
              {/* Number */}
              <span
                className="
                  text-white italic font-light
                  text-[26px]

                  max-md:text-[18px]
                  max-md:opacity-70
                "
              >
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="
                  text-white italic font-light text-center
                  text-[26px] leading-tight

                  max-md:text-[22px]
                "
              >
                {renderText(service.title)}
              </h3>

              {/* Description */}
              <p
                className="
                  text-white italic font-light
                  text-[26px] leading-tight

                  max-md:text-[18px]
                  max-md:leading-snug
                "
              >
                {renderText(service.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
