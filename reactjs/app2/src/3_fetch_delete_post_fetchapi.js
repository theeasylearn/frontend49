import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


//function components
function DisplayPosts() {
    let [posts, setPosts] = useState([]);

    let deletePost = function (postid) {
        //alert(postid);
        let temp = posts.filter((item) => {
            //console.log(item, postid);
            if (item.id !== postid)
                return item;
        });
        setPosts(temp);
    }
    //create state array
    //functional components
    let Post = function (props) {
        return (<tr>
            <td>{props.postid}</td>
            <td>{props.userid}</td>
            <td>{props.title}</td>
            <td>{props.detail}</td>
            <td><button onClick={() => deletePost(props.postid)} type="button" className='btn btn-danger'>Delete</button></td>
        </tr>);
    }
    //use useEffect Hook
    useEffect(() => {
        if (posts.length === 0) {
            let apiAddress = "https://jsonplaceholder.typicode.com/posts";
            fetch(apiAddress)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setPosts(data);
                })
                .catch((error) => console.log(error));
        }
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
                                        <th>Action</th>
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
