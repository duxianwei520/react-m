
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, WhiteSpace, WingBlank, Flex, Icon, Grid, Button } from 'antd-mobile';
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
        { type: 'check-circle', name: '商业金融1' },
        { type: 'check', name: '历史文学1' },
        { type: 'check-circle-o', name: '法律文献1' },
      ],
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    const data = this.state.list.map(item => ({
      icon: (<Icon type={item.type} />),
      text: item.name,
    }));
    return (
      <div className="welcome" id="welcome">
        <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
        <WingBlank>
          <Button
            type="primary"
            href="#/login"
            onClick={() => this.props.dispatch(pageTransition('normal'))}
          >退出</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}
