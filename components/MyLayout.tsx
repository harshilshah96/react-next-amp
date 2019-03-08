import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../store";
import * as React from 'react';
const layoutStyle: React.CSSProperties = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
const Layout = (Page) => class PageWrapper extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <div onClick={(event) => { console.log('>>123123', 123123); }}>Demo1234</div>
                <Header />
                <Page />
            </Provider>
        )
    }
};

export default Layout;