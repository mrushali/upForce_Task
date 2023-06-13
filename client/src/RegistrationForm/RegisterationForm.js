import React, { useState } from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Footer from '../layout/Footer'
import { useDispatch } from 'react-redux'
import { createPost } from '../actions/posts';
import Posts from '../Posts/Posts'

export const RegisterationForm = () => {
    const [postData, setPostData] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'mobileno': '',
        'gender': '',
        'status': '',
        'image': '',
        'location': ''
    });
    const dispatch = useDispatch();

    const register = () => {
        console.log('Registration Form Data Saved Successfully....');
        const newPostData = dispatch(createPost(postData));
        console.log('newPostData' + JSON.stringify(newPostData));
        console.log(postData);
    }
    return (
        <div className='wrapper'>
            <div>
                <Posts />
            </div>
            <Header></Header>
            <Sidebar></Sidebar>
            {/* <h1>Registration Form</h1> */}
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Registration Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New Registration Form</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <form>
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-4 text-left'>
                                                    <label>First Name : </label>
                                                </div>
                                                <div className='col-8'>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="firstname" value={postData.firstname} placeholder="Enter First Name"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    firstname: e.target.value
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-4 text-left'>
                                                    <label>Last Name : </label>
                                                </div>
                                                <div className='col-8'>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="lastname" value={postData.lastname} placeholder="Enter Last Name"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    lastname: e.target.value
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-4 text-left'>
                                                    <label>Email : </label>
                                                </div>
                                                <div className='col-8'>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="email" value={postData.email} placeholder="Enter Email ID"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    email: e.target.value
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-4 text-left'>
                                                    <label>Mobile Number : </label>
                                                </div>
                                                <div className='col-8'>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="mobileno" value={postData.mobileno} placeholder="Enter Mobile Number"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    mobileno: e.target.value
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-4 text-left'>
                                                    <label>Select Gender : </label>
                                                </div>
                                                <div className='col-8 text-left'>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" value={postData.gender} name="gender" id="male"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    gender: e.target.value
                                                                });
                                                            }}
                                                        />
                                                        <label className="form-check-label">Male</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gender" value={postData.gender} id="female"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    gender: e.target.value
                                                                });
                                                            }}
                                                        />
                                                        <label className="form-check-label">Female</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row mt-4'>
                                                <div className='col-4 text-left'>
                                                    <label>Select Your Status : </label>
                                                </div>
                                                <div className='col-8 text-left'>
                                                    <select className="form-select"
                                                        onChange={(e) => {
                                                            setPostData({
                                                                ...postData,
                                                                status: e.target.value
                                                            })
                                                        }}
                                                    >
                                                        <option>Active</option>
                                                        <option>Inactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <div className='text-left'><label>Select Your Profile : </label></div>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="image"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    image: e.target.files[0]
                                                                });
                                                            }}
                                                        />
                                                        < label className="custom-file-label" > Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-4'>
                                                <div className='col-4 text-left'>
                                                    <label>Location : </label>
                                                </div>
                                                <div className='col-8'>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="name" value={postData.location} placeholder="Enter Your Location"
                                                            onChange={(e) => {
                                                                setPostData({
                                                                    ...postData,
                                                                    location: e.target.value
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="button" className="btn btn-primary" onClick={() => {
                                                register();
                                            }}>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
            <Footer></Footer>
        </div>
    )
}
