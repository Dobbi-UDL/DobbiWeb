"use client";

import Link from 'next/link';
import { useScroll } from "@/contexts/ScrollContext";
import routes from '@/config/routes';

// Text Constants
const BRAND_NAME = "Dobbi";
const SIGN_UP_TEXT = "Sign Up";
const LOG_IN_TEXT = "Log In";

const HERO_ID = "hero";
const SCROLL_THRESHOLD = 20;

export default function Header() {
    const { scrollY, scrollTo } = useScroll();

    const handleBrandButtonClick = () => {
        if (window.location.pathname === routes.home) {
            scrollTo(HERO_ID);
        } else {
            window.location.href = routes.home;
        }
    };

    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrollY > SCROLL_THRESHOLD ? 'bg-white shadow-md' : 'bg-transparent' }`}>
            <nav id="nav" className="container mx-auto px-6 py-3">
                <div
                    id="nav-content"
                    className="flex items-center justify-between xl:justify-start xl:space-x-6"
                >
                    <button
                        id="brand-button"
                        onClick={handleBrandButtonClick}
                        className="text-2xl font-bold text-gray-800 xl:mr-auto"
                    >
                        {BRAND_NAME}
                    </button>
                    <div
                        id="auth-buttons"
                        className="flex space-x-4 xl:ml-auto"
                    >
                        <Link
                            id="sign-up-button"
                            href={routes.register}
                            className="bg-[#F66C72] text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
                        >
                            {SIGN_UP_TEXT}
                        </Link>
                        <Link
                            href={routes.login}
                            className="text-gray-600 hover:text-gray-900 px-3 py-1 hover:bg-gray-100 rounded-full transition duration-300"
                        >
                            {LOG_IN_TEXT}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
