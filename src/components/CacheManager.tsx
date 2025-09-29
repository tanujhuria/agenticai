// Cache Manager for storing and retrieving page data
export interface CacheItem {
  data: any;
  timestamp: number;
  expiry: number;
}

export class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, CacheItem> = new Map();
  private readonly DEFAULT_EXPIRY = 5 * 60 * 1000; // 5 minutes

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  // Set cache with optional expiry time
  set(key: string, data: any, expiryMs?: number): void {
    const expiry = expiryMs || this.DEFAULT_EXPIRY;
    const cacheItem: CacheItem = {
      data,
      timestamp: Date.now(),
      expiry: Date.now() + expiry
    };
    
    this.cache.set(key, cacheItem);
    
    // Also store in localStorage for persistence
    try {
      localStorage.setItem(`agentic_cache_${key}`, JSON.stringify(cacheItem));
    } catch (error) {
      console.warn('Failed to store in localStorage:', error);
    }
  }

  // Get cache item
  get(key: string): any | null {
    // Check memory cache first
    let cacheItem = this.cache.get(key);
    
    // If not in memory, check localStorage
    if (!cacheItem) {
      try {
        const stored = localStorage.getItem(`agentic_cache_${key}`);
        if (stored) {
          cacheItem = JSON.parse(stored);
          if (cacheItem) {
            this.cache.set(key, cacheItem);
          }
        }
      } catch (error) {
        console.warn('Failed to retrieve from localStorage:', error);
        return null;
      }
    }

    if (!cacheItem) {
      return null;
    }

    // Check if expired
    if (Date.now() > cacheItem.expiry) {
      this.delete(key);
      return null;
    }

    return cacheItem.data;
  }

  // Delete cache item
  delete(key: string): void {
    this.cache.delete(key);
    try {
      localStorage.removeItem(`agentic_cache_${key}`);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  }

  // Clear all cache
  clear(): void {
    this.cache.clear();
    try {
      // Clear all AgenticView cache items from localStorage
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('agentic_cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  }

  // Check if cache exists and is valid
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  // Get cache info
  getInfo(key: string): { exists: boolean; age?: number; remaining?: number } {
    const cacheItem = this.cache.get(key);
    if (!cacheItem) {
      return { exists: false };
    }

    const now = Date.now();
    const age = now - cacheItem.timestamp;
    const remaining = cacheItem.expiry - now;

    return {
      exists: true,
      age,
      remaining: Math.max(0, remaining)
    };
  }
}

// React Hook for using cache
export const useCache = (key: string) => {
  const cache = CacheManager.getInstance();
  
  const setCacheData = (data: any, expiryMs?: number) => {
    cache.set(key, data, expiryMs);
  };

  const getCacheData = () => {
    return cache.get(key);
  };

  const clearCacheData = () => {
    cache.delete(key);
  };

  const hasCacheData = () => {
    return cache.has(key);
  };

  return {
    setCacheData,
    getCacheData,
    clearCacheData,
    hasCacheData
  };
};