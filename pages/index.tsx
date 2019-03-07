import Layout from "../components/MyLayout";
import Link from "next/link";
import * as Amp from 'react-amphtml';
import React from 'react';
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
class Index extends React.PureComponent<{}, IIndexState> {

    state = {
        inputVal: 'Hello'
    }

    handleChange = e => this.setState({ inputVal: e.currentTarget.value })

    render() {
        const { inputVal } = this.state;
        return (
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    <PostLink title="Hello Next.js" />
                    <PostLink title="Learning Next is awesome" />
                    <PostLink title="Deploy apps with Zeit" />

                </ul>efwwef
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
                      layout="fill"

                >
                    <Amp.Template type="amp-mustache" specName="default" >
                        <div>{"{{title}}"}</div>
                    </Amp.Template>
                </Amp.AmpList>
            </Layout>
        )
    }
}

export default Index;