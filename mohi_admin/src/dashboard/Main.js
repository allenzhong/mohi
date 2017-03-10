import React from 'react';
import Header from '../lib/core/components/Header/';
import Sidebar from '../lib/core/components/Sidebar/';
import Aside from '../lib/core/components/Aside/';
import Footer from '../lib/core/components/Footer';

class Main extends React.Component {
  render () {
    return(
      <div className='app'>
        <Header />
        <div className='app-body'>
          <Sidebar {...this.props} />
          <main className='main'>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
