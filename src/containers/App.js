import React, { Component } from 'react';
import logo from '../assets/logos/logo.svg';
import './App.css';
import actions from '../store/actions/index.js';
import { connect } from 'react-redux';
import Text from "../components/Text";

class App extends Component {
  changeLanguage() {
    let lang = this.props.locale;
    lang = lang === 'zh' ? 'en' : 'zh';
    this.props.changeLanguage(lang);
  }
  render() {
    const { locale } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <Text
              id="hello"
            />
          </h1>
            <p className="App-intro">
                <Text
                    id="name"
                    values={{ name: <b>{'Art'}</b> }}
                />
            </p>
            <button onClick={() => this.changeLanguage()}>{locale === 'zh' ? '英文' : 'Chinese'}</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  locale: state.root.language,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeLanguage: (val) => dispatch(actions.changeLanguage(val))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
