import React, {Component, Fragment} from 'react';

class App extends Component{
    hello = "hello world Art!";
    render() {
        return(
            <Fragment>
                <div>{this.hello}</div>
            </Fragment>
        )
    }
}

export default App
