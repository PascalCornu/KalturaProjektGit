import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import SearchPaging from './components/search_paging';
import MenuBar from './components/menu_bar';
import VideoManager from './components/video_manager'
import rootReducers from './reducers';


const initialState = {};
const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <MenuBar />
          <SearchPaging />
                   <Route exact path="/page/:page" component={VideoManager} />
                     <Route exact path="/search/:search/page/:page/video-detail/:id" component={VideoManager} />
                     <Route exact path="/search/:search/page/:page" component={VideoManager} />
                     <Route exact path="/search/:search/video-detail/:id" component={VideoManager} />
                     <Route exact path="/search/:search" component={VideoManager} />
                     <Route exact path="/page/:page/video-detail/:id" component={VideoManager} />
                     <Route exact path="/video-detail/:id" component={VideoManager} />
                     <Route exact path="/" component={VideoManager} />
        </div>
      </Router>
    </Provider>
    , document.getElementById('root'));
  
registerServiceWorker();
