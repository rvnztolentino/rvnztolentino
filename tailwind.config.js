/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xs: '100px',
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
		'2lg': '1300px',
  		xl: '1440px',
  		'2xl': '1700px',
		'3xl': '2000px',
  		'4xl': '3800px'
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			black: '#0a0a0a',
  			gray: '#6b7280',
  			'dark-gray': '#374151',
  			'light-gray': '#9ca3af',
  			'light-gray-2': '#e5e5e5',
			'light-gray-3': '#f3f4f6',
  			blue: '#2563eb',
			violet: '#691770',
			red: '#e11d48',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'128': '32rem',
  			'144': '36rem',
  			'160': '40rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
			'jdm': "url('/jdm.jpg')"
		},
  	},
  	fontFamily: {
		'open-sans': [
		  'Open Sans',
		  'sans-serif',
		  'Arial',
		  'Helvetica'
		],
		'noto-sans': [
		  'Noto Sans',
		  'sans-serif',
		  'Arial',
		  'Helvetica'
		],
		'playfair-display': [
		  'Playfair Display',
		  'sans-serif',
		  'Arial',
		  'Helvetica'
		],
		'courier-prime': [
		  'Courier Prime',
		  'sans-serif',
		  'Arial',
		  'Helvetica'
		]
	  }	  
  },
  plugins: [require("tailwindcss-animate")],
};
