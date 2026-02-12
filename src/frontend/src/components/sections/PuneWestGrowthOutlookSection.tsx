export default function PuneWestGrowthOutlookSection() {
  const keyGrowthDrivers = [
    'IT & Tech Hub Expansion: Hinjewadi, Baner, and Wakad continue to attract major technology companies and startups, driving demand for Grade A commercial spaces.',
    'Infrastructure Development: The Pune Metro Phase 1 and planned Phase 2 extensions significantly enhance connectivity across western corridors.',
    'Residential Migration: Growing residential communities in Pune West create sustained demand for retail, hospitality, and service-oriented commercial properties.',
    'Investment Climate: Institutional investors and REITs are increasingly focusing on Pune West commercial assets, validating long-term value potential.',
  ];

  const investmentConsiderations = [
    'Location Selection: Proximity to metro stations, IT parks, and residential clusters remains critical for sustained rental demand.',
    'Asset Quality: Grade A and B+ commercial properties with modern amenities command premium valuations and tenant retention.',
    'Regulatory Environment: Pune\'s transparent approval processes and RERA compliance provide investor confidence.',
    'Market Timing: Current market conditions present opportunities for strategic entry before the next growth phase accelerates.',
  ];

  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#0E1A2B' }}
    >
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12 md:space-y-16">
          {/* Main Heading */}
          <div className="text-center space-y-4">
            <h2 
              className="font-heading tracking-tight leading-tight"
              style={{ 
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 5vw, 2.75rem)',
                color: '#F5F5F5',
              }}
            >
              Pune West - 10 Year Growth & Outlook
            </h2>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: '#C6A75E' }}
            />
          </div>

          {/* Market Overview */}
          <div className="space-y-6">
            <h3 
              className="font-heading tracking-tight"
              style={{ 
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                color: '#F5F5F5',
              }}
            >
              Market Overview
            </h3>
            <p 
              className="font-sans leading-relaxed"
              style={{ 
                fontWeight: 400,
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: '#F5F5F5',
                lineHeight: '1.75',
              }}
            >
              Pune West has emerged as one of the most dynamic commercial real estate markets in India. 
              With the IT corridor expansion, improved infrastructure, and strategic connectivity through 
              the metro network, this region is poised for sustained growth over the next decade.
            </p>
          </div>

          {/* About the Growth Trend */}
          <div className="space-y-6">
            <h3 
              className="font-heading tracking-tight"
              style={{ 
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                color: '#F5F5F5',
              }}
            >
              About the Growth Trend
            </h3>
            <div className="space-y-4">
              <p 
                className="font-sans leading-relaxed"
                style={{ 
                  fontWeight: 400,
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#F5F5F5',
                  lineHeight: '1.75',
                }}
              >
                The above graph represents the indexed growth trend of key West Pune micro-markets over the past 7 years and overall decade movement, along with the projected outlook for the next 10 years (Base Year 2015 = 100).
              </p>
              <p 
                className="font-sans leading-relaxed"
                style={{ 
                  fontWeight: 400,
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#F5F5F5',
                  lineHeight: '1.75',
                }}
              >
                Over the last 7 years, West Pune has witnessed accelerated appreciation, particularly in Hinjewadi, Wakad and Baner, driven by IT expansion, metro connectivity and rising rental demand. Emerging corridors such as Tathawade, Ravet, Moshi, Nilakh and Mamurdi have shown structured upward momentum due to infrastructure development and spillover demand.
              </p>
              <p 
                className="font-sans leading-relaxed"
                style={{ 
                  fontWeight: 400,
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#F5F5F5',
                  lineHeight: '1.75',
                }}
              >
                With continued infrastructure upgrades, corporate expansion and urban development, West Pune remains strategically positioned for long-term capital appreciation and rental sustainability.
              </p>
              <p 
                className="font-sans leading-relaxed"
                style={{ 
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: '#F5F5F5',
                  opacity: 0.75,
                  lineHeight: '1.75',
                  fontStyle: 'italic',
                }}
              >
                Note: Indexed representation for trend understanding purposes.
              </p>
            </div>
          </div>

          {/* Key Growth Drivers */}
          <div className="space-y-6">
            <h3 
              className="font-heading tracking-tight"
              style={{ 
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                color: '#F5F5F5',
              }}
            >
              Key Growth Drivers
            </h3>
            <ul className="space-y-4 pl-6">
              {keyGrowthDrivers.map((item, index) => (
                <li 
                  key={index}
                  className="font-sans relative"
                  style={{ 
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: '#F5F5F5',
                    lineHeight: '1.75',
                    paddingLeft: '1.5rem',
                  }}
                >
                  <span 
                    className="absolute left-0 top-2"
                    style={{ color: '#C6A75E' }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 10-Year Outlook */}
          <div className="space-y-6">
            <h3 
              className="font-heading tracking-tight"
              style={{ 
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                color: '#F5F5F5',
              }}
            >
              10-Year Outlook (2026-2036)
            </h3>
            <p 
              className="font-sans leading-relaxed"
              style={{ 
                fontWeight: 400,
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: '#F5F5F5',
                lineHeight: '1.75',
              }}
            >
              Industry analysts project steady appreciation in commercial property values across Pune West, 
              with rental yields expected to remain competitive. The region&apos;s transformation into a mature 
              business district, coupled with planned infrastructure projects, positions it as a strategic 
              long-term investment destination.
            </p>
          </div>

          {/* Investment Considerations */}
          <div className="space-y-6">
            <h3 
              className="font-heading tracking-tight"
              style={{ 
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                color: '#F5F5F5',
              }}
            >
              Investment Considerations
            </h3>
            <ul className="space-y-4 pl-6">
              {investmentConsiderations.map((item, index) => (
                <li 
                  key={index}
                  className="font-sans relative"
                  style={{ 
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: '#F5F5F5',
                    lineHeight: '1.75',
                    paddingLeft: '1.5rem',
                  }}
                >
                  <span 
                    className="absolute left-0 top-2"
                    style={{ color: '#C6A75E' }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Closing Statement */}
          <div 
            className="border-l-4 pl-6 py-4"
            style={{ borderColor: '#C6A75E' }}
          >
            <p 
              className="font-sans leading-relaxed"
              style={{ 
                fontWeight: 400,
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: '#F5F5F5',
                lineHeight: '1.75',
              }}
            >
              PKC Urban Capital specializes in identifying high-potential commercial opportunities in Pune West. 
              Our structured approach combines market intelligence, developer relationships, and transparent 
              deal execution to help investors capitalize on this growth trajectory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
