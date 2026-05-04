import React from "react";

export default class PrintOrder extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        window.print();
    }

    render() {
        return (
            <div style={{ margin: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#333" }}>
                <style>
                    {`
                    @media print {
                        .no-print {
                            display: none;
                        }
                        body {
                            font-size: 12pt;
                        }
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    th, td {
                        border: 1px solid #999;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    .text-end {
                        text-align: right;
                    }
                    .header-banner {
                        background-color: #3b7ddd;
                        color: white;
                        padding: 15px;
                        margin-bottom: 20px;
                    }
                    `}
                </style>
                <div className="header-banner">
                    <h2 style={{ margin: 0 }}>Order Detail</h2>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th width="25%">Order ID</th>
                            <td width="25%">12345</td>
                            <th width="25%">Customer Name</th>
                            <td width="25%">John Doe</td>
                        </tr>
                        <tr>
                            <th>Order Date</th>
                            <td>2023-10-01</td>
                            <th>Address</th>
                            <td>123 Main Street</td>
                        </tr>
                        <tr>
                            <th>Amount</th>
                            <td>$1,25,000.00</td>
                            <th>City</th>
                            <td>Bhavnagar</td>
                        </tr>
                        <tr>
                            <th>Payment Status</th>
                            <td>Paid</td>
                            <th>Pincode</th>
                            <td>364001</td>
                        </tr>
                        <tr>
                            <th colSpan="2">Remarks</th>
                            <td colSpan="2">Fragile - Handle with care</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th width="15%">Product ID</th>
                            <th>Product Name</th>
                            <th width="15%" className="text-end">Price</th>
                            <th width="10%" className="text-end">Qty</th>
                            <th width="20%" className="text-end">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>iPhone 17 Pro Max</td>
                            <td className="text-end">1,25,000</td>
                            <td className="text-end">1</td>
                            <td className="text-end">1,25,000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4" className="text-end">Total Amount:</th>
                            <th className="text-end">1,25,000</th>
                        </tr>
                    </tfoot>
                </table>

                <div className="no-print" style={{ marginTop: "30px", textAlign: "center" }}>
                    <button onClick={() => window.print()} style={{ padding: "10px 20px", cursor: "pointer" }}>Print This Page</button>
                </div>
            </div>
        );
    }
}
