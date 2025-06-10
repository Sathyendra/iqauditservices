import "./HeaderComponent.css"
import logo from "./assets/iqauditservices-logo-colour.svg"
import { PhoneIcon,  Bars4Icon} from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

    const showMobileMenu = () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }

    return (
        <>
            <div className="fixed z-[11] bg-gray-900 min-h-[100px] w-full">
                <nav className="menu">
                    <ul>
                        <li><Link to="/"><img className="logo" src={logo} /></Link></li>
                        <li className="hide-sm"><Link to="/about">About</Link></li>
                        <li className="hide-sm"><Link to="/services">Services</Link></li>
                        <li className="hide-sm"><Link to="/resources">Resources</Link></li>
                    </ul>
                </nav>
                <div className="absolute z-[11] right-10 top-5 hide-sm" >
                    <Link to="/contact" className="inline-flex rounded-md border border-transparent bg-yellow-600 px-4 py-3 text-center font-medium text-white hover:bg-yellow-700"><PhoneIcon className="w-6 h-6 mr-2" /> Contact</Link>
                </div>
                <div className="absolute z-[11] right-10 top-5 show-sm" >
                    <div onClick={showMobileMenu}><Bars4Icon className="w-10 h-10 text-white mt-2" /> </div>
                    <div className="mobile-menu hidden" >
                        <nav className="menu">
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/resources">Resources</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        
                        <section className="mx-auto px-8 py-12 text-center sm:px-12">
                        <h1 className="mb-12 text-4xl font-extrabold leading-tight dark:text-slate-50 sm:text-3xl">
                            Need a Quality Audit? <span className="text-yellow-600">We are here to help!</span>
                        </h1>
                        <p className="mb-12 leading-relaxed text-slate-700 dark:text-slate-400">
                        call us at <a href="tel:+441234567890" className="text-gray-600 hover:underline">+44 7527241908</a> or email us at <a href="mailto:enquiries@iqauditservices.com" className="text-gray-600 hover:underline">
                            enquiries@iqauditservices.com</a>
                        </p>
                        
                        </section>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}
export default HeaderComponent;