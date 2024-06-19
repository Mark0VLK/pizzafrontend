import React from 'react'
import {Link} from "react-router-dom";

export default function CategoryNavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">

                    <h1 className="navbar-brand">Список категорий</h1>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light"
                          to="/add-category">
                        Добавить
                    </Link>
                </div>
            </nav>

        </div>
    );
}