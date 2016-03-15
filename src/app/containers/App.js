import React from 'react';
import ReactCssTransitionGroup from 'react/lib/ReactCssTransitionGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureComponent from '../components/PureComponent';


//import {getClientInfo,setNaviTitle,goBack,requestServerTime} from '../actions/app';

class App extends PureComponent{

	constructor(props){
		super(props);
	}

	componentWillMount() {
        /*const {getClientInfo,requestServerTime} = this.props;
        //getClientInfo();
        //requestServerTime();


        //页面切换
        window.addEventListener('hashchange',function(){
            // alert(this.props.location.pathname);
            setNaviTitle(this.props.location.pathname,this.props.params);
        }.bind(this));

        //app回退
        window.onBackPress = function(){
            // alert(this.props.location.pathname);
            goBack(this.props.location.pathname)
        }.bind(this);

        setNaviTitle(this.props.location.pathname,this.props.params);*/

    }


	render(){
		const { pathname } = this.props.location;
		const key = pathname.split('/')[1] || 'root';
		return(
			<div className="main-view">
				{
					<ReactCssTransitionGroup component="div" transitionName="swap" transitionEnterTimeout={350} transitionLeaveTimeout={350}>
						{
							React.cloneElement(this.props.children || <div/>,{
								key,
							})
						}
					</ReactCssTransitionGroup>
				}
			</div>
		)
	}
}



export default App;



