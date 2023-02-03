import React from "react";
import { Menu, Button, DatePicker, Space, version } from "antd";
import { BackgroundImage, Container, LoginForm, LoginButton, LoginTittle, RadioText, LoginInput, LoginPassword } from "../utils/style"
import { Col, Row, Form, Input, Image, Radio } from 'antd';
import { Typography } from 'antd';
import imageLink from "../assets/Group_59.png"
const { Title } = Typography;

const App = () => {
  return (
    <BackgroundImage>
      <Container>

        <Row style={{
          // backgroundColor: 'red',
          width: '100%',
        }}>
          <Col span={12} style={{ /*backgroundColor: 'red' */ }}>

            <Row>
              <Image
                preview={false}
                width={104}
                height={100}
                src={imageLink}
              />
            </Row>
            <Row>
              <LoginTittle>Improving the online commercial life for everyone</LoginTittle>

            </Row>
            <Row>
              <Radio>
                <RadioText>
                  Lorem ipsum dolor sit amet consectetur. Urna vel integer tellus iaculis imperdiet vulputate orci facilisis.
                </RadioText>
              </Radio>
            </Row>
          </Col>

          <Col span={10}>
            <LoginForm
              name="basic"
              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[{ required: true }]}
              >
                <LoginInput placeholder="Email" />
              </Form.Item>

              <Form.Item rules={[{ required: true }]}>
                <LoginInput placeholder="Full name" />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[{ required: true }]}
              >
                <LoginInput placeholder="Phone" />
              </Form.Item>
              <Form.Item
                name="myPasswordnew"
                rules={[{ required: true }]}
              >
                <LoginPassword placeholder="Enter Password" />
              </Form.Item>
              <Form.Item
                name="myPassword"
                rules={[{ required: true }]}
              >
                <LoginPassword placeholder="Enter Password" />
              </Form.Item>

              <LoginButton type="primary" htmlType="submit">
                Submit
              </LoginButton >
            </LoginForm>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  )
}

export default App

