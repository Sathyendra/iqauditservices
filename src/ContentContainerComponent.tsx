import "./ContentContainerComponent.css"
import {  StarIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WhoWeAre from "./WhoWeAre";
import { useNavigate } from 'react-router-dom';
import RollingWords from "./RollingWords";
import FooterComponent from "./components/footer/FooterComponent";

import { blogs, features, services, words, testimonials } from "./data/json";

const ContentContainerComponent = () => {
  const navigate = useNavigate();

  const gotoPage = (serviceName:any) => () => {
    console.log(`Navigating to page for service: ${serviceName}`);
    navigate(`/services/${encodeURIComponent(serviceName)}`); 
  }
    return (
      <>
      <RollingWords words={words} />
    <div className="content-wrapper">  
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-yellow-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-yellow-600/10 ring-yellow-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-4">
                <div className="mx-auto max-w-7xl lg:text-center">
                  <h2 className="mb-12 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-12 sm:w-4/5">
                    <span className="text-yellow-600">Quality-Led Audit Consultancy</span> <div className="mt-4">Ensuring Excellence, Every Step of the Way.</div>
                  </h2>
                
                <p className="text-gray-600">We are a professionally passionate team of auditors dedicated to delivering the best IQ audit services.  
                Our thriving quality culture brings Quality by Intelligence, Quality as a Habit, Quality in Every Step, and Quality Very First Time to your organization.</p>
                </div>
            </figure>
        </div>
      <div className="text-center py-4 mt-8">
        <a href="#our_services" className="inline-block rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700">Our Audit Services</a>
      </div>
      
    </section>
    <WhoWeAre />

    <div className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold text-gray-800">Trusted by the UK's best teams</h2>
            <div className="mx-auto mt-24 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
            </div>
        </div>
    </div>

    <section className="py-16 services-section" id="our_services ">
      <div className="max-w-6xl mx-auto text-center dotted-bg">

    <section className="container mx-auto px-12 py-12 ">
      <h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-20 sm:w-4/5 sm:text-3xl">
        <span className="text-red-700">Our Services</span> We help businesses enhance quality, compliance, and efficiency.
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(({ imageUrl, title, description, href }, index) => (
          <div
            className=" p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            key={index} onClick={gotoPage(title)}
          >
            <div className="w-full text-center">
              <img
                alt={title}
                className="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
                src={imageUrl}
              />
              <h2 className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                {title}
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                {description}
              </p>
            </div>
            {href && (
              <div className="text-center">
                <a
                  className="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-red-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
                  href={href}
                >
                  Read more{' '}
                  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" className="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4"></path></svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      </div>
    </section>

    <section className="container mx-auto px-8 py-12 text-center sm:px-12">
      <h1 className="mb-12 text-4xl font-extrabold leading-tight dark:text-slate-50 sm:text-3xl">
        Need a Quality Audit? <span className="text-yellow-600">We are here to help!</span>
      </h1>
      <p className="mb-12 leading-relaxed text-slate-700 dark:text-slate-400">
       call us at <a href="tel:+441234567890" className="text-gray-600 hover:underline">+44 7527241908</a> or email us at <a href="mailto:enquiries@iqauditservices.com" className="text-gray-600 hover:underline">
        enquiries@iqauditservices.com</a>
      </p>
      
    </section>

    <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-20">
          <h2 className="mb-2 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-2 sm:w-4/5 text-gray-900">
            Voices of Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our satisfied clients transforming their businesses
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-2xl p-8 h-full flex flex-col relative overflow-hidden "
              >
                <div className="absolute top-0 right-0 text-red-100/50 text-9xl -mt-6 -mr-4">
                  <StarIcon className="w-24 h-24" />
                </div>
                
                <div className="flex items-center gap-4 mb-6 z-10">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-700 p-1.5 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-8 flex-1">
                  <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>

<div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-lg/8 text-xl text-gray-600  font-semibold">Integrity, excellence, collaboration and accountability are intrinsic part of our core culture. </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-yellow-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
        
    
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest News</h2>
          <p className="mt-4 text-lg text-gray-600">Insights and updates from our area</p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    {blog.category}
                  </span>
                  <time className="text-sm text-gray-500">{blog.date}</time>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                <a 
                  href={blog.readMore} target="_blank" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
          <FooterComponent />
    </div>
    </>

    )
}
export default ContentContainerComponent;