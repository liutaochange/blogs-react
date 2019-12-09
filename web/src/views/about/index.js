import React from 'react'
import { Divider, Icon, Rate } from 'antd'
import './index.less'

const About = () => {
  return (
    <div className="about-container">
      <Divider orientation="left">简述</Divider>
      <p>本站点使用的技术为 react + antd + koa2 + mysql</p>
      <p>
        源码地址为{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/liutaochange/blogs-react"
        >
          github
        </a>
        ，仅供参考，不做商业用途！
      </p>
      <Divider orientation="left">关于我</Divider>
      <ul className="about-list">
        <li>花名：东邪</li>
        <li>
          学历专业：本科
          <Divider type="vertical" />
          计算机
        </li>
        <li>
          联系方式：
          <Icon
            type="mail"
            style={{ color: 'rgb(176, 177, 181)', marginRight: 4 }}
          />
          <a href="mailto:792223253@qq.com">792223253@qq.com</a>
        </li>
        <li>坐标：北京</li>
        <li>
          技能
          <ul>
            <li>
              HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <Rate defaultValue={4} disabled />
            </li>
            <li>
              react vue RN 框架：熟练使用！
              <Rate defaultValue={4} disabled />
            </li>
            <li>
              es6：日常开发必备
              <Rate defaultValue={4} disabled />
            </li>
            <li>
              webpack: 熟悉loader，plugin，处理项目打包优化。
              <Rate defaultValue={4} disabled />
            </li>
            <li>
              node mysql：可以完成简单的数据库设计、接口的开发与设计！
              <Rate defaultValue={2} disabled />
            </li>
          </ul>
        </li>
        <li>
          个人
          <ul>
            <li>游泳，健身，看书</li>
            <li>想做全栈，但不止于全栈</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default About
