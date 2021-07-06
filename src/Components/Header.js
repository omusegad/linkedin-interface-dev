import SearchForm from "./SearchForm";
const Header = () => {
    return(
        <div>
        <div className="bg-white">
            <div className="container">
                <div className="row">
                <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <a className="navbar-brand text-info" href="{}">LinkedIn</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                        <SearchForm/>
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="{}">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="{}">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="{}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="{}">Action</a>
                                <a className="dropdown-item" href="{}">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="{}">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="{}">Disabled</a>
                            </li>
                            </ul>
                        
                        </div>
                        </nav>
                </div>
            </div>
        </div>
        </div>

    </div>
    );

}

export default Header;