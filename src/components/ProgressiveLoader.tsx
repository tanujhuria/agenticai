import React, { useState, useEffect, ReactNode, Suspense } from 'react';
import { FullPageShimmer, ContentSectionShimmer } from './ShimmerComponents';
import { useCache } from './CacheManager';

interface ProgressiveLoaderProps {
  pageKey: string;
  children: ReactNode;
  shimmerComponent?: ReactNode;
  cacheExpiry?: number;
  showContentImmediately?: boolean;
}

export const ProgressiveLoader: React.FC<ProgressiveLoaderProps> = ({
  pageKey,
  children,
  shimmerComponent = <FullPageShimmer />,
  cacheExpiry = 5 * 60 * 1000, // 5 minutes
  showContentImmediately = false
}) => {
  const [isLoading, setIsLoading] = useState(!showContentImmediately);
  const [showShimmer, setShowShimmer] = useState(true);
  const { hasCacheData, getCacheData, setCacheData } = useCache(pageKey);

  useEffect(() => {
    // Check if we have cached content
    if (hasCacheData()) {
      // Content is cached, show immediately
      setIsLoading(false);
      setShowShimmer(false);
      return;
    }

    // No cache, show shimmer briefly then content
    const shimmerTimer = setTimeout(() => {
      setShowShimmer(false);
    }, 300); // Brief shimmer

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // Cache the page visit
      setCacheData({ loaded: true, timestamp: Date.now() }, cacheExpiry);
    }, 500);

    return () => {
      clearTimeout(shimmerTimer);
      clearTimeout(loadingTimer);
    };
  }, [pageKey, hasCacheData, getCacheData, setCacheData, cacheExpiry]);

  // If we want to show content immediately (for critical pages)
  if (showContentImmediately) {
    return (
      <div className="min-h-screen">
        <Suspense fallback={shimmerComponent}>
          {children}
        </Suspense>
      </div>
    );
  }

  // Progressive loading with shimmer
  return (
    <div className="min-h-screen">
      {showShimmer ? (
        <div className="transition-opacity duration-300">
          {shimmerComponent}
        </div>
      ) : (
        <div 
          className={`transition-all duration-500 ${
            isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <Suspense fallback={<ContentSectionShimmer />}>
            {children}
          </Suspense>
        </div>
      )}
    </div>
  );
};

// Fast loader for critical pages (home, pricing, etc.)
export const FastLoader: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<FullPageShimmer />}>
      <div className="animate-in fade-in-50 duration-300">
        {children}
      </div>
    </Suspense>
  );
};

// Minimal loader for already visited pages
export const MinimalLoader: React.FC<{ children: ReactNode; pageKey: string }> = ({ 
  children, 
  pageKey 
}) => {
  const { hasCacheData } = useCache(pageKey);
  const [showContent, setShowContent] = useState(hasCacheData());

  useEffect(() => {
    if (!showContent) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  if (!showContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Suspense fallback={<ContentSectionShimmer />}>
      <div className="animate-in slide-in-from-bottom-4 duration-300">
        {children}
      </div>
    </Suspense>
  );
};