export default function ProductDetail() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-30 mb-30">
                    <div className="card shadow">
                        <div className="card-header">
                            <h2>Product Name</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="https://picsum.photos/400" />
                                </div>
                                <div className="col-lg-8">
                                    <table className="table">
                                        <tbody><tr>
                                            <td width="40%">ID</td>
                                            <td />
                                        </tr>
                                            <tr>
                                                <td width="40%">Category</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Price</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Stock</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Weight</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Size</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Detail</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <button className="btn btn-primary">Add to cart</button>
                                                    <button className="btn btn-info">Add to wishlist</button>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}