import React, { useState, useEffect } from 'react'

const placeholderSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
  <defs>
    <linearGradient id='g' x1='0' x2='1'>
      <stop offset='0' stop-color='#f3f7f9'/>
      <stop offset='1' stop-color='#eef6f2'/>
    </linearGradient>
  </defs>
  <rect fill='url(#g)' width='100%' height='100%'/>
  <g fill='#9aa4a3' font-family='Inter, Arial, sans-serif' text-anchor='middle'>
    <text x='50%' y='48%'>Image not available</text>
  </g>
</svg>`

const placeholderDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(placeholderSVG)}`

export default function ImageWithFallback({ src, alt = '', className = '', style = {} }){
  const [cur, setCur] = useState(src)

  useEffect(() => {
    setCur(src);
  }, [src]);

  return (
    <img
      src={cur}
      alt={alt}
      className={className}
      style={{ ...style, width: '100%' }}
      onError={() => { if(cur !== placeholderDataUri) setCur(placeholderDataUri) }}
      loading="lazy"
    />
  )
}
