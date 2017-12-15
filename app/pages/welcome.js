
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, WhiteSpace, WingBlank, Icon, Grid, Button, Steps } from 'antd-mobile'
import { pageTransition } from 'actions/common'

const Step = Steps.Step
const customIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
    </g>
  </svg>
)

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
        <Steps current={1}>
          <Step title="Step 1" icon={customIcon()} description="This is description" />
          <Step title="Step 2" icon={customIcon()} description="This is description" />
          <Step title="Step 3" icon={customIcon()} description="This is description" />
          <Step title="Step 4" icon={customIcon()} description="This is description" />
          <Step title="Step 5" icon={customIcon()} description="This is description" />
          <Step title="Step 6" icon={customIcon()} description="This is description" />
          <Step title="Step 7" icon={customIcon()} description="This is description" />
        </Steps>
      </div>
    )
  }
}
