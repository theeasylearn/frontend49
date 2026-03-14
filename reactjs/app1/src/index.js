import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Instagram() {
    //create state variable for each and every input 

    let [isliked,setIsLiked] = useState(false);
    let [isboookmarked,setIsBookmarked] = useState(false);

    return (<div className="container py-5">
        <div className="row justify-content-center">
            <div className='card shadow'>
                <div className='card-body'>
                    <div className="col-12 col-xl-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="https://picsum.photos/id/201/800/600?random=2" alt="Xi Jinping speaking at podium" className="img-fluid" />
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    {/* IG Post Header */}
                                    <div className="card-header d-flex align-items-center">
                                        <img src="https://picsum.photos/id/64/48/48" className="rounded-circle border border-2 border-white shadow-sm" width={48} height={48} alt="achhevichar" />
                                        <div className="ms-3 flex-grow-1">
                                            <span className="ig-username">achhevichar</span>
                                            <span className="verified ms-1">✔</span>
                                        </div>
                                        <button className="btn btn-link text-dark p-0">
                                            <i className="bi bi-three-dots fs-4" />
                                        </button>
                                    </div>
                                    {/* Caption (exact text from screenshot) */}
                                    <div className="px-4 pt-2 pb-3 border-bottom">
                                        <p className="ig-caption mb-2">
                                            this is post heading
                                        </p>
                                        <div className="text-primary small">
                                            #China #Iran #HumanitarianAid #WorldNews #GlobalPolitics
                                        </div>
                                    </div>
                                    {/* Comments Section */}
                                    <div className="card-body">
                                        <div className="px-4 py-3" style={{ "max-height": "420px", "overflow-y": "auto" }}>
                                            {/* Comment 1 */}
                                            <div className="d-flex mb-3">
                                                <img src="https://picsum.photos/id/64/36/36" className="rounded-circle me-3" width={36} height={36} alt />
                                                <div className="flex-grow-1 comment">
                                                    <span className="comment-username">amson_panesar</span>
                                                    <p>this is nice</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Action bar + likes */}
                                        <div className="px-4 py-3 border-top bg-white">
                                            <div className="ig-icons d-flex justify-content-between mb-2">
                                                <div>
                                                    <i className="bi bi-heart me-3" />
                                                </div>
                                                <i className="bi bi-bookmark" />
                                            </div>
                                        </div>
                                        {/* Add comment box */}
                                        <div className="card-footer bg-light border-top p-3">
                                            <div className="d-flex align-items-center">
                                                <input type="text" className="form-control border-2 bg-transparent" placeholder="Add a comment..." style={{ "font-size": "1rem" }} />
                                                <button className="btn btn-link text-primary fw-semibold border-2">Post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Instagram />);
