import React, {PureComponent} from 'react'
import './style.css'

export default class Article extends PureComponent {
  render() {
    return (
      <article>
        <div className="article-title-box">
          <h1>如何实现bilibili最新头部景深效果~炫酷</h1>
          <span className="article-author-msg">Mistrain</span>
          <span className="article-author-msg">2020-10-01</span>
          <span className="article-author-msg"><a href="https://blog.csdn.net/javaMistrain/article/details/108896922#comments_14701715" target="_blank" rel="noreferrer">查看CSDN原文</a></span>
        </div>
        <h3 className="article-h3">简介</h3>
        <p>
          最近烟雨仔注意到 B站 主页导航栏头部有个相当炫酷的交互效果, 类似于摄影里面的小景深, 除了聚焦的人物, 其他前景和背景都是模糊状态. 最炫酷的地方在于,
          鼠标左右移动, 会产生聚焦点的变换, 具体如下图22和33娘的效果. 还可以聚焦到不同的景物上面, 比如前景的叶子或者中景的石头. 本篇新手教程,
          主要运用鼠标的 mousemove 事件进行动画效果的实现. 有不正确的地方望指正~
        </p>
        <img
          className="article-img"
          src="https://img-blog.csdnimg.cn/2020100310272418.gif#pic_center"
          alt="article img"/>
        <h3 className="article-h3">html结构</h3>
        <p>
          想要实现这样的效果, 首先需要的是一整套 png 素材. 烟雨仔为了省事就直接下载了B站的原素材, 一共是6个 png 图片.
        </p>
        <img
          className="article-img"
          src="https://img-blog.csdnimg.cn/20201001201610277.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phdmFNaXN0cmFpbg==,size_16,color_FFFFFF,t_70#pic_center"
          alt="article img"/>
        <p>
          结构上, 烟雨仔参照了 B站 的写法, 在每张图片的外面都包了一个 .layer 的div盒子.把所有的 .layer 都装进 .banner 这个大的 div
          盒子.
        </p>
        <pre>
        {`
        <div class="banner">
          <div class="layer">
            <img class="back" src="./cssSrc/background.png" alt="">
          </div>
          <div class="layer">
            <img class="person22" src="./cssSrc/person22.png" alt="">
          </div>
          <div class="layer">
            <img class="hill" src="./cssSrc/hill.png" alt="">
          </div>
          <div class="layer">
            <img class="leaves" src="./cssSrc/leaves.png" alt="">
          </div>
          <div class="layer">
            <img class="person33" src="./cssSrc/person33.png" alt="">
          </div>
          <div class="layer">
            <img class="left" src="./cssSrc/left.png" alt="">
          </div>
        </div>
        `}
        </pre>
        <h3 className="article-h3">CSS样式</h3>
        <p>样式的部分需要自行设置合适的宽高, B站这套素材的宽高设置为 width: 1950px; height: 178px;
          即可.由于最外面包裹了.layer 块级盒子, 将所有素材重叠起来需要使用到定位, 遵循"子绝父相"的规则, 给.layer设置绝对定位,
          给.banner设置相对定位.</p>
        <p>烟雨仔这里给 .banner 增加了 overflow: hidden , 如果不添加会出现模糊溢出.</p>
        <pre>
          {`
        .banner {
            position: relative;
            top: 0;
            width: 1950px;
            height: 178px;
            overflow: hidden;
        }

        .layer {
            position: absolute;
            top: 0;
        }

        img {
            width: 1950px;
            height: 178px;
        }
          `}
        </pre>
        <p>可以看到所有素材都清晰地重叠在一起了.</p>
        <img
          className="article-img"
          src="https://img-blog.csdnimg.cn/20201001201644247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phdmFNaXN0cmFpbg==,size_16,color_FFFFFF,t_70#pic_center"
          alt="article img"/>
        <p>接下来就是重点了, 如何实现模糊的效果呢? 这需要用到 CSS3 filter(滤镜) 属性. (烟雨仔这里使用的是最新版 chrome, 不考虑兼容性问题).</p>
        <p>实际上在 B站 首页 f12 检查也可以查到是使用了 filter 下面的 blur(). 稍微查阅或者测试一下, 可以知道 blur() 里面的值越大,
          就会越模糊, 而且只对正值有效果, 0 就是不模糊.</p>
        <img
          className="article-img"
          src="https://img-blog.csdnimg.cn/20201001201703614.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phdmFNaXN0cmFpbg==,size_16,color_FFFFFF,t_70#pic_center"
          alt="article img"/>
        <pre>
          {`
          .back {
              filter: blur(4px);
          }
  
          .person22 {
              filter: blur(0);
          }
  
          .hill {
              filter: blur(1px);
          }
  
          .leaves {
              filter: blur(2px);
          }
  
          .person33 {
              filter: blur(5px);
          }
  
          .left {
              filter: blur(10px);
          }
          `}
        </pre>
        <p>设定合适的 blur() 值(具体数值是烟雨仔自己调的, 供参考), 这里烟雨仔设置的聚焦点 blur(0) 是22娘,
          离聚焦点越远的物体越模糊就可以了. 然后你就可以看到以下效果, 是不是有照相机那味了?</p>
        <img
          className="article-img"
          src="https://img-blog.csdnimg.cn/2020100120174969.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phdmFNaXN0cmFpbg==,size_16,color_FFFFFF,t_70#pic_center"
          alt="article img"/>
        <h3 className="article-h3">动画效果的实现</h3>
        <p>除此以外, 如果你玩过 B站 首页的这个景深效果(今天发现已经改成国庆节的图了, 不知道之后还能不能看到), 会发现这个效果不仅仅是对各层 png
          进行了模糊处理, 还有一种…镜头感?</p>
        <p>简单来说, 就是做到了一种鼠标是照相机镜头, 可以移动镜头的位置, 并且更改照相机焦距的效果. 这种移动镜头的感觉是靠各层前景的不同距离移动来实现的.</p>
        <p>当然你也可以 f12 查看是使用了 CSS3 transform 属性 下的 translate(), 里面有两个参数 x, y
          分别代表相对于原位置移动的距离. 我们要实现的效果是镜头的左右移动, 只需要更改 x 就行了.</p>
        <p>因此, 在 js 里面我们要实现两个属性的修改: filter: blur() 和 transform: translate() , 先把 CSS 加上.</p>
        <pre>
          {`
          .back {
              filter: blur(4px);
              transform: translate(0px, 0px)
          }
  
          .person22 {
              filter: blur(0);
              transform: translate(0px, 0px)
          }
  
          .hill {
              filter: blur(1px);
              transform: translate(0px, 0px)
          }
  
          .leaves {
              filter: blur(2px);
              transform: translate(0px, 0px)
          }
  
          .person33 {
              filter: blur(5px);
              transform: translate(0px, 0px)
          }
  
          .left {
              filter: blur(10px);
              transform: translate(0px, 0px)
          }
          `}
        </pre>
        <p>为了方便, 烟雨仔用了 jQuery. 首先, 我们可以把整个动画拆解成 3 部分:</p>
        <p>
        {`
        1. 鼠标移入就会开启整个事件.
        2. 鼠标左右移动就会发生 blur() 和 translate() 的变化.
        3. 鼠标移出会还原成初始状态.
        `}
        </p>
        <p>搞清楚上面的步骤以后, 就可以开始下面的代码.</p>
        <pre>
          {`
        $('.banner').mouseenter(e => {// 给最外层的 .banner 添加鼠标移入事件
            let initX = e.pageX// 获得刚移入时鼠标的初始 x 位置
            $('.banner').mousemove(e => {// 给 .banner 添加鼠标移动事件
                $('.back').css('filter', 'blur(' + Math.abs(4 - (e.pageX - initX) / 60 ) + 'px)')
            })// 背景不需要进行移动, 只需要更改 blur() 值
            $('.banner').mousemove(e => {
                $('.person22').css('filter', 'blur(' + Math.abs((e.pageX - initX) / 60 ) + 'px)')
                $('.person22').css('transform', 'translate(' + ((e.pageX - initX) / 80) + 'px, 0px)')
            })
            $('.banner').mousemove(e => {
                $('.hill').css('filter', 'blur(' + Math.abs(1 + (e.pageX - initX) / 100 ) + 'px)')
                $('.hill').css('transform', 'translate(' + ((e.pageX - initX) / 40) + 'px, 0px)')
            })
            $('.banner').mousemove(e => {
                $('.leaves').css('filter', 'blur(' + Math.abs(2 + (e.pageX - initX) / 80 ) + 'px)')
                $('.leaves').css('transform', 'translate(' + ((e.pageX - initX) / 20) + 'px, 0px)')
            })
            $('.banner').mousemove(e => {
                $('.person33').css('filter', 'blur(' +Math.abs(5 + (e.pageX - initX) / 60 ) + 'px)')
                $('.person33').css('transform', 'translate(' + ((e.pageX - initX) / 10) + 'px, 0px)')
            })
            $('.banner').mousemove(e => {
                $('.left').css('filter', 'blur(' + Math.abs(10 + (e.pageX - initX) / 40 ) + 'px)')
                $('.left').css('transform', 'translate(' + ((e.pageX - initX) / 5) + 'px, 0px)')
            })
        })
       
        $('.banner').mouseleave(() => {// 还原成初始状态
            $('.back').css('filter', 'blur(4px)')
            $('.person22').css('transform', 'translate(0px, 0px)')
            $('.person22').css('filter', 'blur(0)')
            $('.hill').css('transform', 'translate(0px, 0px)')
            $('.hill').css('filter', 'blur(1px)')
            $('.leaves').css('transform', 'translate(0px, 0px)')
            $('.leaves').css('filter', 'blur(2px)')
            $('.person33').css('transform', 'translate(0px, 0px)')
            $('.person33').css('filter', 'blur(5px)')
            $('.left').css('transform', 'translate(0px, 0px)')
            $('.left').css('filter', 'blur(10px)')
        })
          `}
        </pre>
        <p>首先要知道, 随着鼠标的左右移动, e.pageX 的值是不断进行变化的, 如果没有用过 e.pageX, 可以试试在控制台对 e.pageX 进行打印.</p>
        <p>以 blur() 为例, 用原来的模糊数值, 加上 e.pageX 变化的模糊数值, 就可以实现动态的变化效果. 用 e.pageX - initX 可以得到鼠标进入盒子后移动的差值, 如果是正值, 说明鼠标向右移动了, 那么模糊数值会增加. 反之向左移动, e.pageX - initX 为负值, 模糊数值就会减小了.</p>
        <p>但是, 前面我们讲了, blur() 括号里的值必须为正值, 因此烟雨仔在这里增加了 Math.abs() 将负值转为正值. 于是, 只要不是 blur(0), 就都会产生模糊效果.</p>
        <p>但是 1px 是很小的. 对于 blur() 来说, 1px 就可以看到模糊效果了, 但鼠标随随便便就可以移动个 100px, 这不是我们想要的, 因此需要对 e.pageX - initX 的值进行一点点处理, 让它去除以一个数, 这样鼠标移动 100px, 但模糊值只变化了 个位数, 就达到了我们想要的效果.</p>
        <p>给不同 png 层设置不同的除数, 可以使得它们模糊的速度不一样, 更加接近真实照相机的效果.</p>
        <p>在这里还有一个小细节, 你可能会注意到烟雨仔给背景层 .back 所设置的 blur() 和其他 png 层有些不同. 只有 .back 的 blur() 值是用原来的模糊值减去变化的模糊值, 而其它层都是加上变化的模糊值. 这是因为其它层都是在聚焦点22娘的前面, 而 .back 在聚焦点的后面. 试想一下, 当鼠标在向右移动的时候, e.pageX - initX 不断增大, 22娘及其前面的 png 层会不断模糊, 也就是一种聚焦点向后移的效果, 那么此时聚焦点就逐渐后移到22娘后面的背景层, 背景层会异于其他层而逐渐清晰, 因此就需要原来的模糊值减去变化的模糊值. 直到 .back 的模糊值减为 0, 聚焦点就到了背景层 .back 上.</p>
        <p>以上对 blur() 模糊值的处理方法, 再运用到 translate() 上面, 就大功告成了.</p>
        <p>实际上, 最后的还原步骤还有一些草率, 仔细看 B站 的还原效果, 是一个逐渐还原的过程, 但在这里烟雨仔主要讲的是 mousemove 事件, 于是就不进行实现了.感兴趣的朋友用 transition 就可以实现啦~</p>
      </article>
    )
  }
}