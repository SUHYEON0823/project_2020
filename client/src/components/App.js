import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

// admin floatingPopulationList
import floatingPopulationList from './Floating_population/floatingPopulationList';

// admin softwareinfo
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';

class App extends Component {
  render () {
    return (
      <div className="App">
          <HeaderAdmin/> 
          <Switch>
            {/* <Route exact path='/' component={Api_test} /> // root 경로일 경우 라우팅 */}
            <Route exact path='/' component={LoginForm} />
            <Route path='/floatPopulationList' component={floatingPopulationList} />
            <Route path='/SoftwareList' component={SoftwareList} />
            <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
          </Switch>
          <Footer 
            footer_address={this.props.footer_address} 
            footer_tel={this.props.footer_tel}  
            footer_email={this.props.footer_email} 
            footer_mobile={this.props.footer_mobile} 
          />
      </div>
    );
  }
}

App.defaultProps = {
  // footer value
  footer_address: '[34234] 서울특별시 강남구 삼성동 111-114',
  footer_tel: '02-1234-5678',
  footer_email: 'example@naver.com',
  footer_mobile: '010-1234-5678',
};

export default App