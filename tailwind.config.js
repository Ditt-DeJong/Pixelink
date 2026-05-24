/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep':     'var(--bg-primary)',
        'bg-secondary':'var(--bg-secondary)',
        'surface':     'var(--bg-surface)',
        'bg-card':     'var(--bg-card)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'accent':      'var(--accent)',
        'accent-warm': 'var(--accent-warm)',
        'accent-dim':  'var(--accent-dim)',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif:   ['Fraunces', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      spacing: {
        '2xs': 'var(--space-2xs)',
        'xs':  'var(--space-xs)',
        'sm':  'var(--space-sm)',
        'md':  'var(--space-md)',
        'lg':  'var(--space-lg)',
        'xl':  'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
      },
      transitionTimingFunction: {
        'out-expo': 'var(--ease-out-expo)',
        'out-quart': 'var(--ease-out-quart)',
        'spring': 'var(--ease-spring)',
      }
    },
  },
  plugins: [],
}
