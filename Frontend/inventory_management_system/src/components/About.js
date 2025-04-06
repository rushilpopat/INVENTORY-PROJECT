import React from 'react'

export default function About() {
  return (
    <div className='container-fluid p-5'>
        <h1 className='mb-4'>Inventory Management System - MERN CRUD App</h1>
        
        <div className='row'>
            <div className='col-md-8'>
                <h2 className='h4 mb-3'>About the Project</h2>
                <p className='mb-4'>
                    This is a full-stack Inventory Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
                    The application allows businesses to efficiently manage their product inventory with real-time updates and a user-friendly interface.
                </p>

                <h2 className='h4 mb-3'>Key Features</h2>
                <ul className='mb-4'>
                    <li>Add new products to inventory</li>
                    <li>View all products in a clean, organized table</li>
                    <li>Update existing product details</li>
                    <li>Delete products from inventory</li>
                    <li>Real-time data updates</li>
                    <li>Responsive design for all devices</li>
                </ul>

                <h2 className='h4 mb-3'>Technology Stack</h2>
                <ul className='mb-4'>
                    <li><strong>Frontend:</strong> React.js, Bootstrap, Axios</li>
                    <li><strong>Backend:</strong> Node.js, Express.js</li>
                    <li><strong>Database:</strong> MongoDB Atlas</li>
                    <li><strong>API:</strong> RESTful architecture</li>
                </ul>
            </div>

            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='h5 mb-3'>Quick Links</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href='/products' className='text-decoration-none'>View Products</a></li>
                            <li className='mb-2'><a href='/add-product' className='text-decoration-none'>Add New Product</a></li>
                            <li className='mb-2'><a href='/contact' className='text-decoration-none'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
