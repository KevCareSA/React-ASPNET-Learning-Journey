# 🎨 Embedded Elements (JSX)

Elements that embed external content, media, graphics, and interactive resources into your React application. These handle images, videos, audio, iframes, canvas graphics, and external content integration.

---

## 🗺️ Complete Overview

```
EMBEDDED ELEMENTS
│
├── Media Display
│     ├── <img>              → images
│     ├── <video>            → video playback
│     ├── <audio>            → audio playback
│     └── <track>            → subtitle/caption tracks
│
├── Responsive Media
│     ├── <picture>          → responsive image container
│     └── <source>           → media source variations
│
├── External Content
│     ├── <iframe>           → embedded web pages
│     ├── <embed>            → embedded plugins
│     ├── <object>           → embedded objects
│     └── <param>            → object parameters
│
└── Graphics & Drawing
      ├── <canvas>           → bitmap drawing surface
      ├── <map>              → image map container
      └── <area>             → clickable image regions
```

---

## 📸 1. Media Display

### `<img>` — Images

**What it is:**
Embeds an image into the document. It's a self-closing element that displays static images.

**Why use it:**
- Display photos, graphics, icons
- Essential for visual content
- SEO through alt text
- Accessibility through descriptions
- Fast, simple image display

**Critical attributes:**
- `src` — Image URL (required)
- `alt` — Alternative text description (required for accessibility)
- `width` — Image width
- `height` — Image height
- `loading` — Lazy loading behavior ("lazy" or "eager")

**Real JSX Examples:**

```jsx
// Basic image
<img 
  src="/images/logo.png" 
  alt="Company logo" 
/>

// Image with dimensions (prevents layout shift)
<img 
  src="/images/hero.jpg" 
  alt="Hero section background"
  width={1200}
  height={600}
/>

// Lazy-loaded image
<img 
  src="/images/product.jpg" 
  alt="Product showcase"
  loading="lazy"
  className="rounded-lg shadow-md"
/>

// Image with error handling
<img 
  src="/images/avatar.jpg" 
  alt="User avatar"
  onError={(e) => {
    e.target.src = '/images/default-avatar.png';
  }}
/>
```

**Line-by-line breakdown:**
```jsx
<img                                    // Self-closing image element
  src="/images/product.jpg"             // Path to image file
  alt="Product showcase"                // Description for screen readers
  loading="lazy"                        // Load when near viewport
  className="rounded-lg shadow-md"      // Tailwind styling
/>                                      // Self-closing in JSX
```

**Best practices:**
- **Always include `alt` text** — critical for accessibility and SEO
- Specify `width` and `height` to prevent layout shift
- Use `loading="lazy"` for below-the-fold images
- Optimize image sizes for web (compress, use appropriate formats)
- Use descriptive alt text (not "image" or "photo")

**When to use:**
- Static images
- Product photos
- User avatars
- Icons and graphics
- Decorative images

**Common formats:**
- `.jpg`/`.jpeg` — Photos, complex images
- `.png` — Transparency, graphics
- `.gif` — Simple animations
- `.webp` — Modern, efficient format
- `.svg` — Vector graphics, icons

---

### `<video>` — Video Playback

**What it is:**
Embeds video content with native browser controls and playback.

**Why use it:**
- Self-hosted video playback
- Custom video players
- Background videos
- Tutorial/demo videos
- Full control over playback

**Critical attributes:**
- `src` — Video file URL
- `controls` — Show playback controls
- `autoplay` — Auto-start playback
- `loop` — Repeat video
- `muted` — Start muted
- `poster` — Thumbnail before playback
- `width`, `height` — Dimensions

**Real JSX Examples:**

```jsx
// Basic video with controls
<video 
  src="/videos/demo.mp4" 
  controls
  width={640}
  height={360}
>
  Your browser does not support video playback.
</video>

// Auto-playing background video (muted required)
<video 
  src="/videos/hero-bg.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>

// Video with multiple formats
<video controls width={800} poster="/images/video-poster.jpg">
  <source src="/videos/movie.mp4" type="video/mp4" />
  <source src="/videos/movie.webm" type="video/webm" />
  <source src="/videos/movie.ogg" type="video/ogg" />
  Your browser doesn't support HTML5 video.
</video>

// Video with event handlers
<video 
  src="/videos/tutorial.mp4"
  controls
  onPlay={() => console.log('Video started')}
  onPause={() => console.log('Video paused')}
  onEnded={() => console.log('Video ended')}
/>
```

**Line-by-line breakdown:**
```jsx
<video                                  // Video container element
  src="/videos/demo.mp4"                // Path to video file
  controls                              // Show play/pause/volume controls
  width={640}                           // Player width
  height={360}                          // Player height
>
  Your browser does not support video playback.  // Fallback text
</video>
```

**Best practices:**
- **Always include fallback text** for unsupported browsers
- Use `muted` with `autoplay` (browsers block unmuted autoplay)
- Add `playsInline` for mobile devices
- Provide multiple formats for compatibility
- Include `poster` image for better UX
- Optimize video files (compress, use appropriate codecs)

**Common attributes combination:**

```jsx
// Background video pattern
autoPlay loop muted playsInline

// User-controlled video pattern
controls poster="/thumb.jpg"

// Auto-play with user control
autoPlay muted controls
```

**When to use:**
- Tutorial videos
- Product demos
- Background videos
- Self-hosted content
- Custom video players

**Common formats:**
- `.mp4` (H.264) — Best compatibility
- `.webm` — Modern, efficient
- `.ogg` — Open source alternative

---

### `<audio>` — Audio Playback

**What it is:**
Embeds audio content with native browser playback controls.

**Why use it:**
- Music players
- Podcasts
- Sound effects
- Audio tutorials
- Voice recordings

**Critical attributes:**
- `src` — Audio file URL
- `controls` — Show playback controls
- `autoplay` — Auto-start playback
- `loop` — Repeat audio
- `muted` — Start muted
- `preload` — How to preload ("none", "metadata", "auto")

**Real JSX Examples:**

```jsx
// Basic audio with controls
<audio src="/audio/podcast.mp3" controls>
  Your browser does not support audio playback.
</audio>

// Audio with multiple formats
<audio controls>
  <source src="/audio/song.mp3" type="audio/mpeg" />
  <source src="/audio/song.ogg" type="audio/ogg" />
  <source src="/audio/song.wav" type="audio/wav" />
  Your browser doesn't support HTML5 audio.
</audio>

// Auto-playing background music (muted)
<audio 
  src="/audio/background.mp3"
  autoPlay
  loop
  muted
/>

// Audio with preload control
<audio 
  src="/audio/large-file.mp3"
  controls
  preload="metadata"
  onLoadedMetadata={(e) => {
    console.log('Duration:', e.target.duration);
  }}
/>
```

**Line-by-line breakdown:**
```jsx
<audio                                  // Audio element
  src="/audio/podcast.mp3"              // Path to audio file
  controls                              // Show playback controls
>
  Your browser does not support audio playback.  // Fallback
</audio>
```

**Best practices:**
- Include fallback text
- Use `controls` unless building custom UI
- Provide multiple formats for compatibility
- Use `preload="metadata"` for large files
- Don't autoplay with sound (poor UX)

**Preload options:**
- `none` — Don't preload
- `metadata` — Preload only duration/metadata
- `auto` — Preload entire file

**When to use:**
- Music players
- Podcast players
- Sound effects
- Audio tutorials
- Voice messages

**Common formats:**
- `.mp3` — Best compatibility
- `.ogg` — Good quality, open format
- `.wav` — Uncompressed, large files
- `.m4a` — Apple devices

---

### `<track>` — Subtitle/Caption Tracks

**What it is:**
Specifies timed text tracks for `<video>` and `<audio>` elements (subtitles, captions, descriptions).

**Why use it:**
- Accessibility (deaf/hard of hearing)
- Multiple language support
- Subtitles
- Chapter markers
- Descriptions for screen readers

**Critical attributes:**
- `src` — Path to WebVTT file
- `kind` — Type of track ("subtitles", "captions", "descriptions", "chapters", "metadata")
- `srclang` — Language code
- `label` — Human-readable title
- `default` — Default track to show

**Real JSX Examples:**

```jsx
// Video with English and Spanish subtitles
<video src="/videos/movie.mp4" controls>
  <track 
    kind="subtitles" 
    src="/subtitles/en.vtt" 
    srclang="en" 
    label="English"
    default
  />
  <track 
    kind="subtitles" 
    src="/subtitles/es.vtt" 
    srclang="es" 
    label="Spanish"
  />
</video>

// Video with captions and chapters
<video src="/videos/tutorial.mp4" controls>
  <track 
    kind="captions" 
    src="/captions/en.vtt" 
    srclang="en" 
    label="English Captions"
    default
  />
  <track 
    kind="chapters" 
    src="/chapters.vtt" 
    srclang="en" 
    label="Chapters"
  />
</video>

// Audio with descriptions
<audio src="/audio/podcast.mp3" controls>
  <track 
    kind="descriptions" 
    src="/descriptions.vtt" 
    srclang="en"
  />
</audio>
```

**Line-by-line breakdown:**
```jsx
<track                                  // Track element (self-closing)
  kind="subtitles"                      // Type of text track
  src="/subtitles/en.vtt"               // Path to WebVTT file
  srclang="en"                          // Language code (ISO 639-1)
  label="English"                       // Display name in UI
  default                               // Show this track by default
/>
```

**Track kinds:**
- `subtitles` — Translation of dialogue
- `captions` — Transcription + sound effects (for deaf users)
- `descriptions` — Audio descriptions of visual content
- `chapters` — Chapter titles for navigation
- `metadata` — Not visible, for scripts

**WebVTT file format example:**
```
WEBVTT

00:00:00.000 --> 00:00:05.000
Hello, welcome to the tutorial.

00:00:05.000 --> 00:00:10.000
Today we'll learn about React.
```

**When to use:**
- Making videos accessible
- International content
- Educational videos
- Legal compliance (ADA, WCAG)
- Better user experience

**Best practices:**
- Always include captions for accessibility
- Use `kind="captions"` for accessibility (not subtitles)
- Mark one track as `default`
- Provide multiple languages when possible

---

## 🖼️ 2. Responsive Media

### `<picture>` — Responsive Image Container

**What it is:**
A wrapper element that provides multiple image sources for responsive design. The browser selects the best image based on viewport, resolution, and format support.

**Why use it:**
- Serve different images for different screen sizes
- Art direction (different crops for mobile/desktop)
- Format optimization (WebP with fallbacks)
- Performance optimization
- Pixel density support (retina displays)

**How it works:**
The browser evaluates `<source>` elements in order and uses the first match. Falls back to `<img>` if no match.

**Real JSX Examples:**

```jsx
// Responsive images for different screen sizes
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcSet="/images/hero-large.jpg" 
  />
  <source 
    media="(min-width: 768px)" 
    srcSet="/images/hero-medium.jpg" 
  />
  <img 
    src="/images/hero-small.jpg" 
    alt="Hero image"
  />
</picture>

// Modern format with fallback
<picture>
  <source 
    srcSet="/images/photo.webp" 
    type="image/webp" 
  />
  <source 
    srcSet="/images/photo.avif" 
    type="image/avif" 
  />
  <img 
    src="/images/photo.jpg" 
    alt="Product photo"
  />
</picture>

// Art direction (different crops)
<picture>
  <source 
    media="(min-width: 768px)" 
    srcSet="/images/landscape.jpg" 
  />
  <img 
    src="/images/portrait.jpg" 
    alt="Team photo"
    className="w-full"
  />
</picture>

// High DPI (retina) support
<picture>
  <source 
    srcSet="/images/logo@2x.png 2x, /images/logo@1x.png 1x"
  />
  <img 
    src="/images/logo@1x.png" 
    alt="Company logo"
  />
</picture>
```

**Line-by-line breakdown:**
```jsx
<picture>                               // Responsive image container
  <source                               // First option to try
    media="(min-width: 1024px)"         // Media query condition
    srcSet="/images/hero-large.jpg"     // Image for this condition
  />
  <source                               // Second option
    media="(min-width: 768px)"          // Tablet breakpoint
    srcSet="/images/hero-medium.jpg"    // Medium image
  />
  <img                                  // Fallback (always required)
    src="/images/hero-small.jpg"        // Default/mobile image
    alt="Hero image"                    // Accessibility text
  />
</picture>
```

**Best practices:**
- **Always include `<img>` as fallback** (required)
- Order `<source>` from most specific to least specific
- Use for significant image differences, not minor optimizations
- Combine with `srcSet` for pixel density
- Test in different browsers

**Common use cases:**
1. **Art direction:** Different crops for mobile vs desktop
2. **Format optimization:** WebP/AVIF with JPEG fallback
3. **Bandwidth optimization:** Smaller images for mobile
4. **Retina support:** 2x images for high-DPI screens

**When to use:**
- Different image compositions for different screens
- Modern format support with fallbacks
- Significant file size differences
- Art direction changes

**When NOT to use:**
- Simple responsive sizing (use `srcSet` on `<img>` instead)
- Minor variations (CSS handles it better)

---

### `<source>` — Media Source Variations

**What it is:**
Specifies multiple media resources for `<picture>`, `<video>`, or `<audio>` elements. Allows browsers to choose the best option.

**Why use it:**
- Multiple video/audio formats
- Responsive image sources
- Format fallbacks
- Resolution variations
- Bandwidth optimization

**Critical attributes:**
- `srcSet` — Image sources (used in `<picture>`)
- `src` — Media file URL (used in `<video>`/`<audio>`)
- `type` — MIME type
- `media` — Media query
- `sizes` — Image sizes for different viewports

**Real JSX Examples:**

```jsx
// Multiple video formats
<video controls>
  <source src="/videos/movie.mp4" type="video/mp4" />
  <source src="/videos/movie.webm" type="video/webm" />
  <source src="/videos/movie.ogg" type="video/ogg" />
</video>

// Responsive video sources
<video controls>
  <source 
    src="/videos/4k.mp4" 
    type="video/mp4"
    media="(min-width: 1920px)"
  />
  <source 
    src="/videos/1080p.mp4" 
    type="video/mp4"
    media="(min-width: 1280px)"
  />
  <source 
    src="/videos/720p.mp4" 
    type="video/mp4"
  />
</video>

// Multiple audio formats
<audio controls>
  <source src="/audio/song.mp3" type="audio/mpeg" />
  <source src="/audio/song.ogg" type="audio/ogg" />
  <source src="/audio/song.wav" type="audio/wav" />
</audio>

// In picture element (already shown above)
<picture>
  <source 
    srcSet="/images/photo.webp" 
    type="image/webp" 
  />
  <img src="/images/photo.jpg" alt="Photo" />
</picture>
```

**Line-by-line breakdown:**
```jsx
<source                                 // Media source option
  src="/videos/movie.webm"              // File path
  type="video/webm"                     // MIME type for browser
/>
```

**Common MIME types:**

**Video:**
- `video/mp4` — MP4 files
- `video/webm` — WebM files
- `video/ogg` — Ogg files

**Audio:**
- `audio/mpeg` — MP3 files
- `audio/ogg` — OGG files
- `audio/wav` — WAV files

**Images:**
- `image/webp` — WebP format
- `image/avif` — AVIF format
- `image/jpeg` — JPEG format

**Best practices:**
- List sources in preferred order
- Always include fallback format
- Specify `type` attribute (helps browser skip unsupported formats)
- Use media queries for responsive media
- Consider file sizes and bandwidth

**When to use:**
- Format compatibility
- Responsive media delivery
- Progressive enhancement
- Bandwidth optimization

---

## 🌐 3. External Content

### `<iframe>` — Embedded Web Pages

**What it is:**
Embeds another HTML page within the current page. Creates an independent browsing context.

**Why use it:**
- Embed YouTube/Vimeo videos
- Google Maps
- Third-party widgets
- Payment forms
- External content isolation

**Critical attributes:**
- `src` — URL of page to embed
- `width`, `height` — Dimensions
- `title` — Accessibility description (required)
- `sandbox` — Security restrictions
- `allow` — Feature permissions
- `loading` — Lazy loading

**⚠️ Security concerns:**
- **Always use `sandbox`** attribute
- Be careful with untrusted content
- Can execute scripts from external source
- Potential XSS vulnerabilities

**Real JSX Examples:**

```jsx
// YouTube video embed
<iframe 
  width="560" 
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

// Google Maps embed
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Maps location"
/>

// Sandboxed iframe for security
<iframe
  src="https://untrusted-content.com"
  sandbox="allow-scripts allow-same-origin"
  title="External content"
  width="100%"
  height="400"
/>

// Lazy-loaded iframe
<iframe
  src="/embedded-page.html"
  loading="lazy"
  title="Embedded page"
  className="w-full h-96"
/>
```

**Line-by-line breakdown:**
```jsx
<iframe                                 // Inline frame element
  width="560"                           // Frame width
  height="315"                          // Frame height
  src="https://youtube.com/embed/ID"    // Embedded page URL
  title="YouTube video player"          // Accessibility (required!)
  frameBorder="0"                       // Remove border (use CSS instead)
  allow="autoplay; fullscreen"          // Feature permissions
  allowFullScreen                       // Boolean attribute
/>
```

**Sandbox attribute values:**
- `allow-scripts` — Allow JavaScript
- `allow-same-origin` — Allow same-origin access
- `allow-forms` — Allow form submission
- `allow-popups` — Allow popups
- `allow-modals` — Allow modal dialogs
- Empty `sandbox` — Maximum restrictions

**Common allow values:**
- `autoplay` — Allow autoplay
- `fullscreen` — Allow fullscreen
- `camera` — Access camera
- `microphone` — Access microphone
- `geolocation` — Access location

**Best practices:**
- **Always include `title` attribute** (accessibility requirement)
- Use `sandbox` for untrusted content
- Use `loading="lazy"` for below-fold iframes
- Set explicit dimensions to prevent layout shift
- Consider CSP (Content Security Policy) headers

**Common use cases:**
1. **YouTube embeds**
2. **Google Maps**
3. **Payment processors** (Stripe, PayPal)
4. **Social media widgets**
5. **Third-party forms**

**When to use:**
- Embedding third-party content
- Isolating untrusted content
- Video platforms
- Maps and widgets

**When NOT to use:**
- Can be styled with CSS (use HTML instead)
- Need SEO (iframes hurt SEO)
- Performance critical (iframes are heavy)
- Mobile-only sites (iframes problematic on mobile)

---

### `<embed>` — Embedded Plugins

**What it is:**
Embeds external content like PDFs, Flash (deprecated), or browser plugins.

**Why use it:**
- PDF viewers
- Legacy plugin content
- Embedded applications
- External file types

**⚠️ Important note:**
`<embed>` is mostly legacy. Modern alternatives preferred:
- Use `<iframe>` for PDFs
- Use `<video>` for video
- Use `<audio>` for audio
- Flash is dead (removed from browsers)

**Critical attributes:**
- `src` — Resource URL
- `type` — MIME type
- `width`, `height` — Dimensions

**Real JSX Examples:**

```jsx
// PDF embed (iframe preferred)
<embed 
  src="/documents/manual.pdf" 
  type="application/pdf"
  width="100%"
  height="600px"
/>

// Alternative: iframe for PDF (better)
<iframe
  src="/documents/manual.pdf"
  width="100%"
  height="600px"
  title="Product manual"
/>

// SVG embed (img tag preferred)
<embed 
  src="/graphics/diagram.svg" 
  type="image/svg+xml"
  width="500"
  height="400"
/>
```

**When to use:**
- Legacy compatibility only
- Specific plugin requirements
- Usually better alternatives exist

**Modern alternatives:**
- PDF → `<iframe>` or dedicated PDF.js library
- Flash → Convert to HTML5 video
- Audio → `<audio>` element
- Images → `<img>` element

---

### `<object>` — Embedded Objects

**What it is:**
Embeds external resources like PDFs, Flash (deprecated), images, or nested browsing contexts. More flexible than `<embed>` with fallback support.

**Why use it:**
- PDF embedding with fallbacks
- SVG embedding
- Legacy multimedia content
- Nested HTML pages

**Critical attributes:**
- `data` — Resource URL
- `type` — MIME type
- `width`, `height` — Dimensions
- `name` — Reference name

**Real JSX Examples:**

```jsx
// PDF with fallback
<object 
  data="/documents/report.pdf" 
  type="application/pdf"
  width="100%"
  height="600px"
>
  <p>
    Your browser doesn't support PDFs. 
    <a href="/documents/report.pdf">Download the PDF</a>
  </p>
</object>

// SVG object
<object 
  data="/images/logo.svg" 
  type="image/svg+xml"
  width="200"
  height="100"
>
  <img src="/images/logo.png" alt="Company logo" />
</object>

// Nested HTML page
<object 
  data="/widgets/calculator.html"
  width="400"
  height="300"
>
  <p>Calculator widget failed to load.</p>
</object>
```

**Line-by-line breakdown:**
```jsx
<object                                 // Object container
  data="/documents/report.pdf"          // Resource URL
  type="application/pdf"                // MIME type
  width="100%"                          // Object width
  height="600px"                        // Object height
>
  <p>                                   // Fallback content
    <a href="/documents/report.pdf">Download PDF</a>
  </p>
</object>
```

**Best practices:**
- Always provide fallback content
- Specify `type` attribute
- Use semantic alternatives when possible
- Consider accessibility

**When to use:**
- Need fallback content
- Complex embedded resources
- Legacy support

**Modern alternatives preferred:**
- Use `<iframe>` for HTML pages
- Use `<img>` for images
- Use `<video>` for video
- Use dedicated libraries for PDFs

---

### `<param>` — Object Parameters

**What it is:**
Defines parameters for `<object>` elements. Now largely obsolete.

**Why it existed:**
- Configure Flash parameters
- Pass data to plugins
- Configure Java applets

**Real JSX Example (legacy):**

```jsx
<object data="/media/movie.swf" type="application/x-shockwave-flash">
  <param name="autoplay" value="true" />
  <param name="loop" value="false" />
</object>
```

**Modern status:**
- Flash is dead (removed 2020)
- Java applets deprecated
- Rarely needed in modern web development

**When to use:**
- Legacy applications only
- Almost never in modern React

---

## 🎨 4. Graphics & Drawing

### `<canvas>` — Bitmap Drawing Surface

**What it is:**
Provides a drawable region for JavaScript-based graphics, animations, and visualizations. It's a bitmap surface for pixel manipulation.

**Why use it:**
- Games and animations
- Data visualizations
- Image editing
- Custom graphics
- Real-time rendering
- Generative art

**How it works:**
1. Create `<canvas>` element in JSX
2. Get 2D or WebGL context in JavaScript
3. Use Canvas API to draw

**Critical attributes:**
- `width` — Canvas width in pixels (default: 300)
- `height` — Canvas height in pixels (default: 150)
- Note: Set dimensions via attributes, not CSS

**Real JSX Examples:**

```jsx
// Basic canvas setup
import { useEffect, useRef } from 'react';

function DrawingCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Draw a rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 150, 100);
    
    // Draw a circle
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      width={400} 
      height={300}
      className="border border-gray-300"
    />
  );
}

// Interactive drawing
function InteractiveCanvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      className="border cursor-crosshair"
    />
  );
}

// Animation example
function AnimatedCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let x = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'blue';
      ctx.fillRect(x, 50, 50, 50);
      x = (x + 2) % canvas.width;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} width={400} height={200} />;
}
```

**Line-by-line breakdown:**
```jsx
const canvasRef = useRef(null);         // Create ref for canvas

<canvas                                 // Canvas element
  ref={canvasRef}                       // Attach ref for JS access
  width={400}                           // Canvas width (pixels)
  height={300}                          // Canvas height (pixels)
  className="border"                    // Styling
/>

// In useEffect:
const ctx = canvas.getContext('2d');    // Get drawing context
ctx.fillStyle = 'blue';                 // Set fill color
ctx.fillRect(10, 10, 150, 100);         // Draw rectangle
```

**Canvas contexts:**
- `2d` — 2D drawing API (most common)
- `webgl` — 3D graphics with WebGL
- `webgl2` — WebGL 2.0
- `bitmaprenderer` — Bitmap rendering

**Common Canvas API methods:**

**Shapes:**
- `fillRect(x, y, width, height)` — Filled rectangle
- `strokeRect(x, y, width, height)` — Outline rectangle
- `clearRect(x, y, width, height)` — Clear rectangle
- `arc(x, y, radius, startAngle, endAngle)` — Circle/arc

**Paths:**
- `beginPath()` — Start new path
- `moveTo(x, y)` — Move without drawing
- `lineTo(x, y)` — Draw line
- `closePath()` — Close path
- `stroke()` — Outline path
- `fill()` — Fill path

**Styling:**
- `fillStyle` — Fill color
- `strokeStyle` — Stroke color
- `lineWidth` — Line thickness
- `font` — Text font

**Text:**
- `fillText(text, x, y)` — Draw filled text
- `strokeText(text, x, y)` — Draw outlined text

**Images:**
- `drawImage(img, x, y)` — Draw image

**Best practices:**
- Set `width` and `height` via attributes, not CSS
- Use `useRef` to access canvas in React
- Clear canvas before redrawing
- Use `requestAnimationFrame` for animations
- Consider performance (canvas can be expensive)

**When to use:**
- Games
- Charts and graphs
- Image manipulation
- Signatures
- Generative art
- Real-time visualizations

**Popular libraries:**
- Chart.js — Charts
- Fabric.js — Canvas framework
- Konva — 2D graphics
- Three.js — 3D (WebGL)
- p5.js — Creative coding

---

### `<map>` — Image Map Container

**What it is:**
Defines a client-side image map with clickable regions. Used with `<area>` elements to create interactive images.

**Why use it:**
- Interactive diagrams
- Floor plans
- Geographic maps
- Infographics with clickable regions
- Product images with hotspots

**Critical attributes:**
- `name` — Map identifier (links to `<img usemap>`)

**How it works:**
1. Create `<img>` with `usemap` attribute
2. Create `<map>` with matching `name`
3. Define clickable `<area>` regions

**Real JSX Examples:**

```jsx
// Interactive product image
<div>
  <img 
    src="/images/product.jpg" 
    alt="Product overview"
    useMap="#product-map"
    width={800}
    height={600}
  />
  
  <map name="product-map">
    <area 
      shape="rect" 
      coords="50,50,200,150"
      href="/features/camera"
      alt="Camera feature"
    />
    <area 
      shape="circle" 
      coords="400,300,50"
      href="/features/screen"
      alt="Screen specifications"
    />
    <area 
      shape="poly" 
      coords="600,100,700,100,650,200"
      href="/features/buttons"
      alt="Button layout"
    />
  </map>
</div>

// Interactive floor plan
<div>
  <img 
    src="/images/floor-plan.png" 
    alt="Office floor plan"
    useMap="#floor-map"
  />
  
  <map name="floor-map">
    <area 
      shape="rect" 
      coords="10,10,100,80"
      href="/rooms/lobby"
      alt="Lobby"
      title="Main Lobby"
    />
    <area 
      shape="rect" 
      coords="120,10,220,80"
      href="/rooms/conference"
      alt="Conference Room"
      title="Conference Room A"
    />
  </map>
</div>
```

**Line-by-line breakdown:**
```jsx
<img                                    // Image to make interactive
  src="/images/product.jpg"             // Image source
  alt="Product overview"                // Accessibility
  useMap="#product-map"                 // Link to map (with #)
/>

<map name="product-map">                // Map definition (no #)
  // Areas defined here
</map>
```

**Best practices:**
- Match `useMap="#name"` with `name="name"` (note the `#`)
- Provide `alt` text for each area
- Consider mobile responsiveness (image maps don't scale well)
- Modern alternative: Use positioned clickable divs with CSS

**When to use:**
- Interactive diagrams
- Floor plans
- Legacy image hotspots

**When NOT to use:**
- Responsive designs (doesn't scale)
- Complex interactions (use SVG or divs instead)
- Accessibility critical (consider alternatives)

---

### `<area>` — Clickable Image Regions

**What it is:**
Defines a clickable area within an image map (`<map>`).

**Why use it:**
- Create hotspots on images
- Link different image regions
- Interactive diagrams

**Critical attributes:**
- `shape` — Shape type ("rect", "circle", "poly", "default")
- `coords` — Coordinates defining the shape
- `href` — Link destination
- `alt` — Alternative text (required)
- `target` — Link target
- `download` — Download link

**Shape types and coords:**

**Rectangle (`shape="rect"`):**
- `coords="x1,y1,x2,y2"`
- Top-left corner (x1,y1) to bottom-right corner (x2,y2)

**Circle (`shape="circle"`):**
- `coords="x,y,radius"`
- Center point (x,y) and radius

**Polygon (`shape="poly"`):**
- `coords="x1,y1,x2,y2,x3,y3,..."`
- Series of x,y coordinates forming a polygon

**Default (`shape="default"`):**
- No coords needed
- Covers entire image (catch-all)

**Real JSX Examples:**

```jsx
// Rectangle area
<area 
  shape="rect" 
  coords="0,0,100,100"
  href="/section-1"
  alt="Top left section"
/>

// Circle area
<area 
  shape="circle" 
  coords="200,200,50"
  href="/center-feature"
  alt="Center feature"
/>

// Polygon area (triangle)
<area 
  shape="poly" 
  coords="300,100,400,100,350,200"
  href="/triangle-section"
  alt="Triangle section"
/>

// Default (catch-all)
<area 
  shape="default"
  href="/home"
  alt="Return to home"
/>

// With event handlers
<area 
  shape="rect" 
  coords="50,50,150,150"
  href="/product"
  alt="Product details"
  onMouseOver={(e) => console.log('Hover')}
  onClick={(e) => {
    e.preventDefault();
    // Custom handler
  }}
/>
```

**Line-by-line breakdown:**
```jsx
<area                                   // Clickable region (self-closing)
  shape="rect"                          // Shape type
  coords="0,0,100,100"                  // x1,y1,x2,y2 for rectangle
  href="/section-1"                     // Link destination
  alt="Top left section"                // Required alt text
/>
```

**Finding coordinates:**
Use browser dev tools or online image map generators to find coordinates easily.

**Best practices:**
- Always include `alt` attribute
- Test on different screen sizes
- Consider using SVG for responsive interactivity
- Don't overlap areas (first match wins)

**When to use:**
- Simple image hotspots
- Legacy interactive images
- Fixed-size diagrams

**Modern alternatives:**
- SVG with clickable elements
- Positioned divs with CSS
- Interactive canvas
- React components with absolute positioning

---

## 🎯 Quick Reference Table

| Element | Category | Primary Use | Self-Closing |
|---------|----------|-------------|--------------|
| `<img>` | Media | Static images | ✅ Yes |
| `<video>` | Media | Video playback | ❌ No |
| `<audio>` | Media | Audio playback | ❌ No |
| `<track>` | Media | Subtitles/captions | ✅ Yes |
| `<picture>` | Responsive | Responsive images | ❌ No |
| `<source>` | Responsive | Media alternatives | ✅ Yes |
| `<iframe>` | External | Embedded pages | ❌ No |
| `<embed>` | External | Plugins (legacy) | ✅ Yes |
| `<object>` | External | External objects | ❌ No |
| `<param>` | External | Object params (legacy) | ✅ Yes |
| `<canvas>` | Graphics | Drawing surface | ❌ No |
| `<map>` | Graphics | Image map container | ❌ No |
| `<area>` | Graphics | Clickable regions | ✅ Yes |

---

## 💡 Core Principles

### 1. Always Provide Alternatives
- `alt` text for images
- Fallback content for video/audio
- Fallback `<img>` in `<picture>`
- Fallback content in `<object>`

### 2. Accessibility First
- Meaningful `alt` descriptions
- `title` on iframes
- Captions/subtitles for media
- Keyboard navigation support

### 3. Performance Optimization
- Use `loading="lazy"` for below-fold content
- Optimize file sizes
- Use appropriate formats
- Responsive images for different devices

### 4. Security Awareness
- Sandbox iframes from untrusted sources
- Validate embedded content
- Use CSP headers
- Be cautious with user-generated embeds

### 5. Responsive Design
- Use `<picture>` for art direction
- Provide multiple video resolutions
- Test on various devices
- Consider mobile bandwidth

---

## 🚀 Best Practices Summary

### Images
✅ Always include `alt` text  
✅ Specify `width` and `height`  
✅ Use `loading="lazy"` for below-fold images  
✅ Optimize file sizes  
✅ Use modern formats (WebP, AVIF) with fallbacks  

### Video/Audio
✅ Provide multiple formats  
✅ Include fallback text  
✅ Add captions/subtitles  
✅ Use `muted` with `autoplay`  
✅ Include `poster` image for videos  

### Iframes
✅ Always include `title` attribute  
✅ Use `sandbox` for untrusted content  
✅ Use `loading="lazy"` when appropriate  
✅ Set explicit dimensions  
✅ Consider security implications  

### Canvas
✅ Set dimensions via attributes, not CSS  
✅ Use refs in React  
✅ Provide fallback content  
✅ Clear before redrawing  
✅ Use `requestAnimationFrame` for animations  

### Responsive Media
✅ Use `<picture>` for art direction  
✅ Test on multiple devices  
✅ Optimize for bandwidth  
✅ Consider pixel density  
✅ Always include fallback `<img>`  

---

## 🎨 Common Patterns

### Lazy-Loaded Image
```jsx
<img 
  src="/images/photo.jpg"
  alt="Description"
  loading="lazy"
  width={800}
  height={600}
/>
```

### Responsive Image with Modern Formats
```jsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <source srcSet="/image.avif" type="image/avif" />
  <img src="/image.jpg" alt="Description" />
</picture>
```

### Video with Captions
```jsx
<video src="/video.mp4" controls>
  <track kind="captions" src="/captions.vtt" srclang="en" default />
</video>
```

### Secure iframe
```jsx
<iframe
  src="https://external-site.com"
  sandbox="allow-scripts allow-same-origin"
  title="External content"
/>
```

### Interactive Canvas
```jsx
const canvasRef = useRef(null);

useEffect(() => {
  const ctx = canvasRef.current.getContext('2d');
  // Drawing code
}, []);

<canvas ref={canvasRef} width={400} height={300} />
```
