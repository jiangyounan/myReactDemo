/**
 * Created by xuqi on 16/3/2.
 */
import React from 'react';
import PureComponent from '../PureComponent';
import '../../css/slick.css';
import Slider from 'react-slick';
import { openWebPage } from '../../actions/app';

export default class SimpleSlider extends PureComponent {
    render() {
        //console.log('SimpleSlider');
        var settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {
                    this.props.bannerList.toJS().map(function (item,index) {
                        return (
                            <div key={index} onClick={openWebPage.bind(this,item.picUrl)}>
                                <img src={item.picPath}/>
                            </div>
                        )
                    })
                }
            </Slider>
        );
    }
}

