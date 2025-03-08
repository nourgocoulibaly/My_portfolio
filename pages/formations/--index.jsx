import Color from '../../components/utils/page.colors.util'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

// Composants
import CourseCard from '../../components/sections/formations/CourseCard'
import SearchBar from '../../components/sections/formations/SearchBar'
import FilterBar from '../../components/sections/formations/FilterBar'

// Données et styles
import colors from '../../content/case-studies/_colors.json'
import styles from '../../styles/sections/formations/index.module.scss'

export default function Formations({ courses }) {
	const [searchQuery, setSearchQuery] = useState('')
	const [activeFilter, setActiveFilter] = useState('all')

	// Fonction de filtrage des cours
	const filteredCourses = useMemo(() => {
		return courses
			.filter(course => 
				course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				course.description.toLowerCase().includes(searchQuery.toLowerCase())
			)
			.filter(course => 
				activeFilter === 'all' ? true : course.category === activeFilter
			)
	}, [courses, searchQuery, activeFilter])

	return (
		<div className={styles.formationsContainer}>
			<Color colors={colors} />
			
			{/* En-tête */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className={styles.header}
			>
				<h1>Formations disponibles</h1>
				<p>Développez vos compétences avec nos cours en ligne</p>
			</motion.div>

			{/* Barre de recherche et filtres */}
			<div className={styles.toolsContainer}>
				<SearchBar 
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<FilterBar 
					activeFilter={activeFilter}
					onFilterChange={setActiveFilter}
				/>
			</div>

			{/* Grille des cours */}
			<motion.div 
				className={styles.coursesGrid}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				{filteredCourses.length > 0 ? (
					filteredCourses.map(course => (
						<CourseCard 
							key={course.id}
							{...course}
						/>
					))
				) : (
					<p className="text-center col-span-full text-gray-500">
						Aucune formation ne correspond à votre recherche
					</p>
				)}
			</motion.div>
		</div>
	)
}

// Récupération des données des cours (à implémenter)
export async function getStaticProps() {
	return {
		props: {
			courses: [] // À remplir avec les vraies données
		}
	}
}