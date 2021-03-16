import { Form, Input, Button, Checkbox } from 'antd';

import s from './style.module.css'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const SigninForm = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            className={s.signinModal}
            {...layout}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
    <Form.Item
        label="Username"
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>

            <div className={s.signinModalLower}>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox className={s.signinModalAgreement}>Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
    <Button className={s.registerBtn} type="primary" htmlType="submit">
        Submit
        </Button>

        </Form.Item>
            </div>

        </Form>
);
};
