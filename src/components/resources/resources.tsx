import HeaderComponent from "../../HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import './resources.css';
const benefits: string[] = [
    'Comprehensive training and development programs',
    'Mentorship from industry experts',
    'Competitive salary',
    'Flexible working hours',
    'Opportunities for career advancement',
];

const ResourcesComponent = () => {
    return (
         <div className="services-container">
              <HeaderComponent />
                 <div className="relative w-full h-[480px] md:h-[600px] overflow-hidden">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-[url('/src/assets/careers.jpg')] bg-cover bg-center"
                aria-hidden="true"
              >
                <div className="overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </div>
        
              {/* Content Container */}
              <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Resources
                  </h1>
                  <p className="text-lg md:text-xl mb-8">
                    Latest News, Careers, and Insights
                  </p>
                </div>
              </div>
            </div>
             <section className="container mx-auto flex flex-col items-center px-8 py-12 sm:flex-row-reverse sm:px-12 max-w-6xl">
      <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16 ">
        <img
          alt="Hanging out with friends"
          className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
          src="https://react-tailwind-snippets.vercel.app/images/pexels-ketut-subiyanto-4353618.jpg"
        />
      </div>
      <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
        <h1 className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
          Kick-start your career with us. 
        </h1>
        <p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
          Whether you're fresh out of college or university, nearing graduation, or looking to get ahead with summer work experience. Find out more about what we're looking for, as well as what you'll get from us in return.
        </p>
        <ul className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start benifits-list">
          {benefits.map((benefit, index) => (
            <li className="flex items-end" key={index}>
              <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" className="mr-2 text-orange-300"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"></path></svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* <h2 className="text-3xl font-bold mb-6">Latest News</h2>
                <p className="text-lg mb-8">
                    Stay updated with the latest news and insights from IQ Audit Services.
                </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                    <a href="#" className="text-blue-600 hover:underline">
                        News Article 1
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 hover:underline">
                        News Article 2
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 hover:underline">
                        News Article 3
                    </a>
                </li>   
                </ul> */}
                <h2 className="text-3xl font-bold mt-12 mb-6">Check our job listing</h2>
                <p className="text-lg mb-8">
                    Explore our current job openings and join our team to make a difference in the world of auditing.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                    <li>
                        <a href="#" className="text-blue-600 hover:underline">
                            Job Opening 1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-600 hover:underline">
                            Job Opening 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-600 hover:underline">
                            Job Opening 3
                        </a>
                    </li>               
                </ul>
                {/* <h2 className="text-3xl font-bold mt-12 mb-6">Insights</h2>
                <p className="text-lg mb-8">
                    Explore our insights and thought leadership articles.           
                </p>
                <ul className="list-disc pl-6 space-y-4">           
                    <li>
                        <a href="#" className="text-blue-600 hover:underline">
                            Insight Article 1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-600 hover:underline">
                            Insight Article 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-600 hover:underline">
                            Insight Article 3
                        </a>
                    </li>

                </ul> */}
            </div>
            <FooterComponent />
            </div>
            ) }

export default ResourcesComponent;