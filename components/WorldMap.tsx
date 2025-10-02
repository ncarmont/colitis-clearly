'use client'

import { useState } from 'react'

type MapLocation = {
  name: string
  country: string
  flag: string
  coordinates: { x: number; y: number }
  oils: Array<{
    brand: string
    polyphenols: number
    cultivar: string
  }>
  peakPolyphenols: number
  color: string
  tagline: string
}

const MAP_LOCATIONS: MapLocation[] = [
  {
    name: 'Greece',
    country: 'GR',
    flag: '🇬🇷',
    coordinates: { x: 54, y: 42 },
    peakPolyphenols: 2000,
    color: '#22c55e',
    tagline: 'Koroneiki Capital',
    oils: [
      { brand: 'Pamako Monovarietal', polyphenols: 2000, cultivar: 'Tsounati/Koroneiki' },
      { brand: 'Kyoord Extremely High', polyphenols: 2042, cultivar: 'Greek Blend' },
      { brand: 'PJ KABOS Phenolic Shot', polyphenols: 1600, cultivar: 'Koroneiki' },
      { brand: 'November Organic', polyphenols: 1073, cultivar: 'Koroneiki' },
      { brand: 'Opus Oléa Organic', polyphenols: 874, cultivar: 'Koroneiki' },
      { brand: 'Zero Nutrition EVOO100', polyphenols: 813, cultivar: 'Coratina' },
      { brand: 'Odysea Good For You', polyphenols: 573, cultivar: 'Koroneiki' },
    ]
  },
  {
    name: 'Jordan',
    country: 'JO',
    flag: '🇯🇴',
    coordinates: { x: 58, y: 48 },
    peakPolyphenols: 1462,
    color: '#f59e0b',
    tagline: 'Plateau Premium',
    oils: [
      { brand: 'SP360 by ONSURI', polyphenols: 1462, cultivar: 'Arbequina' },
      { brand: 'ONSURI Arbequina', polyphenols: 1269, cultivar: 'Arbequina' },
      { brand: 'ONSURI Arbosana', polyphenols: 1255, cultivar: 'Arbosana' },
    ]
  },
  {
    name: 'Spain',
    country: 'ES',
    flag: '🇪🇸',
    coordinates: { x: 45, y: 42 },
    peakPolyphenols: 1059,
    color: '#ef4444',
    tagline: 'Picual Power',
    oils: [
      { brand: 'Finca La Torre Hojiblanca', polyphenols: 1059, cultivar: 'Hojiblanca' },
      { brand: 'Oro del Desierto Organic', polyphenols: 717, cultivar: 'Picual' },
      { brand: 'Castillo de Canena First Day', polyphenols: 601, cultivar: 'Picual' },
    ]
  },
  {
    name: 'Italy',
    country: 'IT',
    flag: '🇮🇹',
    coordinates: { x: 51, y: 43 },
    peakPolyphenols: 900,
    color: '#3b82f6',
    tagline: 'Tuscan Tradition',
    oils: [
      { brand: 'Entimio Intenso Organic', polyphenols: 900, cultivar: 'Coratina/Peranzana' },
      { brand: 'Olea Prilis Organic', polyphenols: 816, cultivar: 'Tuscan Monocultivar' },
      { brand: 'Citizens of Soil Tuscan', polyphenols: 655, cultivar: 'Tuscan Blend' },
    ]
  },
  {
    name: 'California',
    country: 'US',
    flag: '🇺🇸',
    coordinates: { x: 15, y: 38 },
    peakPolyphenols: 558,
    color: '#eab308',
    tagline: 'New World Quality',
    oils: [
      { brand: 'The Groves on 41 Koroneiki', polyphenols: 558, cultivar: 'Koroneiki' },
    ]
  },
  {
    name: 'Peru',
    country: 'PE',
    flag: '🇵🇪',
    coordinates: { x: 25, y: 68 },
    peakPolyphenols: 688,
    color: '#a855f7',
    tagline: 'South American Star',
    oils: [
      { brand: 'Vallesur Peruvian', polyphenols: 688, cultivar: 'Criolla' },
    ]
  },
]

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const getHeatmapIntensity = (polyphenols: number): number => {
    return Math.min((polyphenols / 2042) * 100, 100)
  }

  return (
    <div className="relative w-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Global EVOO Heatmap
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Click on any location to discover the highest polyphenol olive oils from around the world
        </p>
      </div>

      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 overflow-hidden">

        {/* World Map SVG */}
        <div className="relative aspect-[2/1] w-full max-w-6xl mx-auto">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <defs>
              {MAP_LOCATIONS.map(location => (
                <radialGradient key={location.name} id={`heat-${location.name}`}>
                  <stop offset="0%" stopColor={location.color} stopOpacity={getHeatmapIntensity(location.peakPolyphenols) / 100} />
                  <stop offset="50%" stopColor={location.color} stopOpacity={getHeatmapIntensity(location.peakPolyphenols) / 200} />
                  <stop offset="100%" stopColor={location.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* Simplified World Map Landmasses */}
            <g fill="#334155" opacity="0.3">
              {/* Europe */}
              <path d="M45,35 L48,34 L52,35 L55,37 L57,40 L56,43 L53,45 L50,45 L47,43 L45,40 Z" />

              {/* Africa */}
              <path d="M48,45 L52,45 L56,48 L58,52 L58,58 L55,62 L50,64 L46,62 L44,58 L44,52 L46,48 Z" />

              {/* Asia */}
              <path d="M57,30 L62,28 L68,28 L74,30 L78,34 L80,38 L78,42 L74,44 L68,45 L62,43 L58,40 L57,36 Z" />

              {/* North America */}
              <path d="M10,28 L15,26 L20,26 L25,28 L28,32 L28,38 L25,42 L20,44 L15,44 L10,42 L8,38 L8,32 Z" />

              {/* South America */}
              <path d="M22,50 L27,50 L30,54 L30,60 L28,66 L25,70 L22,72 L18,70 L16,66 L16,60 L18,54 Z" />

              {/* Australia */}
              <path d="M75,58 L80,57 L84,58 L86,61 L85,65 L82,67 L78,67 L75,65 L74,62 Z" />
            </g>

            {/* Heatmap Circles */}
            {MAP_LOCATIONS.map(location => (
              <circle
                key={`heat-${location.name}`}
                cx={location.coordinates.x}
                cy={location.coordinates.y}
                r="12"
                fill={`url(#heat-${location.name})`}
                className="transition-all duration-500"
                style={{
                  filter: hoveredLocation === location.name ? 'blur(8px)' : 'blur(12px)',
                  opacity: hoveredLocation === location.name ? 0.8 : 0.5,
                }}
              />
            ))}

            {/* Location Markers */}
            {MAP_LOCATIONS.map(location => (
              <g
                key={location.name}
                onClick={() => setSelectedLocation(location)}
                onMouseEnter={() => setHoveredLocation(location.name)}
                onMouseLeave={() => setHoveredLocation(null)}
                className="cursor-pointer transition-transform duration-200"
                style={{
                  transform: hoveredLocation === location.name ? 'scale(1.2)' : 'scale(1)',
                  transformOrigin: `${location.coordinates.x}% ${location.coordinates.y}%`,
                }}
              >
                {/* Marker Pin */}
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r="2"
                  fill={location.color}
                  className="drop-shadow-lg"
                />
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r="1.5"
                  fill="white"
                  className="animate-pulse"
                />

                {/* Pulsing Ring */}
                {(hoveredLocation === location.name || selectedLocation?.name === location.name) && (
                  <circle
                    cx={location.coordinates.x}
                    cy={location.coordinates.y}
                    r="3"
                    fill="none"
                    stroke={location.color}
                    strokeWidth="0.3"
                    className="animate-ping"
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Location Labels */}
          {MAP_LOCATIONS.map(location => (
            <div
              key={`label-${location.name}`}
              className="absolute pointer-events-none transition-opacity duration-200"
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
                transform: 'translate(-50%, -120%)',
                opacity: hoveredLocation === location.name ? 1 : 0.7,
              }}
            >
              <div className="bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-700/50 whitespace-nowrap">
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  <span>{location.flag}</span>
                  <span>{location.name}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Location Card */}
        {selectedLocation && (
          <div className="mt-8 relative">
            <div
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300"
              style={{ borderColor: selectedLocation.color }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{selectedLocation.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedLocation.name}</h3>
                    <p className="text-sm" style={{ color: selectedLocation.color }}>
                      {selectedLocation.tagline}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold" style={{ color: selectedLocation.color }}>
                    {selectedLocation.peakPolyphenols}
                  </span>
                  <span className="text-sm text-gray-400">mg/kg peak polyphenols</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${getHeatmapIntensity(selectedLocation.peakPolyphenols)}%`,
                      backgroundColor: selectedLocation.color,
                    }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Featured Oils ({selectedLocation.oils.length})
                </h4>
                <div className="grid gap-3">
                  {selectedLocation.oils.map((oil, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-200 hover:scale-102"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-bold text-white mb-1">{oil.brand}</h5>
                          <p className="text-xs text-gray-400">{oil.cultivar}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold" style={{ color: selectedLocation.color }}>
                            {oil.polyphenols}
                          </div>
                          <div className="text-xs text-gray-500">mg/kg</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
              <span className="text-gray-400">2000+ mg/kg</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
              <span className="text-gray-400">1000-2000 mg/kg</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#eab308' }}></div>
              <span className="text-gray-400">500-1000 mg/kg</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
              <span className="text-gray-400">&lt;500 mg/kg</span>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Click any location marker to view detailed information about oils from that region
          </p>
        </div>
      </div>
    </div>
  )
}
