import Ship from "@/images/ship.jpg";
import Swal from "sweetalert2";

export default function TrackingPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const trackingId = formData.get("trackingId") as string;
        const email = formData.get("email") as string;

        // Validate all fields are filled
        if (trackingId && email) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Tracking information submitted!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
    };

    return (
        <>
            {/* Quote Section Start */}
            <section className="tracking-page sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="tracking-form2"
                                style={{ backgroundImage: `url(${Ship})` }}
                            >
                                <div className="form-inner round">
                                    <h2 className="display-3">
                                        Package Tracking
                                    </h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <label htmlFor="id">
                                                    Tracking ID
                                                </label>
                                                <input
                                                    type="text"
                                                    name="trackingId"
                                                    placeholder="Tracking ID"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="id">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="info@example.com"
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-5">
                                                <button className="btn btn-primary w-100">
                                                    Track & trach
                                                    <i className="fa fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
