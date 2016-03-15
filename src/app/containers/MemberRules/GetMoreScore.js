import '../../css/memberRules.css';
import React from 'react';
import PureComponent from '../../components/PureComponent';


class GetMoreScore extends PureComponent{

	render(){
		return(
			<div className="view">
				<div className="page-view memberRules">
					<div className="content">
						<h3>如何赚取更多积分？</h3>
						<div>
							<h4>方法一：每日签到</h4>
							<p>首次签到赚取1积分，连续第二天签到赚取3积分，第三天5积分，第四天7积分，第五天9积分，第六天9积分，第七天9积分，七天以后，每天9积分。</p>
							<p>若中断，则从首次1积分重新开始计算。</p>
							<p></p>
							<br />
							<p>举个栗子：我连续签到了5天，分别获得了1、3、5、7、9积分，第六天签到获取9积分，第7天签到获取9积分，第八天没有签到，无积分。第九天签到，获得1积分。</p>
							<br />
							<h4>方法二：首次消费</h4>
							<p>第一次购票成功的用户，即可额外获取20积分；</p>

							<br />
							<h4>方法三：购票越多，积分越多</h4>
							<p>*更有不定期的购票额外赠送活动，积分up up，请随时关注会员首页</p>
							<table>
								<tbody>
									<tr>
										<th>订单金额</th>
										<th>获得积分</th>
									</tr>
									<tr>
										<td>1.00-20.00</td>
										<td>+10</td>
									</tr>
									<tr>
										<td>20.01-50.00</td>
										<td>+24</td>
									</tr>
									<tr>
										<td>50.01——100.00</td>
										<td>+50</td>
									</tr>
									<tr>
										<td>100.01——200.00</td>
										<td>+80</td>
									</tr>
									<tr>
										<td>200.01以上</td>
										<td>+160</td>
									</tr>
								</tbody>
							</table>
							<p>注：①每个账户每天最多获得200车票积分；②积分，将到发车后的15分钟到账；③退票不再发放相应积分</p>

							<br />
							<h4>方法四：参与活动</h4>
							<p>参与客户端官方活动，即可获得相应积分</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default GetMoreScore;



