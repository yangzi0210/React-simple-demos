// import logo from './logo.svg';
import "./App.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Image } from "antd";
import { Card } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const labelInfoUser = (
  <span style={{ color: "black", fontSize: 16 }}>Username</span>
);
const labelInfoPass = (
  <span style={{ color: "black", fontSize: 16 }}>Password</span>
);
const App = () => (
  <div className="parent">
    <header className="App-header">
      <div className="children">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {/* <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" /> */}
          <Image
            width={300}
            className="App-logo"
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </Image.PreviewGroup>
      </div>
      <div className="children">
        <Card
          title="Card React"
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 800,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              // label="Username"
              label={labelInfoUser}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              // label="Password"
              label={labelInfoPass}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox className="My-font">Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="My-btn">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </header>
  </div>
);
export default App;
