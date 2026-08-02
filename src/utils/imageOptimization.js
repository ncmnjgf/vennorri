/**
 * Optimizes Cloudinary image URLs by injecting transformation parameters.
 * Automatically adds auto quality (q_auto) and auto format (f_auto, converts to WebP/AVIF).
 * Limits the width to reduce file size significantly for thumbnails.
 *
 * @param {string} url - The original image URL
 * @param {number} width - Maximum width to serve (default 800)
 * @returns {string} - Optimized URL
 */
export const optimizeImage = (url, width = 800) => {
  if (!url || typeof url !== 'string') return '';
  
  if (url.includes('res.cloudinary.com') && url.includes('/upload/')) {
    // If it already has some transformations between upload/ and /v, we can just replace or inject.
    // Standard format: https://res.cloudinary.com/<id>/image/upload/v123456/something.jpg
    // Target format: https://res.cloudinary.com/<id>/image/upload/q_auto,f_auto,w_800/v123456/something.jpg
    
    // Prevent double-injecting if we accidentally process twice or if it already has q_auto
    if (url.includes('q_auto')) return url;

    return url.replace('/upload/', `/upload/q_auto,f_auto,w_${width}/`);
  }
  
  return url;
};
