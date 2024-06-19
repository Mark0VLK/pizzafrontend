import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function EditCategory() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [category, setCategory] = useState({
        name: ""
    });

    const {name, username, email} = category;

    const onInputChange = (e) => {
        setCategory({...category, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/category/${id}`);
        setCategory(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/category/${id}`, category);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Редактирование категории</h2>

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