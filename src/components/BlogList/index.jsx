import React from 'react'
import { List, Avatar } from 'antd';

const listData = [{// 数据
    href: 'https://ant.design',
    time: "2020-10-1",
    title: `如何实现bilibili最新头部景深效果~炫酷`,
    avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.'
}, 
  {// 数据
    href: 'https://ant.design',
    time: "2020-10-1",
    title: `如何实现bilibili最新头部景深效果~炫酷`,
    avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.'
},{// 数据
    href: 'https://ant.design',
    time: "2020-10-1",
    title: `如何实现bilibili最新头部景深效果~炫酷`,
    avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.'
},{// 数据
  href: 'https://ant.design',
  time: "2020-10-1",
  title: `如何实现bilibili最新头部景深效果~炫酷`,
  avatar: 'https://s3.ax1x.com/2021/01/25/sOPFaj.jpg',
  description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.'
}
];

const BlogList = () => {
  return (
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={150}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        <span style={{marginLeft: "50px", color: "#aaa"}}>{item.time}</span>
      </List.Item>
    )}
  />)
}

export default BlogList



