import React, { useEffect, useState } from 'react';
import SiteMenu from './menu';
import SiteFooter from './site_footer';
import ReactDOM from 'react-dom/client';
function Template() {
    return (<div>
        <SiteMenu />
        <SiteFooter />
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Template />);
