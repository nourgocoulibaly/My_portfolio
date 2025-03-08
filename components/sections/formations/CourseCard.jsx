import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CourseCard({ title, description, duration, level, price }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src="/placeholder-course.jpg"
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{duration}</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {level}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{price}€</span>
          <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded">
            En savoir plus
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 