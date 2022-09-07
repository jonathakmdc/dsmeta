import logo from "../../assets/img/logo.svg"
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Semana Spring React by 
                    <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                    { } - Aluno Jonatha Kennedy
                </p>
            </div>
        </header>
    )
}

export default Header
