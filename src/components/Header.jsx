import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const languages = [
    {code: 'es', flag: '/countries/spain.webp'},
    {code: 'en', flag: '/countries/usa.png'}
]

const Nav = () => {
    const {t, i18n} = useTranslation();
    // estado para el boton de cambio de idioma
    const [language, setLanguage] = useState("es");
    
    // funcion para cambiar de idioma
    const toogleLanguage = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    }
    
    
    return (
        <header className="">
            <nav className="flex flex-row gap-3 justify-center text-white p-3 text-xl relative" id="menu">
                <Link to='/' className="hover:underline font-bold" id="nav-item" >
                    {t('home')}
                </Link>
                
                <Link to='/personajes' className="hover:underline font-bold" id="nav-item" >
                    {t('char')}
                </Link>
                
                <div className="absolute top-0 right-6 p-3">
                    <button className="border-2 border-white rounded-full" onClick={toogleLanguage}>
                        <img className="rounded-full w-10 h-10" src={languages.find(lang => lang.code !== language)?.flag} />
                    </button>
                </div>
            </nav>
        </header>
    )    
}

export default Nav;