import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernm:'',
        };
    }
    render () {
        return(
            <header className="gnb_box">
            <div className="hd_top">
                <div className="top_wrap ct1 af">
                <ul className="hd_left af">
                <li className="my1" onMouseEnter={this.myInfoHover} onMouseLeave={this.myInfoLeave}><b>내정보</b>
                        <div className="box0 box1">
                            <ul>
                            <li><a>내 정보 수정</a></li>
                            <li><a href="javascript:" onClick={this.logout}>로그아웃</a></li>
                            </ul>
                        </div>
                        </li>
                    <li className="my2"><b><span>1</span>알림</b>
                    </li>
                </ul>
                <div className="hd_right">
                    <p><span>'임수현'</span>님 반갑습니다.</p>
                </div>
                </div>
            </div>
                <div className="h_nav ct1 af">
                    <div className="logo">
                        <Link to={'/'}><img src={require("../../img/layout/logo.jpg")} height="65px" width="200px" alt=""/></Link>
                    </div>
                    <nav className="gnb gnb_admin">
                    <ul className="af">
                        <li className="menulist">
                            <Link to={'/SoftwareList'}>교내 Software 관리</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;