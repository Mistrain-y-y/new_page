import { Layout } from 'antd'
import './style.css'

const { Footer } = Layout

const Foot = () => {
  return (
    <Footer className="foot">
    <p>©2021 Created by Mistrain</p>
    <div>
      <img className="police-icon" src="https://bkssl.bdimg.com/static/wiki-common/widget/component/footer/img/icon-police_d8a40a4.png" alt=""/>
      <a className="foot" href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">湘ICP备2021001533号</a>
    </div>
    </Footer>
  )
}

export default Foot