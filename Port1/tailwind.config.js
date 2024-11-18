/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  backdropBlur: {
			'custom': '4px',  // Add your desired blur value here (e.g., '5px', '10px', etc.)
		  },
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

