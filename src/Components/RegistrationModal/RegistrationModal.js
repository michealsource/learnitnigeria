import React, { useState } from 'react'
import './RegistrationModal.css'
function ContactModal() {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-body">

                        <div class="text-center">
                            <h4>REGISTRATION FORM</h4>
                        </div>
                            
                            <div class="row mt-5">

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Occupation</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Occupation" />
                                </div>

                                <div class="col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Choices of Courses</label>
                                    <select class="form-select" aria-label="Default select example" >
                                        <option selected>Choice of Courses</option>
                                        <option value="1">Basic Web Development</option>
                                        <option value="2">Advance Web Development</option>
                                        <option value="3">Andriod App Development</option>
                                        <option value="3">Wordpress</option>
                                        <option value="3">Intro to Python</option>
                                    </select>
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Training Section</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Training Section</option>
                                        <option value="1">Morning</option>
                                        <option value="2">Afternoon</option>
                                        <option value="3">Evening</option>
                                    </select>
                                </div>

                                <div class="mb-3 col-md-6">
                                <label for="exampleFormControlInput1" class="form-label">Any prior Knowlegde of Programing</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                     <button type="button" class="btn btn-primary btn-lg">Submit</button>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactModal
