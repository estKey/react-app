import React from 'react'

function NotFoundPage() {
    return (
        <div className=" ">
            <h1 className=" ">Oops, Page Not Found!</h1>

            <ul className=" ">
                <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
            </ul>
        </div>
    );
}

NotFoundPage.propTypes = {
};

export default NotFoundPage;