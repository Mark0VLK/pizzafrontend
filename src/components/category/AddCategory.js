import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function AddCategory() {

    let navigate = useNavigate();

    const [category, setCategory] = useState({
        name: ""
    });

    const {name} = category;

    const onInputChange = (e) => {
        setCategory({...category, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/category", category);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Создание новой категории</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Название
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите название категории"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>


                        <button type="submit" className="btn btn-outline-primary">
                            Сохранить
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Отмена
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}