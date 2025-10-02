'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const CircleMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.CircleMarker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

type MapLocation = {
  name: string
  country: string
  flag: string
  coordinates: [number, number] // [latitude, longitude]
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
    coordinates: [39.0742, 21.8243],
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
    coordinates: [30.5852, 36.2384],
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
    coordinates: [40.4637, -3.7492],
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
    coordinates: [43.7711, 11.2486],
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
    coordinates: [36.7783, -119.4179],
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
    coordinates: [-9.1900, -75.0152],
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getRadius = (polyphenols: number): number => {
    // Scale radius based on polyphenol content (15-40 pixels)
    return Math.max(15, Math.min(40, (polyphenols / 2042) * 40))
  }

  const getOpacity = (polyphenols: number): number => {
    // Higher polyphenols = more opaque
    return Math.max(0.5, Math.min(0.9, (polyphenols / 2042)))
  }

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 flex items-center justify-center">
        <div className="text-gray-400">Loading map...</div>
      </div>
    )
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
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-4 border border-gray-700/50 overflow-hidden">
        <div className="h-[600px] rounded-2xl overflow-hidden relative z-0">
          <MapContainer
            center={[30, 20]}
            zoom={2}
            minZoom={2}
            maxZoom={6}
            style={{ height: '100%', width: '100%', backgroundColor: '#1e293b' }}
            zoomControl={true}
          >
            {/* Dark theme map tiles */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {/* Location markers with heatmap effect */}
            {MAP_LOCATIONS.map((location) => (
              <CircleMarker
                key={location.name}
                center={location.coordinates}
                radius={getRadius(location.peakPolyphenols)}
                pathOptions={{
                  color: location.color,
                  fillColor: location.color,
                  fillOpacity: getOpacity(location.peakPolyphenols),
                  weight: 3,
                  className: 'animate-pulse-slow'
                }}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{location.flag}</span>
                      <div>
                        <div className="font-bold text-gray-900">{location.name}</div>
                        <div className="text-xs text-gray-600">{location.tagline}</div>
                      </div>
                    </div>
                    <div className="font-bold" style={{ color: location.color }}>
                      {location.peakPolyphenols} mg/kg peak
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {location.oils.length} premium oils
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      Click marker for details
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        {/* Selected Location Card */}
        {selectedLocation && (
          <div className="mt-6 relative animate-fade-in">
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
                      width: `${(selectedLocation.peakPolyphenols / 2042) * 100}%`,
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
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-200 hover:scale-[1.02]"
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
        <div className="mt-6 pt-6 border-t border-gray-700/50">
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
            Circle size and opacity represent polyphenol concentration • Click any marker for details
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
