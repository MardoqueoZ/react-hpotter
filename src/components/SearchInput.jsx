import { useContext } from 'react';
import { PersonContext } from '../context/PersonContext';

const Search = ({className, placeholder}) => {
    const { setSearchTerm } = useContext(PersonContext);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder={placeholder}
            className={className}
            onChange={handleChange}
        />
    );
};

export default Search;
