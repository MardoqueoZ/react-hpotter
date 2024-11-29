import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                // traducciones al ingles
                "home": "Home",
                "char": "Characters",
                "title_harry_potter": "About Harry Potter",
                "desc_harry_potter": "Harry Potter is a series of fantasy novels written by British author J. K. Rowling, which describe the adventures of the young wizard Harry Potter and his friends Hermione Granger and Ron Weasley during the years they spend at Hogwarts School of Witchcraft and Wizardry.",
                "title_author": "About the Author",
                "desc_author": "J K (Joanne Kathleen) Rowling is the author of the seven books of the famous Harry Potter series. Loved by readers all over the world, the series has sold more than 500 million copies, has been translated into eighty languages, and has inspired eight hugely successful blockbuster films.",
                "title_char_list": "Main Characters",
                "search_input": "Search by name",
            }
        },
        es: {
            translation: {
                // traducciones al español
                "home": "Inicio",
                "char": "Personajes",
                "title_harry_potter": "Sobre Harry Potter",
                "desc_harry_potter": "Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.",
                "title_author": "Sobre la Autora",
                "desc_author": "J K (Joanne Kathleen) Rowling es autora de los siete libros de la famosa saga de Harry Potter. Amada por lectores de todo el mundo, la serie ha vendido más de 500 millones de ejemplares, se ha traducido a ochenta idiomas y ha inspirado ocho películas de enorme éxito de taquilla.",
                "title_char_list": "Personajes Principales",
                "search_input": "Buscar por nombre",
            }
        }
    },
    lng: "es", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;