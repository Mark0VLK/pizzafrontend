import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

export default function CategoryList() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/category");
            setCategory(result.data);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
        }
    };

    const deleteWithParameter = async (id, deleteMode) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/category/${id}`, {
                params: {deleteMode}
            });
            loadCategories();
        } catch (error) {
            console.error("Ошибка при удалении:", error);
        }
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">

                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название категории</th>
                        <th scope="col">Управление</th>
                    </tr>
                    </thead>

                    <tbody>

                    {category.map((category, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {++index}
                            </th>
                            <td>{category.name}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx2"
                                    to={`/edit-category/${category.id}`}
                                >
                                    Редактировать
                                </Link>
                                <button
                                    className="btn bg-danger mx-2"
                                    onClick={() => deleteWithParameter(category.id, 'HARD')}
                                >
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}