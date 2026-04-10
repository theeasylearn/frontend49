import {toast, Bounce } from 'react-toastify';

var options = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
};
export function showError(message = 'oops, it seems you are offline') {
    toast.error(message, options);
}

export function showMessage(message) {
    toast.success(message, options);
}