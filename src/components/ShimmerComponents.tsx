import React from 'react';

// Base shimmer animation
const shimmerBase = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]";

// Page Header Shimmer
export const PageHeaderShimmer = () => (
  <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 text-white pt-24 pb-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <div className={`${shimmerBase} h-4 w-32 mx-auto mb-6 rounded`} />
      <div className={`${shimmerBase} h-16 w-3/4 mx-auto mb-6 rounded`} />
      <div className={`${shimmerBase} h-6 w-1/2 mx-auto mb-8 rounded`} />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className={`${shimmerBase} h-12 w-48 rounded`} />
        <div className={`${shimmerBase} h-12 w-48 rounded`} />
      </div>
    </div>
  </div>
);

// Content Section Shimmer
export const ContentSectionShimmer = () => (
  <div className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className={`${shimmerBase} h-12 w-2/3 mx-auto mb-6 rounded`} />
        <div className={`${shimmerBase} h-6 w-1/2 mx-auto rounded`} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
            <div className={`${shimmerBase} h-16 w-16 mx-auto mb-4 rounded-xl`} />
            <div className={`${shimmerBase} h-6 w-3/4 mx-auto mb-3 rounded`} />
            <div className={`${shimmerBase} h-4 w-full mb-2 rounded`} />
            <div className={`${shimmerBase} h-4 w-2/3 mx-auto rounded`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Card Grid Shimmer
export const CardGridShimmer = ({ columns = 3, count = 6 }: { columns?: number; count?: number }) => (
  <div className={`grid gap-6 ${columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-purple-100/50 shadow-lg">
        <div className={`${shimmerBase} h-12 w-12 mb-4 rounded-xl`} />
        <div className={`${shimmerBase} h-5 w-3/4 mb-3 rounded`} />
        <div className={`${shimmerBase} h-4 w-full mb-2 rounded`} />
        <div className={`${shimmerBase} h-4 w-2/3 rounded`} />
      </div>
    ))}
  </div>
);

// Feature List Shimmer
export const FeatureListShimmer = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
        <div className={`${shimmerBase} h-6 w-6 rounded-full flex-shrink-0`} />
        <div className="flex-1">
          <div className={`${shimmerBase} h-5 w-2/3 mb-2 rounded`} />
          <div className={`${shimmerBase} h-4 w-full rounded`} />
        </div>
      </div>
    ))}
  </div>
);

// Hero Banner Shimmer
export const HeroBannerShimmer = () => (
  <div className="relative bg-gradient-to-br from-gray-50/80 to-purple-50/80 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <div className={`${shimmerBase} h-4 w-40 mx-auto mb-6 rounded-full`} />
      <div className={`${shimmerBase} h-20 w-4/5 mx-auto mb-6 rounded`} />
      <div className={`${shimmerBase} h-6 w-3/4 mx-auto mb-8 rounded`} />
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <div className={`${shimmerBase} h-12 w-48 rounded`} />
        <div className={`${shimmerBase} h-12 w-48 rounded`} />
      </div>
    </div>
  </div>
);

// Table Shimmer
export const TableShimmer = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-4 px-6">
              <div className={`${shimmerBase} h-5 w-24 rounded`} />
            </th>
            {[...Array(3)].map((_, i) => (
              <th key={i} className="text-center py-4 px-6">
                <div className={`${shimmerBase} h-5 w-20 mx-auto rounded`} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-100">
              <td className="py-4 px-6">
                <div className={`${shimmerBase} h-4 w-32 rounded`} />
              </td>
              {[...Array(3)].map((_, colIndex) => (
                <td key={colIndex} className="py-4 px-6 text-center">
                  <div className={`${shimmerBase} h-4 w-8 mx-auto rounded`} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// FAQ Shimmer
export const FAQShimmer = () => (
  <div className="space-y-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="border border-purple-100/50 rounded-lg p-6 bg-white/80 backdrop-blur-sm">
        <div className={`${shimmerBase} h-5 w-3/4 mb-4 rounded`} />
        <div className={`${shimmerBase} h-4 w-full mb-2 rounded`} />
        <div className={`${shimmerBase} h-4 w-2/3 rounded`} />
      </div>
    ))}
  </div>
);

// Full Page Shimmer (combines multiple sections)
export const FullPageShimmer = () => (
  <div className="min-h-screen bg-white">
    <PageHeaderShimmer />
    <ContentSectionShimmer />
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className={`${shimmerBase} h-10 w-2/3 mx-auto mb-4 rounded`} />
          <div className={`${shimmerBase} h-5 w-1/2 mx-auto rounded`} />
        </div>
        <CardGridShimmer columns={2} count={4} />
      </div>
    </div>
  </div>
);

// Enhanced CSS animation for shimmer effect
export const ShimmerStyles = () => (
  <style jsx global>{`
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
    
    .shimmer-animate {
      animation: shimmer 2s ease-in-out infinite;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
    }
  `}</style>
);