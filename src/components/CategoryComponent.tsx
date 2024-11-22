import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Badge } from "react-bootstrap";
import React from "react";











interface ProductCategory {
    productCategoryID: number;
    name: string;
    products: Product[];
}
interface Product {
    productId: number;
    name: string;
    productNumber: string;
    color: string;
    standardCost: number;
    listPrice: number;
    size: number;
    weight: number;
    productCategoryID: number;
}

function Category() {
    const [categories, setCategories] = useState<ProductCategory[]>([]);
    const [expandedCategory, setExpandedCategory] = useState<number | null>(null); // Track expanded category

    const getCategories = async () => {
        const response = await axios.get('http://localhost:5289/ProductCategories');
        setCategories(response.data);
    }

    const handleDeletecategories = async (id: number) => {
        if (window.confirm("Are You Sure To Delete?")) {
            await axios.delete(`http://localhost:5289/ProductCategories/${id}`);
            getCategories();
        }
    }
    
    const [open, setOpen] = useState(false);


    var serialNum: number = 1;
    useEffect(() => {
        getCategories();
    }, []);


    /* return (

        <div>
            <div className="d-flex p-2">
                <h2 className="">Category & Products</h2>
                <NavLink to={'/home'} className={"btn btn-outline-dark ms-auto"}><i className="bi bi-plus-square"></i> Add Categories</NavLink>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="w1">SL</th>
                        <th className="col-2">Category Name</th>
                        <th>Products</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {categories.map((c) => (
                        <tr key={c.productCategoryID}>
                            <td>{serialNum++}</td>
                            <td >{c.name}</td>

                            <td>
                                <button onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open} className="btn btn-dark">
                                    Products <Badge bg="primary">{c.products.length}</Badge>
                                </button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                    <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Product Number</th>
                                            <th>Color</th>
                                            <th>Standard Cost</th>
                                            <th>List Price</th>
                                            <th>Size</th>
                                            <th>Weight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {c.products.map((p) =>
                                        (
                                            <tr key={p.productId}>
                                                <td>{p.name}</td>
                                                <td>{p.productNumber}</td>
                                                <td>{p.color}</td>
                                                <td>{p.standardCost}</td>
                                                <td>{p.listPrice}</td>
                                                <td>{p.size}</td>
                                                <td>{p.weight}</td>
                                            </tr>
                                        )
                                        )}
                                    </tbody>
                                </table>
                                    </div>
                                </Collapse>

                               
                            </td>
                            <td className="col-1">

                                <button title="Edit" className="btn btn-dark" ><i className="bi bi-pencil-square"></i>Edit</button>
                                <button title="Delete" className="btn btn-danger" onClick={() => handleDeletecategories(c.productCategoryID)}><i className="bi bi-trash"></i>Del</button>

                            </td>
                            
                                
                            
                        </tr>
                       

                    )

                    )}
                </tbody>
            </table>
        </div>

    ) */
        return (
            <div>
                <div className="d-flex p-2">
                    <h2 className="">Category & Products</h2>
                    <NavLink to={'/create'} className={"btn btn-outline-dark ms-auto"}>
                        <i className="bi bi-plus-square"></i> Add New
                    </NavLink>
                </div>
    
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="w1">SL</th>
                            <th className="col-2">Category Name</th>
                            <th>Products</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c, index) => (
                            <React.Fragment key={c.productCategoryID}>
                                {/* Main Row for Category */}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{c.name}</td>
                                    <td>
                                        {/* <button
                                            onClick={() =>
                                                setExpandedCategory(expandedCategory === c.productCategoryID ? null : c.productCategoryID)
                                            }
                                            className="btn btn-link"
                                        >
                                            View Products <Badge bg="primary">{c.products.length}</Badge>
                                        </button> */}
                                        <p onClick={() =>
                                                setExpandedCategory(expandedCategory === c.productCategoryID ? null : c.productCategoryID)
                                            } className="pointer">
                                             View Products <Badge bg="primary">{c.products.length}</Badge>
                                        </p>
                                    </td>
                                    <td className="col-1">
                                        <button title="Edit" className="btn btn-dark">
                                            <i className="bi bi-pencil-square"></i>Edit
                                        </button>
                                        <button
                                            title="Delete"
                                            className="btn btn-danger"
                                            onClick={() => handleDeletecategories(c.productCategoryID)}
                                        >
                                            <i className="bi bi-trash"></i>Del
                                        </button>
                                    </td>
                                </tr>
    
                                {/* Conditionally Render Product Rows */}
                                {expandedCategory === c.productCategoryID && (
                                    <tr>
                                        <td colSpan={3}>
                                            <table className="table table-bordered">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Product Number</th>
                                                        <th>Color</th>
                                                        <th>Standard Cost</th>
                                                        <th>List Price</th>
                                                        <th>Size</th>
                                                        <th>Weight</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {c.products.map((p) => (
                                                        <tr key={p.productId}>
                                                            <td>{p.name}</td>
                                                            <td>{p.productNumber}</td>
                                                            <td>{p.color}</td>
                                                            <td>{p.standardCost}</td>
                                                            <td>{p.listPrice}</td>
                                                            <td>{p.size}</td>
                                                            <td>{p.weight}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        );

}
export default Category;