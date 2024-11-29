import Card from "../components/Card";
import Search from "../components/SearchInput";
import {useTranslation} from "react-i18next";

const Characters = () => {
    const {t} = useTranslation();
    return (
        <>
            <div id="contenedor" className="min-h-screen flex flex-col items-center relative">
                <h1 id="titulo" className="text-white pt-4 text-4xl">{t('title_char_list')}</h1>
                <Search className="m-5 w-full p-2 rounded-lg" placeholder={t('search_input')} />
                <Card />
            </div>
        </>
    )
}

export default Characters
