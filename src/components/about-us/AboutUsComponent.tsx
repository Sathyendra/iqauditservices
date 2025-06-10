import "./AboutUsComponent.css"
import HeaderComponent from "../../HeaderComponent";
import MissionVision from "../mission-vision/MissionVisionComponent";
import IQAuditImage from '../../assets/about-page-img.jpg';
import FooterComponent from "../footer/FooterComponent";
import { aboutFeatures } from "../../data/json";


const AboutUsComponent = () => {
    return (
        <>
        <div >
            <HeaderComponent />
        
            <div className="relative w-full h-[480px] md:h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('../../assets/hannah-busing-Zyx1bK9mqmA-unsplash.jpg')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About IQ Audit Services
          </h2>
        </div>
      </div>
    </div>
        </div>
        <div className="about-us-content">
            <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                
                <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
                    iQ Audit Service was founded
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {aboutFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-red-600" />
                        {feature.description}
                        </dt>
                    </div>
                    ))}
                </dl>
                <p className="mt-8">We will be part of your Governance Audits ensuring Quality and Compliance at every step.</p>
                </div>
            </div>
            <img
                alt="Product screenshot"
                src={IQAuditImage}
                className="w-3xl max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
            </div>
        </div>
        </div>  
        <MissionVision /> 
        <div className="py-16 ">
            <div className="container mx-auto px-4 max-w-10xl">
                <div className="">
                    <p className="font-normal text-lg leading-8 text-gray-600 mb-8">We are a quality-led audit consultancy start-up and our professionally passionate team of auditors resonate our mission and work ethics with their relentless efforts to provide the best IQ audit services and our thriving quality culture endeavours to bring quality by intelligence, quality as a habit, quality in every step, quality very first time.</p>
                    <p className="font-normal text-lg leading-8 text-gray-600 mb-8">As an independent audit consultancy, we at iQ Audit Services, stand by our mission and strive to serve as an emblem of assurance, signifying it to our clients and regulatory bodies that our certified products meet or surpass requisite standards. We engage in the rigorous testing, auditing, and certification of your medical device products and play a pivotal role in ensuring healthy QMS and regulatory assurance.</p>
                    <p className="font-normal text-lg leading-8 text-gray-600 mb-8">We will be part of your Governance Audits by ensuring that you achieve efficient regulatory pathways and successful outcomes with our expert bespoke consulting service.</p>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
   </>

   
)
}

export default AboutUsComponent;