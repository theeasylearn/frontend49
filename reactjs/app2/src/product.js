export default function Product() {
    return (
        <div className="container">
            <div className="row mt-20 mb-20">
                <div className="col-12 text-center">
                    <h2>Products</h2>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="product-style-7 mt-30 shadow">
                        <div className="product-image">
                            <div className="product-active">
                                <div className="product-item active">
                                    <img src="assets/images/product-4/product-1.jpg" alt="product" />
                                </div>
                                <div className="product-item">
                                    <img src="assets/images/product-4/product-2.jpg" alt="product" />
                                </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <ul className="product-meta">
                                <li>
                                    <a className="add-wishlist" href="javascript:void(0)">
                                        <i className="mdi mdi-heart-outline" />
                                        Add to Favorite
                                    </a>
                                </li>
                                <li>
                                    <span><i className="mdi mdi-star" /> 4.5/5</span>
                                </li>
                            </ul>
                            <h4 className="title">
                                <a href="product-details-page.html">Metro 38 Date</a>
                            </h4>
                            <p>Reference 1102</p>
                            <span className="price">$ 399</span>
                            <a href="javascript:void(0)" className="main-btn primary-btn">
                                <img src="assets/images/icon-svg/cart-4.svg" alt />
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}