import React from 'react';

const Appointment = () => {
    return (
        <div className='container p-5'>
            <form className="row g-3">
                <div className="col-md-6">
                    <input type="text" class="form-control" aria-label="First name" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                    <input type="text" class="form-control" aria-label="Last name" placeholder="Last Name" />
                </div>
                <div className="col-md-6">
                    <input type="text" class="form-control" aria-label="First name" placeholder="Doctor Name" />
                </div>
                <div className="col-md-6">
                    <input type="text" class="form-control" aria-label="Last name" placeholder="Service Name" />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label"></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Address" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;