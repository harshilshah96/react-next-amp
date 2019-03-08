import Layout from "../components/MyLayout";
import Link from "next/link";
import * as Amp from 'react-amphtml';
import React from 'react';
import { connect } from "react-redux";
import { DemoModel } from "../components/reusableComponents/Models/DemoModel";
import List from '../base_components/List';
import Template from '../base_components/Template';
import Card from "../components/Card";

const PostLink = (props: { title: string }) => (
    <li>
        <Link href={{ pathname: '/post', query: { title: props.title } }}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export interface IIndexState {
    inputVal: string;
}
class Index extends React.PureComponent<any, IIndexState> {

    state = {
        inputVal: 'Hello'
    }

    componentDidMount() {

    }

    handleChange = e => this.setState({ inputVal: e.currentTarget.value })

    Img = () => <amp-img height="200" width="200" src="../static/255993.jpg" />

    createModel = () => {
        new DemoModel({ id: '123', name: 'Vaishali', title: 'Hello Harshil' }).$save();
    }
    /* tslint: disable */
    render() {
        console.log('>>this.props', this.props);
        return (
            <div>
                <h1>My Blog</h1>
                <button onClick={this.createModel}>Create User</button>
                <ul>
                    <PostLink title="Hello Next.js" />
                    <PostLink title="Learning Next is awesome" />
                    <PostLink title="Deploy apps with Zeit" />
                </ul>
                <Amp.AmpList
                    specName="default"
                    width="auto"
                    height="100"
                    layout="fixed-height"
                    src="//www.json-generator.com/api/json/get/bUSavorYwO?indent=2">
                    <Amp.Template
                        type="amp-mustache"
                        specName="default"
                        >
                        <div className="url-entry">
                            <div>{`{{ title }}`}</div>
                        </div>
                    </Amp.Template>
                </Amp.AmpList>
            </div>
        )
    }
}

export default Layout(connect(state => ({ users: DemoModel.list() }))(Index));