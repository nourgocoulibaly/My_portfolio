// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="A Propos"
					preTitle="Synopsis"
					subTitle="Avec un ensemble de compétences diversifiées qui comprend la conception UX, la conception d'interface utilisateur, le développement full stack, l'architecture opérationnelle, la conception de systèmes, la photographie et l'image de marque, je suis un professionnel du numérique complet."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/.jpg" alt="Nourgo Coulibaly photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Des softskills qui paient la facture"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="En plus de mon expertise en conception et en technique, j'ai également de solides compétences en leadership, en gestion du temps et en multitâche, affinées grâce à mon expérience en tant que propriétaire d'entreprise / associé directeur, mari et père de deux enfants. En dehors du travail, j'aime rester active grâce à des sports comme le hockey et la planche à neige. J'ai confiance en ma capacité à apporter passion et valeur à n'importe quel projet."
						/>
						<BadgesBlock 
							title="Recherche et planification" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="L'un de mes aspects préférés de la création est la planification de l'architecture d'un projet. Des systèmes de conception à la stratégie de marque, j'aime travailler avec les nombreux points de contact de l'expérience utilisateur."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Recherche Utilisateur', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Stratégie Numérique', 	type: 'fad' },
	{ key: 'window', 			name: 'Conception de Systèmes', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Stratégie Produit', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Stratégie de Marque', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Opérations', 		type: 'fad' },
]