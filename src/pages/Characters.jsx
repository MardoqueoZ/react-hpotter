import Card from "../components/Card";
import Search from "../components/SearchInput";
import {useTranslation} from "react-i18next";

const Characters = () => {
    const {t} = useTranslation();
    return (
        <>
            <div id="contenedor" className="min-h-screen flex flex-col items-center relative">
                <h1 id="titulo" className="text-white pt-4 text-4xl">{t('title_char_list')}</h1>
                <div className="w-full m-3 p-3">
                    <Search className="w-full p-2 rounded-lg" placeholder={t('search_input')} />
                </div>
                <Card />
            </div>
        </>
    )
}

export default Characters;
