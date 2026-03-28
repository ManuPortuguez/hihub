import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import { cartData } from "@/data/cartData";
import ProjectContext from "@/components/context/ProjectContext";

export default function CartSection() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setCartCount } = context;
    const [cartItems, setCartItems] = useState(cartData);
    const [loadingId, setLoadingId] = useState<number | null>(null);

    const handleIncrease = async (id: number) => {
        setLoadingId(id);
        await new Promise(resolve => setTimeout(resolve, 500));
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
        setLoadingId(null);
    };

    const handleDecrease = async (id: number) => {
        setLoadingId(id);
        await new Promise(resolve => setTimeout(resolve, 500));
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
        setLoadingId(null);
    };

    const handleRemove = async (id: number) => {
        setLoadingId(id);
        await new Promise(resolve => setTimeout(resolve, 500));
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        setCartCount(cartItems.length - 1);
        setLoadingId(null);
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shippingCost = 50;
    const total = subtotal + shippingCost;

    return (
        <>
            {/* Cart Section Start */}
            <div className="cart-section sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="entry-content">
                                    <div className="woocommerce rounded bg-light">
                                        <div className="woocommerce-notices-wrapper"></div>
                                        <form className="woocommerce-cart-form">
                                            <table className="table shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                                                <thead className="shadow-sm">
                                                    <tr>
                                                        <th className="product-name">
                                                            Product
                                                        </th>
                                                        <th className="product-remove">
                                                            &nbsp;
                                                        </th>
                                                        <th className="product-price">
                                                            Price
                                                        </th>
                                                        <th className="product-quantity">
                                                            Quantity
                                                        </th>
                                                        <th className="product-subtotal">
                                                            Total
                                                        </th>
                                                        <th className="product-thumbnail">
                                                            &nbsp;
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartItems.map((item) => (
                                                        <tr
                                                            key={item.id}
                                                            className="woocommerce-cart-form__cart-item cart_item"
                                                        >
                                                            <td className="product-thumbnail">
                                                                <Link to={item.link}>
                                                                    <img
                                                                        width="80"
                                                                        src={item.img}
                                                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                        alt={item.title}
                                                                    />
                                                                </Link>
                                                            </td>

                                                            <td
                                                                className="product-name"
                                                                data-title="Product"
                                                            >
                                                                <Link to={item.link}>
                                                                    {item.title}
                                                                </Link>
                                                            </td>

                                                            <td
                                                                className="product-price"
                                                                data-title="Price"
                                                            >
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <span className="woocommerce-Price-currencySymbol">
                                                                        $
                                                                    </span>
                                                                    {item.price.toFixed(2)}
                                                                </span>
                                                            </td>

                                                            <td
                                                                className="product-quantity"
                                                                data-title="Quantity"
                                                            >
                                                                <div className="quantity d-flex align-items-center">
                                                                    <input
                                                                        type="button"
                                                                        value="-"
                                                                        className="qty_button minus"
                                                                        onClick={() => handleDecrease(item.id)}
                                                                        disabled={loadingId === item.id}
                                                                        style={{ opacity: loadingId === item.id ? 0.5 : 1 }}
                                                                    />
                                                                    <input
                                                                        type="number"
                                                                        className="input-text qty text"
                                                                        step="1"
                                                                        value={item.quantity}
                                                                        readOnly
                                                                        name="quantity"
                                                                    />
                                                                    <input
                                                                        type="button"
                                                                        value="+"
                                                                        className="qty_button plus"
                                                                        onClick={() => handleIncrease(item.id)}
                                                                        disabled={loadingId === item.id}
                                                                        style={{ opacity: loadingId === item.id ? 0.5 : 1 }}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="product-subtotal"
                                                                data-title="Total"
                                                            >
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <span className="woocommerce-Price-currencySymbol">
                                                                        $
                                                                    </span>
                                                                    {(item.price * item.quantity).toFixed(2)}
                                                                </span>
                                                            </td>
                                                            <td className="product-remove">
                                                                <button
                                                                    type="button"
                                                                    className="remove"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleRemove(item.id);
                                                                    }}
                                                                    disabled={loadingId === item.id}
                                                                    style={{
                                                                        border: "none",
                                                                        background: "transparent",
                                                                        padding: 0,
                                                                        opacity: loadingId === item.id ? 0.5 : 1,
                                                                        cursor: loadingId === item.id ? "not-allowed" : "pointer"
                                                                    }}
                                                                >
                                                                    {loadingId === item.id ? <i className="fa fa-spinner fa-spin text-dark"></i> : <i className="fa fa-times text-danger"></i>}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {/* cart item end */}
                                                    <tr>
                                                        <td
                                                            colSpan={6}
                                                            className="actions cart-form-footer mt-3 p-3"
                                                        >
                                                            <div className="bottom-cart d-flex justify-content-between align-items-center flex-wrap">
                                                                <div className="coupon mb-3 mb-sm-0">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Coupon Code"
                                                                    />
                                                                    <button className="btn btn-success text-info">
                                                                        Apply
                                                                        Coupon
                                                                    </button>
                                                                </div>
                                                                <Link
                                                                    to="/shop"
                                                                    className="btn btn-primary"
                                                                >
                                                                    Continue
                                                                    Shopping
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-lg-4">
                            {/* Cart Total Start */}
                            <aside className="cart-totals ms-lg-4 p-lg-5 p-3 rounded bg-light">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Products</th>
                                            <td>Subtotals:</td>
                                        </tr>
                                        {cartItems.map((item) => (
                                            <tr className="product-list" key={item.id}>
                                                <th>{item.title}</th>
                                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                        <tr className="subtotal">
                                            <th>Subtotal</th>
                                            <td>
                                                <span className="amount">
                                                    ${subtotal.toFixed(2)}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="shipping-cost">
                                            <th>Shipping Cost</th>
                                            <td>
                                                <span className="amount">
                                                    ${shippingCost.toFixed(2)}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="total">
                                            <th>Total</th>
                                            <td>
                                                <strong>
                                                    <span className="amount">
                                                        ${total.toFixed(2)}
                                                    </span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center mt-4">
                                    <Link
                                        to="/checkout"
                                        className="btn btn-primary"
                                    >
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </aside>
                            {/* Cart Total End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Cart Section End */}
        </>
    );
}
