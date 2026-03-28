import React, { useContext } from "react";
import ProjectContext from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";

const SearchProp: React.FC = () => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsSearch, isSearch } = context;
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        setIsSearch((pre) => !pre);
        navigate("#");
    };
    return (
        <>
            <div className={`search-popup offcanvas offcanvas-top ${isSearch ? 'show' : ''}`} id="offcanvas-search" data-bs-scroll="true">
                <div className="container d-flex flex-row py-5 align-items-center position-relative">
                    <button type="button" onClick={() => setIsSearch((pre) => !pre)} className="btn-close bg-primary rounded-5" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    <div className="col-lg-9 mx-auto">
                        <form className="search-form w-100 mb-5" onSubmit={handleSubmit}>
                            <input id="search-form" type="text" className="form-control shadow-1"
                                placeholder="Type keyword and hit enter" />
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchProp;
