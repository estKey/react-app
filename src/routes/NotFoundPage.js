import React from 'react'
import FooterTab from "../components/layout/footer/FooterTab";

function NotFoundPage() {
    return (
        <div id="Not-Found" style={{display:"block",height:"100%"}}>
            <section style={{height:"100%"}}>
                <section className="App-body">
                    <h1>Ops, Page Not Found!</h1>
                </section>
            </section>
            <section className="App-footer">
                <footer >
                    <FooterTab/>
                </footer>
            </section>
        </div>
    );
}

NotFoundPage.propTypes = {
};

export default NotFoundPage;