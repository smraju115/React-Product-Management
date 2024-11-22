import axios from 'axios';
import { Form, Field, FieldArray, ErrorMessage, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup";

function CreateNewCategory() {

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required").max(50, "Maximum length is 50 characters").min(10, "Minimum length is 10 characters"),
        products: Yup.array().of(
            Yup.object({
                name: Yup.string().required("Name is required"),
                productNumber: Yup.string().required("Product Number is required"),
                color: Yup.string().required("Color is required"),
                standardCost: Yup.number().required("Standard Cost is required"),
                listPrice: Yup.number().required("List Price is required"),
                size: Yup.string().required("Size is required"),
                weight: Yup.number().optional(),
            })
        ),
    });

    return (
        <>
            <h3 className="text-center mb-2">Category With Products</h3> <hr />
            <Formik
                initialValues={{
                    name: '',
                    products: [
                        {
                            name: '',
                            productNumber: '',
                            color: '',
                            standardCost: 0,
                            listPrice: 0,
                            size: '',
                            weight: 0,
                        }
                    ]
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        const response = await axios.post('http://localhost:5289/ProductCategories', values);
                        resetForm();
                    } catch (error) {
                        console.error('Error:', error);
                    }
                    setSubmitting(false);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div className='col-2 p-2'>
                            {/* <label htmlFor="name" className='form-label'>Category Name</label> */}
                            <h4>Category</h4>
                            <Field type="text" name="name" className='form-control' />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>

                        <FieldArray name="products">
                            {({ push, remove }) => (
                                <div className='p-2'>
                                    <h4>Products</h4>
                                    {values.products.map((_, index) => (
                                        <div className=''>
                                            <div key={index} className='d-flex'>
                                                <label htmlFor={`products.${index}.name`} className='form-label'>Product Name</label>
                                                <Field type="text" name={`products.${index}.name`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.name`} component="div" className="text-danger" />

                                                <label htmlFor={`products.${index}.productNumber`} className='form-label'>Product Number</label>
                                                <Field type="text" name={`products.${index}.productNumber`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.productNumber`} component="div" className="text-danger" />

                                                <label htmlFor={`products.${index}.color`} className='form-label'>Color</label>
                                                <Field type="text" name={`products.${index}.color`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.color`} component="div" className="text-danger" />

                                                <label htmlFor={`products.${index}.standardCost`} className='form-label'>Standard Cost</label>
                                                <Field type="number" name={`products.${index}.standardCost`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.standardCost`} component="div" className="text-danger" />

                                                <label htmlFor={`products.${index}.listPrice`} className='form-label'>List Price</label>
                                                <Field type="number" name={`products.${index}.listPrice`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.listPrice`} component="div" className="text-danger" />

                                                <label htmlFor={`products.${index}.size`} className='form-label'>Size</label>
                                                <Field type="text" name={`products.${index}.size`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.size`} component="div" className="text-danger" />

                                                <label htmlFor={`products.${index}.weight`} className='form-label'>Weight</label>
                                                <Field type="number" name={`products.${index}.weight`} className='form-control' />
                                                <ErrorMessage name={`products.${index}.weight`} component="div" className="text-danger" />

                                                <button type="button" className='btn btn-danger btn-sm' onClick={() => remove(index)}>
                                                    Remove
                                                </button>
                                                <button className='btn btn-primary btn-sm'
                                                    type="button"
                                                    onClick={() =>
                                                        push({
                                                            name: '',
                                                            productNumber: '',
                                                            color: '',
                                                            standardCost: 0,
                                                            listPrice: 0,
                                                            size: '',
                                                            weight: 0,
                                                        })
                                                    }
                                                >
                                                    Add Product
                                                </button>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            )}
                        </FieldArray>
                            <div className="">
                             <NavLink className={"btn btn-info"} to={'/category'}>Back to List</NavLink>   
                            <button type="submit" className='btn btn-primary sb'>Save</button>
                            </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CreateNewCategory;
