import { render, screen } from '@testing-library/react'
import Hero from '../../../components/sections/index/hero'
import '@testing-library/jest-dom'

describe('Hero section parts', () => {

	it('renders main heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /Nourgo Coulibaly\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

	it('renders sub heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /Je conçois et construis des expériences qui ont du sens\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

})