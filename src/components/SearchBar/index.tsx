import searchIcon from '@assets/images/search.png'
import styles from './style.module.scss'
import {FC} from "react";

interface ISearchBarProps extends React.HTMLProps<HTMLInputElement> {

}

const SearchBar: FC<ISearchBarProps> = (props) => {
    return (
        <label className={styles.searchBar}>
            <div>
                <input type="text" {...props} className={styles.searchInput}/>
            </div>
            <div>
                <img src={searchIcon} className={styles.searchIcon} alt="search-icon"/>
            </div>
        </label>
    )
}

export default SearchBar