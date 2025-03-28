import styles from "./Navbar.module.css"
import {useState} from "react";
import {Menu, Search, X} from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__container}>
                {/*로고*/}
                {/*데스크탑 메뉴*/}
                <ul className={`styles.nav__link} ${isOpen ? "active" : ""}`}>
                    <li><a href="#">홈</a></li>
                    <li><a href="#">인기 영화</a></li>
                    <li><a href="#">최신 영화</a></li>
                </ul>
                {/*검색창*/}
                <div className={styles.search__box}>
                    <input type="text" placeholder="영화 검색..."/>
                    <button>🔍</button>
                </div>
                {/*모바일 메뉴 버튼*/}
                <button className={styles.menu__btn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}

                </button>
            </div>
        </nav>
    )
}

export default Navbar;