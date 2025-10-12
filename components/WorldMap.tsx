'use client'

import { useState, useEffect, useMemo } from 'react'
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
const Tooltip = dynamic(
  () => import('react-leaflet').then((mod) => mod.Tooltip),
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

type VisualizationMode = 'peak' | 'average' | 'count'

type OilData = {
  brand: string
  hplcPolyphenols?: number
  nmrOtherPolyphenols?: number
  origin: string
  cultivar: string
}

type WorldMapProps = {
  oils?: OilData[]
}

// Country coordinates mapping
const COUNTRY_COORDS: Record<string, { coords: [number, number], flag: string, tagline: string }> = {
  'Greece': { coords: [39.0742, 21.8243], flag: '🇬🇷', tagline: 'Koroneiki Capital' },
  'Greece (Corfu)': { coords: [39.6243, 19.9217], flag: '🇬🇷', tagline: 'Corfu Premium' },
  'Greece (South)': { coords: [37.0742, 21.8243], flag: '🇬🇷', tagline: 'Southern Excellence' },
  'Jordan': { coords: [30.5852, 36.2384], flag: '🇯🇴', tagline: 'Plateau Premium' },
  'Spain': { coords: [40.4637, -3.7492], flag: '🇪🇸', tagline: 'Picual Power' },
  'Spain (Málaga)': { coords: [36.7213, -4.4214], flag: '🇪🇸', tagline: 'Andalusian Excellence' },
  'Italy': { coords: [43.7711, 11.2486], flag: '🇮🇹', tagline: 'Tuscan Tradition' },
  'Italy (Puglia)': { coords: [40.6431, 17.5826], flag: '🇮🇹', tagline: 'Puglia Premium' },
  'Italy (Tuscany)': { coords: [43.7711, 11.2486], flag: '🇮🇹', tagline: 'Tuscan Heritage' },
  'Peru': { coords: [-9.1900, -75.0152], flag: '🇵🇪', tagline: 'South American Star' },
  'Portugal': { coords: [39.3999, -8.2245], flag: '🇵🇹', tagline: 'Atlantic Premium' },
  'Morocco': { coords: [31.7917, -7.0926], flag: '🇲🇦', tagline: 'North African Gold' },
}

export default function WorldMap({ oils = [] }: WorldMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [visualMode, setVisualMode] = useState<VisualizationMode>('peak')

  // Generate map locations from oil data dynamically
  const mapLocations = useMemo(() => {
    if (oils.length === 0) return MAP_LOCATIONS // Fallback to hardcoded data

    // Group oils by origin country
    const oilsByCountry = oils.reduce((acc, oil) => {
      const getMaxPolyphenols = (oil: OilData): number => {
        if (oil.hplcPolyphenols && oil.nmrOtherPolyphenols) {
          return Math.max(oil.hplcPolyphenols, oil.nmrOtherPolyphenols)
        }
        return oil.hplcPolyphenols || oil.nmrOtherPolyphenols || 0
      }

      const origin = oil.origin
      if (!acc[origin]) {
        acc[origin] = []
      }
      acc[origin].push({
        brand: oil.brand,
        polyphenols: getMaxPolyphenols(oil),
        cultivar: oil.cultivar
      })
      return acc
    }, {} as Record<string, Array<{ brand: string, polyphenols: number, cultivar: string }>>)

    // Transform into MapLocation format
    return Object.entries(oilsByCountry)
      .map(([country, countryOils]) => {
        const coordData = COUNTRY_COORDS[country]
        if (!coordData) return null // Skip countries without coordinates

        // Sort oils by polyphenols descending
        const sortedOils = countryOils.sort((a, b) => b.polyphenols - a.polyphenols)

        // Get peak polyphenols
        const peakPolyphenols = sortedOils[0]?.polyphenols || 0

        // Determine color based on peak
        let color = '#22c55e' // green
        if (peakPolyphenols >= 1400) color = '#22c55e'
        else if (peakPolyphenols >= 1000) color = '#84cc16'
        else if (peakPolyphenols >= 700) color = '#eab308'
        else if (peakPolyphenols >= 500) color = '#f59e0b'
        else color = '#ef4444'

        // Get base country name (remove parentheses)
        const baseName = country.includes('(') ? country.split('(')[0].trim() : country

        return {
          name: baseName,
          country: country,
          flag: coordData.flag,
          coordinates: coordData.coords,
          peakPolyphenols,
          color,
          tagline: coordData.tagline,
          oils: sortedOils
        }
      })
      .filter(Boolean) as MapLocation[]
  }, [oils])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getTop5Average = (location: MapLocation): number => {
    const top5 = location.oils
      .sort((a, b) => b.polyphenols - a.polyphenols)
      .slice(0, Math.min(5, location.oils.length))
    return Math.round(top5.reduce((sum, oil) => sum + oil.polyphenols, 0) / top5.length)
  }

  const getMetricValue = (location: MapLocation): number => {
    switch (visualMode) {
      case 'peak':
        return location.peakPolyphenols
      case 'average':
        return getTop5Average(location)
      case 'count':
        return location.oils.length
    }
  }

  const getMaxMetric = (): number => {
    switch (visualMode) {
      case 'peak':
        return Math.max(...mapLocations.map(l => l.peakPolyphenols))
      case 'average':
        return Math.max(...mapLocations.map(l => getTop5Average(l)))
      case 'count':
        return Math.max(...mapLocations.map(l => l.oils.length))
    }
  }

  const getColorFromIntensity = (value: number, max: number): string => {
    const intensity = value / max

    if (intensity >= 0.9) return '#22c55e' // Bright green
    if (intensity >= 0.7) return '#84cc16' // Yellow-green
    if (intensity >= 0.5) return '#eab308' // Yellow
    if (intensity >= 0.3) return '#f59e0b' // Orange
    return '#ef4444' // Red (lowest)
  }

  const getRadius = (location: MapLocation): number => {
    const value = getMetricValue(location)
    const max = getMaxMetric()
    const intensity = value / max
    // Scale radius based on metric (15-45 pixels)
    return Math.max(15, Math.min(45, intensity * 45))
  }

  const getOpacity = (location: MapLocation): number => {
    const value = getMetricValue(location)
    const max = getMaxMetric()
    const intensity = value / max
    // Higher values = more opaque
    return Math.max(0.5, Math.min(0.95, 0.5 + (intensity * 0.45)))
  }

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 flex items-center justify-center">
        <div className="text-gray-400">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-full overflow-hidden min-h-screen">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="relative z-10 text-center mb-3 md:mb-4 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
          Global EVOO Heatmap
        </h2>
        <p className="text-gray-400 text-[11px] md:text-sm max-w-2xl mx-auto mb-2 md:mb-3">
          Click locations to discover high polyphenol oils worldwide
        </p>

        {/* Visualization Mode Toggle - Compact */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-2 md:mb-3">
          <button
            onClick={() => setVisualMode('peak')}
            className={`px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-xs transition-all duration-200 ${
              visualMode === 'peak'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
            }`}
          >
            🏆 Peak
          </button>
          <button
            onClick={() => setVisualMode('average')}
            className={`px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-xs transition-all duration-200 ${
              visualMode === 'average'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
            }`}
          >
            📊 Avg
          </button>
          <button
            onClick={() => setVisualMode('count')}
            className={`px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-xs transition-all duration-200 ${
              visualMode === 'count'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
            }`}
          >
            🌍 Count
          </button>
        </div>
      </div>

      {/* Map Container - Smaller */}
      <div className="relative z-10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-3 border border-gray-700/50 overflow-hidden mx-2 md:mx-0">
        <div className="h-[300px] md:h-[450px] rounded-lg md:rounded-xl overflow-hidden relative z-0">
          <MapContainer
            center={[30, 20]}
            zoom={2}
            minZoom={2}
            maxZoom={6}
            style={{ height: '100%', width: '100%', backgroundColor: '#334155' }}
            zoomControl={true}
          >
            {/* Brighter map tiles */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {/* Location markers with heatmap effect */}
            {mapLocations.map((location) => {
              const metricValue = getMetricValue(location)
              const maxValue = getMaxMetric()
              const markerColor = getColorFromIntensity(metricValue, maxValue)
              const top5Avg = getTop5Average(location)

              return (
                <CircleMarker
                  key={location.name}
                  center={location.coordinates}
                  radius={getRadius(location)}
                  pathOptions={{
                    color: markerColor,
                    fillColor: markerColor,
                    fillOpacity: getOpacity(location),
                    weight: 3,
                    className: 'animate-pulse-slow'
                  }}
                  eventHandlers={{
                    click: () => setSelectedLocation(location),
                  }}
                >
                  <Tooltip
                    permanent
                    direction="center"
                    className="map-label-tooltip"
                  >
                    <div className="text-center leading-none">
                      <div className="font-bold text-white" style={{ fontSize: '10px' }}>
                        {visualMode === 'peak' && `${metricValue}`}
                        {visualMode === 'average' && `${metricValue}`}
                        {visualMode === 'count' && `${metricValue}`}
                      </div>
                    </div>
                  </Tooltip>
                  <Popup className="custom-popup">
                    <div className="min-w-[280px]">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                        <span className="text-3xl">{location.flag}</span>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 text-lg">{location.name}</div>
                          <div className="text-xs text-gray-600">{location.tagline}</div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="text-xs text-gray-500 mb-1">Peak</div>
                          <div className="font-bold text-gray-900">{location.peakPolyphenols} mg/kg</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="text-xs text-gray-500 mb-1">Top 5 Avg</div>
                          <div className="font-bold text-gray-900">{top5Avg} mg/kg</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="text-xs text-gray-500 mb-1">Producers</div>
                          <div className="font-bold text-gray-900">{location.oils.length} oils</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="text-xs text-gray-500 mb-1">Intensity</div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: markerColor }}></div>
                            <div className="font-bold text-gray-900">{Math.round((metricValue / maxValue) * 100)}%</div>
                          </div>
                        </div>
                      </div>

                      {/* Top 3 Oils Preview */}
                      <div className="mb-2">
                        <div className="text-xs font-semibold text-gray-600 mb-2">Top Oils:</div>
                        <div className="space-y-1">
                          {location.oils.slice(0, 3).map((oil, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs">
                              <span className="text-gray-700 truncate max-w-[180px]">{oil.brand}</span>
                              <span className="font-semibold" style={{ color: markerColor }}>{oil.polyphenols}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Click prompt */}
                      <div className="mt-3 pt-2 border-t border-gray-200 text-center">
                        <div className="text-xs text-gray-500 italic">Click marker for full details →</div>
                      </div>
                    </div>
                  </Popup>
                </CircleMarker>
              )
            })}
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
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700/50">
          <div className="mb-4">
            <div className="text-center text-xs md:text-sm font-semibold text-gray-300 mb-3 px-2">
              {visualMode === 'peak' && 'Heat Intensity: Peak Polyphenols'}
              {visualMode === 'average' && 'Heat Intensity: Top 5 Average Polyphenols'}
              {visualMode === 'count' && 'Heat Intensity: Number of Producers'}
            </div>

            {/* Gradient Bar */}
            <div className="max-w-2xl mx-auto mb-3 px-2">
              <div className="h-6 md:h-8 rounded-lg overflow-hidden flex">
                <div className="flex-1 flex items-center justify-center text-[10px] md:text-xs font-bold text-white" style={{ backgroundColor: '#ef4444' }}>Low</div>
                <div className="flex-1" style={{ backgroundColor: '#f59e0b' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#eab308' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#84cc16' }}></div>
                <div className="flex-1 flex items-center justify-center text-[10px] md:text-xs font-bold text-white" style={{ backgroundColor: '#22c55e' }}>High</div>
              </div>
              <div className="hidden md:flex justify-between text-xs text-gray-400 mt-2 px-2">
                <span>30%</span>
                <span>50%</span>
                <span>70%</span>
                <span>90%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 text-xs px-2">
            {mapLocations.map((location) => {
              const value = getMetricValue(location)
              const max = getMaxMetric()
              const color = getColorFromIntensity(value, max)
              const top5Avg = getTop5Average(location)

              return (
                <div key={location.name} className="flex items-center gap-2 bg-gray-800/30 rounded-lg p-2">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }}></div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-300 truncate">{location.flag} {location.name}</div>
                    <div className="text-gray-500 text-[10px] md:text-xs">
                      {visualMode === 'peak' && `${value} mg/kg peak`}
                      {visualMode === 'average' && `${value} mg/kg avg`}
                      {visualMode === 'count' && `${value} producer${value > 1 ? 's' : ''}`}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-[10px] md:text-xs text-gray-500 mt-3 md:mt-4 px-2">
            Circle size and opacity represent intensity • Click any marker for full details
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

        /* Animated Blob Styles */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
          mix-blend-mode: normal;
        }

        @keyframes blob-float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes blob-float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(0.95);
          }
          66% {
            transform: translate(20px, -40px) scale(1.05);
          }
        }

        @keyframes blob-float-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, 40px) scale(1.08);
          }
          66% {
            transform: translate(-30px, -30px) scale(0.92);
          }
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          top: -100px;
          left: 10%;
          animation: blob-float-1 20s ease-in-out infinite;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #22c55e 0%, #10b981 100%);
          bottom: -150px;
          right: 15%;
          animation: blob-float-2 25s ease-in-out infinite;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #34d399 0%, #22c55e 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: blob-float-3 18s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .blob {
            filter: blur(80px);
            opacity: 0.4;
          }
          .blob-1 {
            width: 300px;
            height: 300px;
          }
          .blob-2 {
            width: 350px;
            height: 350px;
          }
          .blob-3 {
            width: 250px;
            height: 250px;
          }
        }

        /* Map Label Tooltip Styles */
        .map-label-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .map-label-tooltip::before {
          display: none !important;
        }
        .leaflet-tooltip-top::before,
        .leaflet-tooltip-bottom::before,
        .leaflet-tooltip-left::before,
        .leaflet-tooltip-right::before {
          display: none !important;
        }
      `}</style>
    </div>
  )
}
