import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { Row, Col, Input, Breadcrumb, Icon, Pagination, List } from 'antd';
import News from '../../components/News';

import style from './index.module.scss';
import './index.scss';

const Search = Input.Search;

class NewHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            page: 1
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.getHouseList(1);
        if (this.props.newsList.toJS().length === 0) {
            this.props.getNews();
        }
    }

    render() {
        const { houseList, total_count } = this.props;

        return (
            <div className={[style.newhouse_container] + " newhouse_container"}>
                <Row type="flex" align="bottom" className={style.search_container}>
                    <Col span={12} offset={4}>
                        <Search placeholder="请输入新房关键字搜索" onSearch={value => this.handleSearch(value)} enterButton size="large" />
                    </Col>
                    <Col span={14} offset={4}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item><Icon type="home" />大泉州房地产</Breadcrumb.Item>
                            <Breadcrumb.Item>新房</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={14} offset={4} >
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={houseList}
                            header={
                                <div className={style.total_count}>共找到<b>{total_count}</b>套房子</div>
                            }
                            renderItem={item => (
                                // 这里  Link 跳转有缺点，会影响 list-item 的样式
                                <Link to={"/detail/" + JSON.stringify({ type: "newHouse", id: item.get("Id") })} className={style.listItem}>
                                    <List.Item
                                        key={item.get('Id')}
                                        extra={
                                            <img
                                                width={240}
                                                height={145}
                                                alt="logo"
                                                src={item.get('CoverImg')}
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            title={<div><Icon type="fire" />{item.get('Name')}</div>}
                                            description={<div className={[style.description_container]}><div><Icon type="sound" />开盘日期：{item.get('SaleTime')}</div><div><Icon type="environment" />{item.get('Province') + item.get('City') + item.get('Area') + item.get('Addr')}</div></div>}
                                        />
                                    </List.Item>
                                </Link>
                            )}
                        />
                        <Pagination current={this.state.page} hideOnSinglePage={true} showQuickJumper total={total_count} onChange={this.handleChangePage} />
                    </Col>
                    <Col span={3} offset={1} style={{ "marginTop": "20px" }}><News /></Col>
                </Row>
            </div>
        )
    }

    handleSearch(value) {
        this.setState({
            value
        }, () => {
            this.handleChangePage(1)
        })
    }

    handleChangePage(pageNumber) {
        this.setState({
            page: pageNumber
        })
        console.log('Page: ', pageNumber);
        this.props.getHouseList(pageNumber, this.state.value)
        window.scrollTo({
            top: 208,
            left: 0,
            behavior: "instant"
        });
    }

}

const mapStateToProps = (state) => {
    return {
        houseList: state.getIn(['newHouse', 'houseList']),
        total_count: state.getIn(['newHouse', 'total_count']),
        newsList: state.getIn(['newHouse', 'newsList'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHouseList(page, value) {
            console.log('getHouseList');
            dispatch(actionCreators.getHouseList(page, value));
        },
        getNews() {
            dispatch(actionCreators.getNews());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHouse);
