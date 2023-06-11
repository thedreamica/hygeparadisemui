export default function myImageLoader({ src, width, quality }) {
  return `https://imgur.com/${src}?w=${width}&q=${quality || 75}`;
}
