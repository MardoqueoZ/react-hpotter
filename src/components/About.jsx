import { useTranslation } from "react-i18next"

const About = () => {
    const {t} = useTranslation()
    
    return (
        <div className="justify-center flex flex-row gap-5 p-3">
            <section className="text-white w-1/2  bg-slate-700 rounded-xl p-7">
                <h1 id="titulo" className="text-4xl">{t('title_harry_potter')}</h1>
                <p className="text-left">
                    {t('desc_harry_potter')}
                </p>
            </section>
            
            <section className="text-white w-1/2 bg-slate-700 rounded-xl p-7">
                <h1 id="titulo" className="text-4xl">{t('title_author')}</h1>
                <p className="text-left">
                    {t('desc_author')}
                </p>
            </section>
        </div>
    )
}
export default About