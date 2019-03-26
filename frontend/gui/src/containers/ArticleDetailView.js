import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetail extends React.Component {
    debugger;

    state = {
        article: {}
    }

    componentDidMount() {
        debugger;
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
    }

    render() {
        debugger;
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}
export default ArticleDetail;
