import { useState } from "react"; 
import Swal from "sweetalert2";
import CustomFormSelect from "@/components/elements/CustomFormSelect";

const countryOptions = [
    { value: 'United States', label: 'United States' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'France', label: 'France' }
];

export default function CheckoutSection() {
    const [selectedBillingCountry, setSelectedBillingCountry] = useState<string>("");
    const [selectedShippingCountry, setSelectedShippingCountry] = useState<string>("");

    const [couponOpen, setCouponOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [shipDifferentOpen, setShipDifferentOpen] = useState(false);
    const [activePayment, setActivePayment] = useState('bank');
    const [isCouponLoading, setIsCouponLoading] = useState(false);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

    const handleCouponSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsCouponLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsCouponLoading(false);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Coupon applied successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        e.currentTarget.reset();
    };

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoginLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoginLoading(false);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        e.currentTarget.reset();
    };

    const handleCheckoutSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Basic validation check (e.g., check for required fields)
        const firstName = formData.get("billing_firstname");
        const lastName = formData.get("billing_lastname");
        const email = formData.get("billing_email");
        const phone = formData.get("billing_phone");
        const street = formData.get("billing_street");
        const postcode = formData.get("billing_postcode");

        if (firstName && lastName && email && phone && street && postcode) {
            setIsCheckoutLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsCheckoutLoading(false);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Order placed successfully!",
                text: "Thank you for your purchase.",
                showConfirmButton: false,
                timer: 2000
            });
            form.reset();
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill in all required fields",
                showConfirmButton: true
            });
        }
    };

    return (
        <>
            {/* Checkout Section Start */}
            <section className="checkout-section sec-padding">
                <div className="container">
                    <div className="row checkout-coupon mb-5 pb-4">
                        <div className="col-lg-7 mb-2 mb-lg-0">
                            <div className="bg-shade p-4 rounded-4 me-lg-2 coupon-wrap">
                                <h6>
                                    Have a coupon?
                                    <button
                                        type="button"
                                        onClick={() => setCouponOpen(!couponOpen)}
                                        aria-expanded={couponOpen}
                                        aria-controls="checkoutCouponform"
                                    >
                                        Click here and enter your code.
                                    </button>
                                </h6>

                                <div
                                    className={`collapse mt-4 ${couponOpen ? 'show' : ''}`}
                                    id="checkoutCouponform"
                                >
                                    <form className="checkout-couponform d-sm-flex justify-content-between" onSubmit={handleCouponSubmit}>
                                        <input
                                            className="ps-4 form-control"
                                            type="text"
                                            id="coupon-field"
                                            name="coupon_code"
                                            placeholder="Enter coupon code"
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary mt-2 mt-sm-0"
                                            disabled={isCouponLoading}
                                        >
                                            {isCouponLoading ? <><i className="fa fa-spinner fa-spin me-2"></i> Processing...</> : "Apply Coupon"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-shade p-4 rounded-4 ms-xl-5">
                                <h6>

                                    Returning Customer?
                                    <button
                                        type="button"
                                        onClick={() => setLoginOpen(!loginOpen)}
                                        aria-expanded={loginOpen}
                                        aria-controls="checkout-login"
                                    >
                                        Click here to login
                                    </button>
                                </h6>
                                <div
                                    className={`collapse mt-4 ${loginOpen ? 'show' : ''}`}
                                    id="checkout-login"
                                >
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="col-12 mb-2">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username or Email"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-primary mt-3"
                                            type="submit"
                                            disabled={isLoginLoading}
                                        >
                                            {isLoginLoading ? <><i className="fa fa-spinner fa-spin me-2"></i> Processing...</> : "Log in"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="form checkout-form" onSubmit={handleCheckoutSubmit}>
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h3 className="display-5">Billing Details:</h3>
                                {/* Billing Form */}
                                <div className="checkout-billingform bg-shade rounded p-lg-5 p-3 mt-5">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-firstname">
                                                First name*
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-firstname"
                                                name="billing_firstname"
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-lastname">
                                                Last name*
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-lastname"
                                                name="billing_lastname"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-country">
                                                Country
                                            </label>
                                            <CustomFormSelect optionArray={countryOptions}
                                                value={selectedBillingCountry}
                                                onChange={(v) => setSelectedBillingCountry(v)}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-street">
                                                Street address *
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-street"
                                                name="billing_street"
                                                placeholder="Street address"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-state">
                                                State:
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-state"
                                                name="billing_state"
                                                placeholder="State"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-postcode">
                                                Postcode:
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-postcode"
                                                name="billing_postcode"
                                                placeholder="Postcode"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-phone">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-phone"
                                                name="billing_phone"
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="billingform-email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="billingform-email"
                                                name="billing_email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="billingform-company1">
                                                Company (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                id="billingform-company1"
                                                name="billing_company"
                                                placeholder="Company "
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message-order">
                                                Order notes (Optional)
                                            </label>
                                            <textarea
                                                name="order_notes"
                                                rows={6}
                                                id="message-order"
                                                placeholder="Order message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    {/* Different Ship Address Form */}
                                    <div className="col-12  mt-4">
                                        <input
                                            type="checkbox"
                                            name="ship_to_different_address"
                                            id="billform-dirrentswitch"
                                            onChange={() => setShipDifferentOpen(!shipDifferentOpen)}
                                            checked={shipDifferentOpen}
                                        />

                                        <label
                                            htmlFor="billform-dirrentswitch"
                                            onClick={() => setShipDifferentOpen(!shipDifferentOpen)}
                                            aria-expanded={shipDifferentOpen}
                                            aria-controls="collapseExample"
                                        >
                                            Ship to another Address
                                        </label>
                                    </div>
                                    <div
                                        className={`collapse row ${shipDifferentOpen ? 'show' : ''}`}
                                        id="collapseExample"
                                    >
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-firstname2">
                                                First name*
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-firstname2"
                                                name="shipping_firstname"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-lastname">
                                                Last name*
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-lastname"
                                                name="shipping_lastname"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-country">
                                                Country
                                            </label>
                                            <CustomFormSelect optionArray={countryOptions}
                                                value={selectedShippingCountry}
                                                onChange={(v) => setSelectedShippingCountry(v)}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-street">
                                                Street address *
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-street"
                                                name="shipping_street"
                                                placeholder="Street address"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-state">
                                                State:
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-state"
                                                name="shipping_state"
                                                placeholder="State"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-postcode">
                                                Postcode:
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-postcode"
                                                name="shipping_postcode"
                                                placeholder="Postcode"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-phone">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-phone"
                                                name="shipping_phone"
                                                placeholder="Phone"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="shipform-email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="shipform-email"
                                                name="shipping_email"
                                                placeholder="Email Address"
                                            />
                                        </div>

                                        <div className="clearfix"></div>
                                        <div className="col-12">
                                            <label htmlFor="shipform-company">
                                                Company (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                id="shipform-company"
                                                name="shipping_company"
                                                placeholder="Company"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="order-note2">
                                                Order notes (Optional)
                                            </label>
                                            <textarea
                                                name="shipping_order_notes"
                                                rows={6}
                                                id="order-note2"
                                                placeholder="Order message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    {/*// Different Address Form */}
                                </div>
                                {/*// Billing Form */}
                            </div>
                            <div className="col-lg-4 col-sm-8">
                                <aside className="order-summery ms-xl-5">
                                    <h3 className="display-5">Your order</h3>
                                    {/* Cart Total Start */}
                                    <div className="cart-totals mt-5 bg-shade p-4 rounded">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Products</th>
                                                    <td>Subtotals:</td>
                                                </tr>
                                                <tr className="product-list">
                                                    <th>Jabra Elite 75t</th>
                                                    <td>$40.00</td>
                                                </tr>
                                                <tr className="product-list">
                                                    <th>Jabra Elite 75t</th>
                                                    <td>$40.00</td>
                                                </tr>
                                                <tr className="product-list">
                                                    <th>Jabra Elite 75t</th>
                                                    <td>$40.00</td>
                                                </tr>
                                                <tr className="subtotal">
                                                    <th>Subtotal</th>
                                                    <td>
                                                        <span className="amount">
                                                            $242.00
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="shipping-cost">
                                                    <th>Shipping Cost</th>
                                                    <td>
                                                        <span className="amount">
                                                            $50.00
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="total">
                                                    <th>Total</th>
                                                    <td>
                                                        <strong>
                                                            <span className="amount">
                                                                $292.00
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div
                                            className="accordion payment-options"
                                            id="accordionExample"
                                        >
                                            <div className="payment-option">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingOne"
                                                >
                                                    <button
                                                        className={`accordion-button rounded-2 ${activePayment === 'bank' ? '' : 'collapsed'}`}
                                                        type="button"
                                                        onClick={() => setActivePayment('bank')}
                                                        aria-expanded={activePayment === 'bank'}
                                                        aria-controls="collapseOne"
                                                    >
                                                        Direct Bank Transfer
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseOne"
                                                    className={`accordion-collapse collapse ${activePayment === 'bank' ? 'show' : ''}`}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <strong>Note:</strong> Pay
                                                    your payment directly into
                                                    to our bank account.Your
                                                    order will not be shipped
                                                    until the funds have cleared
                                                    in our account.
                                                </div>
                                            </div>
                                            <div className="payment-option">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingTwo"
                                                >
                                                    <button
                                                        className={`accordion-button rounded-2 ${activePayment === 'cod' ? '' : 'collapsed'}`}
                                                        type="button"
                                                        onClick={() => setActivePayment('cod')}
                                                        aria-expanded={activePayment === 'cod'}
                                                        aria-controls="collapseTwo"
                                                    >
                                                        Cash On Delivery (COD)
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseTwo"
                                                    className={`accordion-collapse collapse ${activePayment === 'cod' ? 'show' : ''}`}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <strong>Note:</strong> Make
                                                    your payment directly into
                                                    to our bank account. Your
                                                    order will not be shipped
                                                    until the funds have cleared
                                                    in our account.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary d-block w-100"
                                                disabled={isCheckoutLoading}
                                            >
                                                {isCheckoutLoading ? <><i className="fa fa-spinner fa-spin me-2"></i> Processing...</> : "Place Your Order"}
                                            </button>
                                        </div>
                                    </div>
                                    {/* Cart Total End */}
                                </aside>
                            </div>
                            {/* Col End */}
                        </div>
                    </form>
                </div>
                {/*// Checkout Area */}
            </section>
            {/* Checkout Section End */}
        </>
    );
}
