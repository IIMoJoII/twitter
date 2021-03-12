import { Form, Input, Button, Checkbox } from 'antd';
import '../pages/signin.css'



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
            className="signin-modal__form"
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

            <div className="signin-modal__lower">
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox className="signin-modal__agreement">Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
    <Button className="signin-modal__register-btn" type="primary" htmlType="submit">
        Submit
        </Button>

        </Form.Item>
            </div>

        </Form>
);
};
