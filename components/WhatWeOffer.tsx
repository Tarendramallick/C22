'use client'

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
  '/': 'text-[#FE5A1D]',
}

/* =======================
   TEXT RENDER FUNCTION
======================= */
function renderText(text: string) {
  const keys = Object.keys(highlightWords)
    .sort((a, b) => b.length - a.length) // longest first
    .map(key =>
      key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    )

  const regex = new RegExp(`(${keys.join('|')})`, 'gi')

  return text.split(regex).map((part, index) => {
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
    <section className="bg-black px-8 py-5 h-screen">
      {/* Section Heading */}
      <h2 className="text-[60px] font-normal ml-8 mb-35">
        <span className="text-white font-black italic">[</span>{' '}
        <span className="text-[#FE5A1D] font-light tracking-wider italic">
          WHAT WE OFFER
        </span>{' '}
        <span className="text-white font-black italic">]</span>
      </h2>

      {/* Services List */}
      <div className="max-w-[84%] ml-auto space-y-8">
        {services.map(service => (
          <div
            key={service.number}
            className="border-t-2 border-dashed border-white pt-8"
          >
            <div className="flex gap-20">
              {/* Number */}
              <div className="flex items-center text-center w-24">
                <span className="text-white text-[26px] italic font-light">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex gap-[60px leading-tight">
                <h3 className="flex items-center justify-center min-w-[180px] font-light text-[26px] italic text-center text-white">
                  {service.title}
                </h3>

              </div>
              <div className="flex items-start leading-tight">
                {/* <h3 className="font-bold text-[24px] italic  items-start text-center min-w-[200px] text-white">
                  {service.title}
                </h3> */}

                <p className="text-white font-light text-[26px] w-[99%] italic">
                  {renderText(service.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
