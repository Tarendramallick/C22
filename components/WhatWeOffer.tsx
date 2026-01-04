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
  STRATEGIC: 'font-bold text-[#FE5A1D] italic',
  'DATA-DRIVEN': 'font-bold text-[#FE5A1D] italic',
  SEO: 'font-bold underline'
}

/* =======================
   TEXT RENDER FUNCTION
======================= */
function renderText(text: string) {
  const regex = new RegExp(
    `(${Object.keys(highlightWords).join('|')})`,
    'gi'
  )

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
      title: 'Search Engine Optimization',
      description:
        'STRATEGIC, DATA-DRIVEN SEO that punches your brand to the top of search results — and keeps it there.'
    }
  ]

  return (
    <section className="bg-black px-8 py-10 mb-16">
      {/* Section Heading */}
      <h2 className="text-[60px] font-normal mb-30">
        <span className="text-white">[</span>{' '}
        <span className="text-[#FE5A1D] italic">WHAT WE OFFER</span>{' '}
        <span className="text-white">]</span>
      </h2>

      {/* Services List */}
      <div className="max-w-5xl ml-auto space-y-8">
        {services.map(service => (
          <div
            key={service.number}
            className="border-t-2 border-dashed border-white pt-8"
          >
            <div className="flex gap-16">
              {/* Number */}
              <div className="w-24 flex-shrink-0">
                <span className="text-white text-[24px] italic font-bold">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex gap-[60px] items-start">
                <h3 className="font-bold text-[24px] text-center italic min-w-[200px]">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-[24px] w-full italic leading-relaxed">
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
