import Layout from "../components/MyLayout";
import Link from "next/link";
import * as Amp from 'react-amphtml';
import React from 'react';
import { connect } from "react-redux";
import { DemoModel } from "../components/reusableComponents/Models/DemoModel";
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
                <button onMouseOver={(event)=>{console.log('>>',event.pageX);}}>Create User</button>
                <ul>
                    <PostLink title="Hello Next.js" />
                    <PostLink title="Learning Next is awesome" />
                    <PostLink title="Deploy apps with Zeit" />

                </ul>
                <Amp.AmpList
                    className="stories-list"
                    specName="default"
                    src={(
                        `https://www.graphqlhub.com/graphql?query=${
                        encodeURIComponent(`
                            {
                              hn {
                                topStories {
                                  id
                                  title
                                  score
                                  descendants
                                }
                              }
                            }
                          `)
                        }`
                    )}
                    items="data.hn.topStories"
                    layout="responsive"
                    height="800"
                    width="800"
                >
                    <Amp.Template type="amp-mustache" specName="default" >
                        <div>{"{{title}}"}</div>
                    </Amp.Template>
                </Amp.AmpList>
            </div>
        )
    }
}

export default Layout(connect(state => ({ users: DemoModel.list() }))(Index));