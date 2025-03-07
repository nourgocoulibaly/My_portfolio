import Navbar from './navbar'
import Footer from './footer'
// import { Analytics } from "@vercel/analytics/react"

export default function Layout({ children }) {
	return (
		<>
		<Navbar />
		<main>{children}</main>
		<Footer />
		</>
	)
}