import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GCPAuditImage from  '../../assets/services/gcp-audit-services.jpg';
import GDPAuditImage from  '../../assets/services/gdp-audit-services.jpg';
import GLPAuditImage from  '../../assets/services/glp-audit-services.jpg';
import GMPAuditImage from  '../../assets/services/gmp-audit-services.jpg';
import GVPAuditImage from  '../../assets/services/gvp-audit-services.jpg';
import ISO9001Image from  '../../assets/services/iso-9001.jpg';
import ISO13485Image from  '../../assets/services/iso-13485.jpg';
import ISO13485ImplimentationImage from  '../../assets/services/iso-13485-implementation.jpg';
import GAPAnalysisImage from  '../../assets/services/gap-analysis.jpg';
import PRRCSupportImage from  '../../assets/services/prrc-support.jpg';
import RemediationImage from  '../../assets/services/remediation.jpg';
import FooterComponent from '../footer/FooterComponent';
import HeaderComponent from '../../HeaderComponent';

const ServicesComponent = () => {
  let initialOpenTitle = '';
  const { serviceName } = useParams();

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  const services = [
    { 
        id: 'gcp-audits', 
        title: 'GCP Audits', 
        content: [
            'At iQ Audit Services, we have a comprehensive understanding and objectives driving towards Good Clinical Practice (GCP) principles applied in auditing investigational medicinal product and medical device industries tailored to verify requirements for planning, study conduct, performance, monitoring, analysis and reporting to ensure the ethical and scientific standards for GCP are met.',
            'We have qualified and professional auditors who can accommodate your particular needs and deliver best service to assess compliance with regulatory requirements.'
        ], 
        image: GCPAuditImage 
    },
    { id: 'gdp-audits', title: 'GDP Audits', content: [
        'Good Distribution Practices (GDP) is the key for the supply chain and to ensure product quality is maintained until it reach the end-user. At iQ Audit Services we aim to provide ethical and controlled GDP compliance program to manufacturing organisations, transport/shipping companies, warehousing and any other partners involved in the supply chain.',
        'iQ Audit Services follow latest GDP standards and Regulations to facilitate Self-Assessments, compliance audits.'
    ], image: GDPAuditImage },
    { id: 'glp-audits', title: 'GLP Audits', content: [
        'iQ Audit Services specialise in providing GLP (Good Laboratory Practices) Study Audits and Vendor Audits. We ensure to review and verify analytical procedures from reviewing protocol to final reports.',
        'We support by auditing vendor’s facilities and equipment, review organisation structure and SOPs, assess qualification and training of the personnel, assess testing facilities operations including test and control articles, review records, reports, and record/sample retention, assess data transfer process, assess QA unit.'
    ], image: GLPAuditImage },
    { id: 'gmp-audits', title: 'GMP Audits', content: [
        'At iQ Audit Services we have expertise audit team in GOOD MANUFACTURING PRACTICE (GMP) to assess and verify good manufacturing practices followed in manufacturing medicine or medical device or service processes in accordance with standard code of practice.',
        'Our experts provide detailed GMP audit service to API/Raw Material manufacturers, Excipient suppliers and finished product manufacturers including medical device manufacturers in accordance with ISO 13485, FDA’s 21 CFR 820.30, EU Regulation 2017/745 on medical devices and EU Regulation 2017/746 for in-vitro devices.'
    ], image: GMPAuditImage },
    { id: 'gvp-audits', title: 'GVP Audits', content: [
        'iQ Audit Service audit your pharmacovigilance system and its activities in accordance with the applicable legislation and guidance.',
        'The GVP (Good Pharmacovigilance Practice) audit universe consider a systematic, disciplined, independent and documented process for obtaining objective evidence and evaluates to determine the extent to Pharmacovigilance criteria are fulfilled.'
    ], image: GVPAuditImage },
    { id: 'iso-9001-audits', title: 'ISO 9001 Audits', content: [
        'International Organisational standards, ISO 9001 certification provides assurance to the industries to continuously improve their internal processes and exceed consumer expectations. iQ Audit Services step in to verify quality management system is maintained and effective by conducting quality audits periodically.',
        'We conduct various types of ISO 9001 audits internally, externally, supplier audits, process audits, routine audits to ensure the health of the Quality Management System (QMS) meets the applicable standards and regulations.'
    ], image: ISO9001Image },
    { id: 'iso-13485-audits', title: 'ISO 13485 Audits', content: [
        'ISO 13485 is an internationally recognized standard that establishes quality management system requirements for medical device and equipment manufacturers. Its primary aim is to harmonise and streamline quality management processes to meet latest (EU) 2017/745 MDR regulatory demands in the medical devices sector.',
        'Safety and quality are non-negotiables in the medical devices industry. Regulatory requirements are increasingly stringent throughout every step of a product’s lifecycle, including service and delivery. More and more, organisations in the industry are expected to demonstrate their quality management processes and ensure best practices in everything they do.',
        'Structured similarly to ISO 9001, ISO 13485 serves as the foundation for regulatory compliance in local and most export markets, showcasing a commitment to meeting customer requirements. Manufacturers, suppliers, distributors, and those involved in medical devices can apply for ISO 13485 certification. However, in some markets, additional local regulatory certification is necessary alongside ISO 13485 to legally manufacture and sell medical devices. The standard entails specific requirements for manufacturing, installation, and servicing, including a risk management approach to product development and realization, process validation, adherence to statutory and regulatory obligations, effective product traceability and recall systems, and the implementation of an enhanced quality management system.'
    ], image: ISO13485Image },
    { id: 'gap-analysis', title: 'Gap Analysis', content: [
        'Gap Analysis is an effective tool used to determine the deficiencies in implementation of any procedure or regulatory guidance.',
        'At iQ Audit Service Limited we help you preparing for any regulatory inspection and support in gap analysing latest regulatory guidelines in comparison to the current practices. The Gap analysis is performed for all SOPs, validation processes and other applicable industrial activities to find out the possibilities of improvement and alignment with latest applicable regulatory requirements.',
        'Gap analysis is done for regulatory guidelines like data integrity, risk assessment, good manufacturing practices, good distribution practices, ISO 9001, ISO 13485, etc to eliminate the possible non-compliances at your business.',
        'Gap analysis is carried out for specific inspection like FDA, MHRA, WHO GMP, TGA, MCC, EU MDR, etc on the basis of respective regulatory guidelines.',
        'iQ Audit Services will help you in completing gap analysis step by step starting from purchase to final product to dispatch.'
    ], 
    bullets: ['Identification of areas', 'Preparation of checklist', 'Gap analysis', 'Identification of gaps', 'Corrective action', 'Review of implementation' ], 
    image: GAPAnalysisImage },
    { id: 'iso-13485-implementation', title: 'ISO 13485 Implementation', content: [
        'The International Standard ISO 13485:2016 defines criteria for a Quality Management System (QMS) for Medical Device Manufacturing; this ensures that all medical devices meet proper regulatory compliance laws and customer needs.',
        'ISO 13485 derived from ISO 9001, a quality management standard that is available to businesses in a wide variety of industries. However, medical device and pharmaceutical companies have specialised requirements that made some of the requirements of ISO 9001 difficult to apply, and therefore ISO 13485 was developed to address these needs.',
        'Implementing a QMS for Medical Device Manufacturing to your business can cite numerous benefits. ISO 13485 provides a framework for good management practice which demonstrates the businesses commitment to manufacturing high-quality medical devices.',
        'At iQ Audit Services Ltd we provide intense support in implementation of ISO 13485 and aim to achieve certification for your organisation that assures',
    ], 
    bullets: ['Regular assessment to continually monitor and improve processes', 'Credibility that the system can achieve its intended outcomes', 'Reduced risk and uncertainty and increase market opportunities', 'Consistency in the outputs designed to meet expectations.' ], 
    image: ISO13485ImplimentationImage },
    { id: 'prrc-support', title: 'PRRC Support', content: [
        'As per latest (EU) 2017/745 Medical Device Regulations (MDR) Article 15 (3) Person Responsible for Regulatory Compliance (PRRC) is responsible for ensuring:',
    ], 
    bullets: ['The conformity of the devices is appropriately checked, in accordance with the quality management system under which the devices are manufactured, before a device is released.', 'Credibility that the system can achieve its intended outcomes', 
        'The technical documentation and the EU declaration of conformity are drawn up and kept up-to-date.', 
        'The post-market surveillance obligations are compiled with in accordance with Art 10(10) of the MDR and Art 10(9) of the IVDR',
        'The reporting obligations referred to in Art 87 to 91 are fulfilled.',
        'In the case of investigational devices, the statement referred to in section 4.1 of Chapter II of Annex XV is issued.'
    ], 
    additionalContent: ['At iQ Audit services limited, we provide guidance on oversight responsibilities of PRRC and support manufacturers to meet the expectations of the areas mentioned above.'], 
    image: PRRCSupportImage },
    { id: 'remediation-qms', title: 'Remediation QMS', content: [
        'iQ Audit Services provide additional support in Remediation of Quality Management System and ensure that robust process compliance is achieved.',
    ], 
    bullets: ['Cause Audits', 
        'Risk Management', 
    ], 
    image: RemediationImage },
    { id: 'training-compliances', title: 'Training & Compliance', 
    bullets: ['Risk Management', 
        'QMS - GxP', 
    ], 
  }
  ];

  useEffect(() => {
    if (serviceName) {
      // Convert URL parameter to match ID format
      const decodedName = decodeURIComponent(serviceName).toLowerCase().replace(/ /g, '-');
      const element = document.getElementById(decodedName);
      initialOpenTitle = decodeURIComponent(serviceName).toLowerCase();
      if (element) {
        // Smooth scroll to element
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          
          // Update URL without reload
          window.history.replaceState(null, '', `#${decodedName}`);
        }, 100);
      }
    }
  }, [serviceName]);

  useEffect(() => {
    console.log('Initial Open Title:', initialOpenTitle);
  if (initialOpenTitle) {
    const index = services.findIndex(item => {console.log(item.title); return item.title.toLowerCase() === initialOpenTitle.toLowerCase()});
    console.log('Index found:', index);
    if (index !== -1) setActiveIndex(index);
  }
}, []);

  return (
    <div className="services-container">
      <HeaderComponent />
         <div className="relative w-full h-[480px] md:h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('../../assets/services-bg.jpg')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            iQ Audit Services provide our customers an independent, intelligence quality assurance, objective assessment, risk management for a healthy Quality Management System (QMS).
          </p>
        </div>
      </div>
    </div>
    <section className='py-16'>
      {services.map((service, index) => (
        <div 
          key={service.id}
          id={service.id}
          className="service-section "
        >

          <div className="w-full max-w-[80%] mx-auto">
      
        <div 
          key={index} 
          className="border-b border-gray-200 last:border-b-0"
        >
          <button
            className="flex justify-between items-center w-full py-4 px-5 text-left font-medium text-gray-900"
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-lg md:text-xl font-nornal">
                {service.title}
              </p>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
           <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-8xl lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="lg:max-w-[80%]">
              {/* <p className="text-base/7 font-semibold text-indigo-600">Deploy faster</p> */}
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
                {service.title}
              </h2>
              {service.content && service.content.length > 0 && (
                <>
                  {service.content.map((paragraph: string) => (
                    <p className="mt-6 text-xl/8 text-gray-700">
                    {paragraph}
                </p>
                  ))}
                </>
              )}

              {service.bullets && service.bullets.length > 0 && (
                <ul className="mt-6 ml-4 list-disc pl-6 space-y-2 text-gray-700">
                  {service.bullets.map((bullet: string) => (
                    <li key={bullet} className="text-lg">{bullet}</li>
                  ))}
                </ul>
              )}
              {service.additionalContent && service.additionalContent.length > 0 && (
                <>
                  {service.bullets.map((paragraph: string) => (
                    <p className="mt-6 text-lg/8 text-gray-700">
                    {paragraph}
                </p>
                  ))}
                </>
              )}
             
            </div>
          </div>
        </div>
        {service.image && service.image.length > 0 && (
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={service.image}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-180"
          />
        </div>)}
      </div>
    </div>
          </div>
        </div>
    </div>

          
        </div>
      ))}
      </section>
      <FooterComponent />
    </div>
  );
};

export default ServicesComponent;