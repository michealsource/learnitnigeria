import React, { useState } from 'react'
import './ContactModal.css'
function ContactModal() {
    return (
        <>
            <div class="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        
                        <div class="modal-body">
                        <div class="text-center">
                                <h4>CONTACT US</h4>
                        </div>
                            <div class="row mt-5">

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                                </div>

                                <div class="mb-3 col-md-12">
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                                </div>

                                <div class="mb-3 col-md-12">
                                    <label for="exampleFormControlInput1" class="form-label">Nature of Project</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div class="col-md-12 mb-2">
                                    <label for="exampleFormControlInput1" class="form-label">Budget</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected> ₦50 - ₦150</option>
                                        <option value="1">₦150,000 -  ₦300,000</option>
                                        <option value="2">₦300,000 -  ₦500,000</option>
                                        <option value="2">₦300,000 -  ₦1000,000</option>
                                        <option value="2">₦1000,000 - ₦5000,000</option>
                                        <option value="2">₦5000,000 - ₦10,000,000</option>
                                        <option value="2">₦10,000,000 - ₦50,000,000</option>
                                        <option value="2">₦50,000,000 - ₦100,000,000</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mb-2">
                                    <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
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
