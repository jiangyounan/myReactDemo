/**
 * Created by xuqi on 16/3/3.
 */
import '../css/home.css';
import React from 'react';
import PureComponent from '../components/PureComponent';
import { connect } from 'react-redux';
import assign from 'object-assign';
import { bindActionCreators } from 'redux';

//组件
import Award from '../components/home/Award';
import Banner from '../components/home/Banner';
import Score from '../components/home/Score';
import Signin from '../components/home/Signin';
import SimpleSlider from '../components/home/SimpleSlider';
import Wednesday from '../components/home/Wednesday';

//actions
import * as homeActions from '../actions/home';


class Home extends PureComponent {

    componentWillMount() {
        const { queryMemberScore, getAdvPicture, app, home} = this.props;
        if (!home.useCache) {
            getAdvPicture();  //查询广告
        }
    }


    render() {
        let {home,app,getAdvPicture} = this.props;
        return (
            <div className="view">
                <div className="page-view home">
                    <Banner gender={this.props.params.gender} mobileNo={app.get('mobileNo')}/>
                    <div className="content border-tb">
                        <Score score={home.get('score').get('points')}/>
                        <Signin  score={home.get('score')}/>
                    </div>
                    <div className="activity border-tb">
                        <Award prizeList={home.get('adsPic').get('prizeList')}/>
                        <Wednesday getAdvPicture={getAdvPicture} wednesdayList={home.get('adsPic').get('wednesdayList')}/>
                    </div>
                    <div className="banner">
                        <SimpleSlider bannerList={home.get('adsPic').get('bannerList')}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        home: state.home,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(assign(homeActions), dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);