import { motion } from 'framer-motion';
import { UsersIcon, BriefcaseIcon, TrophyIcon } from '@heroicons/react/24/outline';
import AnimatedNumber from './AnimatedNumber'; 

export default function WhoWeAre() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">
            Who we are
            </h2>
            <p className="text-lg text-gray-600">
            We are a professionally passionate team of auditors dedicated to delivering the best IQ audit services.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <UsersIcon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <AnimatedNumber value={10} className="text-4xl font-bold text-gray-900" />
                <p className="text-gray-600 mt-2">Certified Professionals</p>
              </div>
              <div className="text-center">
                <BriefcaseIcon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <AnimatedNumber value={30} className="text-4xl font-bold text-gray-900" />
                <p className="text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div className="text-center">
                <TrophyIcon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <AnimatedNumber value={10} className="text-4xl font-bold text-gray-900" />
                <p className="text-gray-600 mt-2">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 gap-4 h-96"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600" 
                  alt="Office space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" 
                  alt="Team celebration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

