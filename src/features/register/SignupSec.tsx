import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function SignupSec() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        // Validate all fields are filled
        if (username && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Passwords do not match!",
                    showConfirmButton: true
                });
                return;
            }

            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Account created successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
    };
    return (
        <>
            {/* Promo Section End */}
            <section className="signup-sec sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="contact-form2 bg-shade  rounded-3 shadow-sm border p-5">
                                <h2 className="h4 fw-normal mb-5">

                                    Create your Account
                                </h2>
                                <form role="form" className="row" onSubmit={handleSubmit}>
                                    <div className="form-group mb-4 col-lg-12">
                                        <label htmlFor="username">
                                            User Name :
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Enter username"
                                        />
                                    </div>
                                    <div className="form-group mb-4 col-lg-6">
                                        <label htmlFor="fname">
                                            First Name :
                                        </label>
                                        <input
                                            id="fname"
                                            name="fname"
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                    <div className="form-group mb-4 col-lg-6">
                                        <label htmlFor="lname">
                                            Last Name :
                                        </label>
                                        <input
                                            id="lname"
                                            name="lname"
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter last name"
                                        />
                                    </div>

                                    <div className="form-group mb-4 col-lg-12">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group mb-4 col-lg-12">
                                        <label htmlFor="pwd">Password:</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="pwd"
                                            name="password"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="form-group mb-4 col-lg-12">
                                        <label htmlFor="pass-c">
                                            Confirm Password:
                                        </label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="pass-c"
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                        />
                                    </div>
                                    <button className="btn btn-primary" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <i className="fa fa-spinner fa-spin me-2"></i> Processing...
                                            </>
                                        ) : (
                                            <>
                                                Submit US
                                                <i className="fa fa-arrow-right ms-2"></i>
                                            </>
                                        )}
                                    </button>
                                    <div className="login-bottom mt-4">
                                        <label>
                                            <i className="fa fa-user me-2"></i>
                                            Already have an account to
                                            <Link to="/login">Log In</Link> here
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* LOGING AREA END */}
                </div>
            </section>
            {/* Footer Start */}
        </>
    );
}
