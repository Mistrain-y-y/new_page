import React from 'react'
import "./style.css"
import { List, Avatar } from 'antd';

const listData = [
  {// 数据
    href: '/blog/detail/a03',
    time: "2020-12-05",
    title: `JS 命令式 声明式 函数式 编程?`,
    avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
    img: 'https://s3.ax1x.com/2021/03/02/6kWBo6.png',
    description: '命令式 声明式 函数式 编程是啥? ——烟雨仔的读书笔记'
  },
  {// 数据
    href: '/blog/detail/a02',
    time: "2020-10-01",
    title: `如何实现bilibili最新头部景深效果~炫酷`,
    avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
    img: 'https://s3.ax1x.com/2021/01/27/sx8nmT.jpg',
    description: '本篇新手教程, 主要运用鼠标的 mousemove 事件进行动画效果的实现. 有不正确的地方望指正~'
  },
  {// 数据
    href: '/blog/detail/a01',
    time: "2020-09-26",
    title: `恐龙和恐龙的朋友们~`,
    avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
    img: 'https://s3.ax1x.com/2021/03/02/6kGRSg.jpg',
    description: '这里是恐龙一族的烟雨恐龙，和她的恐龙伙伴们~'
  }

  // {// 数据
  //   href: 'https://ant.design',
  //   time: "2020-10-1",
  //   title: `白话`,
  //   avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
  //   img: 'https://s3.ax1x.com/2021/01/27/sx8nmT.jpg',
  //   description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.'
  // }
]

const BlogList = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
        },
        pageSize: 3,
      }}
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <a href={item.href}>
              <img
                className="list-img"
                alt="logo"
                src={item.img}
              /></a>
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          <span style={{ marginLeft: "50px", color: "#aaa" }}>{item.time}</span>
        </List.Item>
      )}
    />)
}

export default BlogList



