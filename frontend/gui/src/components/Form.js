import React from 'react';

import { Form, Input, Button } from 'antd';


class CustomForm extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Give a Title Here" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Write Content Here" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div >
        );
    }
} export default CustomForm;