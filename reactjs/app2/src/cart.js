export default function Cart() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <section className="checkout-wrapper pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="checkout-style-1">
                                    <div className="checkout-table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product">Product</th>
                                                    <th className="quantity">Quantity</th>
                                                    <th className="price">Price</th>
                                                    <th className="action">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="product-cart d-flex">
                                                            <div className="product-thumb">
                                                                <img src="assets/images/product-cart/product-1.png" alt="Product" />
                                                            </div>
                                                            <div className="product-content media-body">
                                                                <h5 className="title">
                                                                    <a href="product-details-page.html">Hollow Port</a>
                                                                </h5>
                                                                <span>UG 0123</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        <p className="price">$36.00</p>
                                                    </td>
                                                    <td>
                                                        <ul className="action">
                                                            <li>
                                                                <a className="favorite" href="javascript:void(0)"><i className="mdi mdi-heart-outline" /></a>
                                                            </li>
                                                            <li>
                                                                <a className="delete" href="javascript:void(0)"><i className="mdi mdi-delete" /></a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap">
                                        <div className="checkout-coupon">
                                            <span>Apply Coupon to get discount!</span>
                                            <form action="#">
                                                <div className="single-form form-default d-flex">
                                                    <div className="form-input form">
                                                        <input type="text" placeholder="Coupon Code" />
                                                    </div>
                                                    <button className="main-btn primary-btn">Apply</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="checkout-total">
                                            <div className="single-total total-payable">
                                                <p className="value">Total Payable:</p>
                                                <p className="price">$165.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-btn d-sm-flex justify-content-between">
                                        <div className="single-btn">
                                            <a href="javascript:void(0)" className="main-btn primary-btn-border">continue
                                                shopping</a>
                                        </div>
                                        <div className="single-btn">
                                            <a href="checkout-page.html" className="main-btn primary-btn">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    );
}