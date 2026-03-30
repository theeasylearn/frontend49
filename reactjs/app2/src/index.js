import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function Post(props) {
    return (<tr>
        <td>{props.postid}</td>
        <td>{props.userid}</td>
        <td>{props.title}</td>
        <td>{props.detail}</td>
    </tr>);
}
function DisplayPosts() {
    //create state array
    let [posts, setPosts] = useState([]);
    //use useEffect Hook
    useEffect(() => {
        let apiAddress = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiAddress)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((error) => console.log(error));
    });
    return (<div className="container mt-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="card shadow">
                    <div className="card-header text-bg-primary text-white">
                        <h4 className="mb-0">Posts Data</h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>User ID</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {posts.map((item) => {
                                        return <Post postid={item.id} userid={item.userId}
                                        title={item.title} detail={item.body} />
                                   })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<DisplayPosts />);
