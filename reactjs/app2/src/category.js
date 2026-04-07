export default function Category() {
    return (
        <div className="container">
            <div className="row mt-20 mb-20">
                <div className="col-12 text-center">
                    <h2>Categories</h2>
                </div>
                <div className="col-lg-3 col-sm-4 ">
                    <div className="card shadow">
                        <img src="https://picsum.photos/300?random=1" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="title text-center">
                                <a href="product-details-page.html">Metro 38 Date</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}