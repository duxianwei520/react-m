
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, WhiteSpace, WingBlank, Flex, Icon, Grid, Button } from 'antd-mobile'
import { pageTransition } from 'actions/common'


@connect(
  (state, props) => ({
    config: state.config,
  }),
)
export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['', '', ''],
      imgHeight: 176,
      list: [
        { type: 'check-circle', name: '商业金融' },
        { type: 'check', name: '历史文学' },
        { type: 'check-circle-o', name: '法律文献' },
      ],
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100)
  }

  render() {
    const data = this.state.list.map(item => ({
      icon: (<Icon type={item.type} />),
      text: item.name,
    }))
    return (
      <div className="welcome" id="welcome">
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
        {this.state.data.map(ii => (
          <a
            key={ii}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png'}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
        </Carousel>
        <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
        <WingBlank>
          <Button
            type="primary"
            href="#/login"
            onClick={() => this.props.dispatch(pageTransition('right'))}
          >退出</Button>
          <WhiteSpace />
          <Button
            type="primary"
            href="#/welcome1"
            onClick={() => this.props.dispatch(pageTransition('normal'))}
          >welcome1</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}
