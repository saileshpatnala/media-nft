import logo from './logo.svg';
import styles from './ui/css/globals.css'

import React, { useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Modal from 'react-modal';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyDw2NA5oyM5bTze47eA1oXifKFEwS1abVk",
  authDomain: "nftarticle.firebaseapp.com",
  projectId: "nftarticle",
  storageBucket: "nftarticle.appspot.com",
  messagingSenderId: "678103680947",
  appId: "1:678103680947:web:c1bc00990f30ee6c78edc6",
  measurementId: "G-0PK7Q9RL76"
};
firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dash',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};


class Checker extends React.Component {
  render() {
    var link = "/art?img=" + this.props.img + "&articleID=" + this.props.articleID + "&truthValue=";
    var truth = "True";
    if (this.props.score == "-1") {
      truth = "False";
    }
    if (this.props.score == "1") {
      truth = "True";
    }
    if (this.props.score == "0") {
      truth = "Undetermined";
    }
    return (
      <div>
        <div class="article-d-isplay-module-C61RwL">
          <div class="background-CPmwxB"></div>
          <div class="article-information-text-CPmwxB lapture-semi-bold-white-36px">
            <span class="span0-MrZXuK lapture-semi-bold-black-36px">{this.props.name} <br /></span
            ><span class="span1-MrZXuK franklingothicurw-med-normal-black-18px"><br /></span
            ><span class="span2-MrZXuK franklingothicurw-boo-normal-white-18px">{this.props.desc}</span>
          </div>
          <img class="article-container-CPmwxB" src={this.props.img} />
          <img class="scroll-icon-CPmwxB" src="img/scroll-icon-5@1x.png" />
          <img class="icon-CPmwxB" src="img/icon-75@1x.png" />
        </div>
        <div class="reviewer-display-module-C61RwL">
          <div class="background-SweIIp"></div>
          <div class="text-SweIIp lapture-semi-bold-dodger-blue-36px">
            <span class="span0-DBkUh6 lapture-semi-bold-white-36px">{firebase.auth().currentUser.displayName}'s<br />Truth Rating: </span
            ><span class="span1-DBkUh6 lapture-semi-bold-electric-lime-36px">{truth}</span
            ><span class="span2-DBkUh6 lapture-semi-bold-green-36px"> <br /></span
            ><span class="span3-DBkUh6 franklingothicurw-med-normal-black-18px"></span>
          </div>
          <img class="icon-SweIIp" src="img/icon-22@1x.png" />
          <img class="icon-9A8khq" src="img/icon-23@1x.png" />
          <img class="icon-Nypj6O" src="img/icon-24@1x.png" />
          <img class="icon-tLKfKx" src="img/icon-22@1x.png" />
          <img class="icon-9ws58m" src="img/icon-22@1x.png" />
          <div class="profile-photo-SweIIp border-1px-dove-gray"></div>
        </div>
        <div class="nft-token-display-module-C61RwL">
          <div class="icon-MLqgWW"></div>
          <img class="path-592-MLqgWW" src="img/path-592-1@1x.png" />
          <div class="text-MLqgWW lapturedisplay-normal-christine-36px">
            <span class="span0-Jix5FH lapturedisplay-semi-bold-mirage-36px">NFT Token Title<br /></span
            ><span class="span1-Jix5FH lapturedisplay-semi-bold-christine-36px">Non-Reputable Source<br /></span
            ><span class="span2-Jix5FH franklingothicurw-med-normal-black-18px"></span
            ><span class="span3-Jix5FH franklingothicurw-med-normal-christine-18px"
            >NFT Key Information Key &amp; Location.</span
            >
          </div>
          <div class="token-icon-MLqgWW"></div>
        </div>
        <div class="value-display-module-C61RwL">
          <div class="background-96TyVx"></div>
          <img class="icon-96TyVx" src="img/icon-38@1x.png" />
          <div class="header-96TyVx franklingothicurw-med-normal-dodger-blue-36px">Value <br /></div>
          <div class="x2-eth-96TyVx franklingothicurw-demi-normal-christine-60px">2 ETH</div>
          <img class="value-meter-96TyVx" src="img/value-meter-2@1x.png" />
        </div>
        <div class="add-module-button-C61RwL">
          <div class="x-0mH9hY franklingothicurw-demi-normal-christine-60px">+</div>
        </div>
        <div class="search-bar-C61RwL">
          <div class="search-bar-raZGPH"></div>
          <input class="search-raZGPH franklingothicurw-medium-dodger-blue-24px" name="search18" placeholder="Search" />
        </div>
        <a href="landing-page-01.html">
          <div class="logo-C61RwL">
            <div class="logo-exFKkL">
              <img class="path-1-hsHRXs" src="img/path-1-10@1x.png" />
              <img class="path-2-hsHRXs" src="img/path-2-12@1x.png" />
              <img class="path-3-hsHRXs" src="img/path-3-12@1x.png" />
            </div></div>
        </a>
        <div class="article-minting-module-C61RwL">
          <div class="background-may3U0"></div>
          <a href={link + "1"}>
            <div class="button-may3U1">
              <div class="button-vtxZZ1"></div>
              <div class="submit-vtxZZ1 franklingothicurw-med-normal-alabaster-24px">True</div>
            </div></a>
          <a href={link + "-1"}>
            <div class="button-may3U0">
              <div class="button-vtxZZ1"></div>
              <div class="submit-vtxZZ1 franklingothicurw-med-normal-alabaster-24px">False</div>
            </div></a>
          <div class="user-information-text-may3U0 arial-regular-normal-white-28px">Modify Truth Value</div>
        </div>
      </div>
    );
  }
}

class Articles extends React.Component {
  render() {
    var base_link = "/art?articleID=";
    var articles = this.props.articles;
    var name1 = "Title";
    var desc1 = "Desc";
    var link1 = base_link + "fake";
    var name2 = "Title";
    var desc2 = "Desc";
    var link2 = base_link + "fake";
    var name3 = "Title";
    var desc3 = "Desc";
    var link3 = base_link + "fake";
    var name4 = "Title";
    var desc4 = "Desc";
    var link4 = base_link + "fake";
    var name5 = "Title";
    var desc5 = "Desc";
    var link5 = base_link + "fake";

    var img1 = "img/mask-group-3-12@1x.png";
    var img2 = "img/mask-group-3-13@1x.png";
    var img3 = "img/mask-group-3-10@1x.png";
    var img4 = "img/mask-group-3-11@1x.png";
    var img5 = "img/mask-group-2-1@1x.png";

    if (articles != null && articles.length >= 5) {
      name1 = articles[0].name;
      name2 = articles[1].name;
      name3 = articles[2].name;
      name4 = articles[3].name;
      name5 = articles[4].name;

      desc1 = articles[0].content;
      desc2 = articles[1].content;
      desc3 = articles[2].content;
      desc4 = articles[3].content;
      desc5 = articles[4].content;

      link1 = base_link + articles[0].id + "&img=" + img1;
      link2 = base_link + articles[1].id + "&img=" + img2;
      link3 = base_link + articles[2].id + "&img=" + img3;
      link4 = base_link + articles[3].id + "&img=" + img4;
      link5 = base_link + articles[4].id + "&img=" + img5;
    }
    return (
      <div>
        <a href={link1}><div class="small-article-display-C61RwL">
          <img class="mask-group-3-Mx55Tg" src="img/mask-group-3-12@1x.png" />
          <div class="gradient-overlay-Mx55Tg"></div>
          <div class="header-text-Mx55Tg lapturedisplay-medium-white-20px">
            <span class="span0-pcDoAk lapturedisplay-semi-bold-white-20px">{name1}<br /></span
            ><span class="span1-pcDoAk franklingothicurw-medium-white-18px"><br /></span
            ><span class="span2-pcDoAk franklingothicurw-medium-white-12px">{desc1}<br /></span>
          </div>
        </div></a>
        <a href={link2}><div class="small-article-display-VMr6Om">
          <img class="mask-group-3-QvMIJm" src="img/mask-group-3-13@1x.png" />
          <div class="gradient-overlay-QvMIJm"></div>
          <div class="header-text-QvMIJm lapturedisplay-medium-white-20px">
            <span class="span0-TvolEX lapturedisplay-semi-bold-white-20px">{name2}<br /></span
            ><span class="span1-TvolEX franklingothicurw-medium-white-18px"><br /></span
            ><span class="span2-TvolEX franklingothicurw-medium-white-12px">{desc2}<br /></span>
          </div>
        </div></a>
        <a href={link3}><div class="small-article-display-mzXdH9">
          <img class="mask-group-3-cVQY6O" src="img/mask-group-3-10@1x.png" />
          <div class="gradient-overlay-cVQY6O"></div>
          <div class="header-text-cVQY6O lapturedisplay-medium-white-20px">
            <span class="span0-aujg1h lapturedisplay-semi-bold-white-20px">{name3}<br /></span
            ><span class="span1-aujg1h franklingothicurw-medium-white-18px"><br /></span
            ><span class="span2-aujg1h franklingothicurw-medium-white-12px">{desc3}<br /></span>
          </div>
        </div></a>
        <a href={link4}><div class="small-article-display-QxM5SU">
          <img class="mask-group-3-0xWX7M" src="img/mask-group-3-11@1x.png" />
          <div class="gradient-overlay-0xWX7M"></div>
          <div class="header-text-0xWX7M lapturedisplay-medium-white-20px">
            <span class="span0-M5xQMd lapturedisplay-semi-bold-white-20px">{name4}<br /></span
            ><span class="span1-M5xQMd franklingothicurw-medium-white-18px"><br /></span
            ><span class="span2-M5xQMd franklingothicurw-medium-white-12px">{desc4}<br /></span>
          </div>
        </div></a>
        <a href={link5}><div class="large-article-display-C61RwL">
          <img class="mask-group-2-z88vlT" src="img/mask-group-2-1@1x.png" />
          <div class="gradient-overlay-z88vlT"></div>
          <div class="header-text-z88vlT lapturedisplay-medium-white-48px">
            <span class="span0-zxLxa6 lapturedisplay-semi-bold-white-48px">{name5}</span
            ><span class="span1-zxLxa6 lapturedisplay-semi-bold-white-18px"><br /></span
            ><span class="span2-zxLxa6 franklingothicurw-medium-white-18px"><br />{desc5}<br /></span>
          </div>
        </div></a>
        <div class="search-bar-C61RwL">
          <div class="search-bar-raZGPH"></div>
          <input class="search-raZGPH franklingothicurw-medium-dodger-blue-24px" name="search17" placeholder="Search" />
        </div>
      </div>
    );
  }
}

class Screen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { articles: null }
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  async fetchArticles() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleID = urlParams.get("articleID");
    const apiUrl = 'https://p35l1ls53m.execute-api.us-east-1.amazonaws.com/dev/articles';
    const idToken = await firebase.auth().currentUser?.getIdToken();
    const user = firebase.auth().currentUser.uid;

    const head = {
      'Authorization': idToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'user_id': user
    }

    if (articleID != null) {
      head['article_id'] = articleID;
    }

    fetch(apiUrl,
      {
        headers: head
      }
    )
      .then((response) => response.json())
      .then((data) => this.setState({ articles: data }));
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async updateArticleScore(id, value, img) {
    const apiUrl = 'https://p35l1ls53m.execute-api.us-east-1.amazonaws.com/dev/article_score';
    const token = await firebase.auth().currentUser?.getIdToken();
    const user = firebase.auth().currentUser.uid;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article_id: id,
        user_id: user,
        score: value
      })
    });

    setTimeout(function () { }, 3000);
    this.fetchArticles();
  }

  render() {
    if (this.props.screens == "art") {
      const urlParams = new URLSearchParams(window.location.search);
      const articleID = urlParams.get("articleID");
      const truthValue = urlParams.get("truthValue");
      const img = urlParams.get("img");
      if (articleID != null && truthValue != null) {
        this.updateArticleScore(articleID, parseInt(truthValue), img);
      }

      if (this.state.articles != null && this.state.articles[0] != null) {
        const name = this.state.articles[0].name;
        const articleID = this.state.articles[0].id;
        const desc = this.state.articles[0].content;
        const score = this.state.articles[0].score;
        return (
          <Checker name={name} desc={desc} score={score} articleID={articleID} img={img} />
        );
      }

      return (
        <Checker name="Temp" desc="Temp" score="1" articleID="id" img="img" />
      );
    }
    if (this.props.screens == "dash") {
      console.log(this.state.articles);
      return (

        <Articles articles={this.state.articles} />
      );
    }
  };
}

class SignUpButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div class={this.props.class} onClick={this.handleOpenModal}>{this.props.name}</div>
        <Modal isOpen={this.state.showModal} contentLabel={this.props.name}>
          <div class="background-flJxko border-1px-dove-gray"></div>
          <div class="sign-up-display-module-C61RwL">
            <div class="background-flJxko border-1px-dove-gray"></div>
            <div class="sign-up-flJxko lapturedisplay-semi-bold-christine-60px">{this.props.name}</div>
            <div onClick={this.handleCloseModal} class="continue-flJxko  lapturesubhead-semi-bold-christine-32px">Cancel</div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </Modal>
      </div>
    );
  }
}


class Main extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div class="container-center-horizontal">
          <div class="landing-page-01 screen">
            <div class="background-C61RwL border-1px-dove-gray"></div>
            <img class="backlground-image-C61RwL" src="img/background-image-1@1x.png" />
            <a href="sign-up-pop-up-01.html"> <div class="sign-up-button-C61RwL"></div></a>
            <h1 class="hero-header-text-C61RwL lapturedisplay-semi-bold-christine-60px-2">
              <span class="span0-g4yXl9 lapturedisplay-bold-christine-60px"
              >The NFT Marketplace for Fact Checking &amp; Quality Media Minting</span
              ><span class="span1-g4yXl9 lapturedisplay-semi-bold-christine-60px">&nbsp;</span>
            </h1>
            <div class="blur-overlay-C61RwL"></div>
            <SignUpButton name="Sign Up" class="sign-up-C61RwL" />
            <SignUpButton name="Sign In" class="login-C61RwL lapturesubhead-semi-bold-christine-32px" />
          </div>
        </div>
      );
    }
    return (
      <div class="container-center-horizontal">
        <div class="article-dashboard-01 nft-marketplace-01 screen">
          <div class="background-C61RwL"></div>
          <img class="left-divider-C61RwL" src="img/divider-left-1@1x.png" />
          <img class="right-divider-C61RwL" src="img/divider-left-1@1x.png" />
          <div class="user-information-module-C61RwL">
            <div class="background-DGxVxJ"></div>
            <img class="icon-DGxVxJ" src="img/icon-11@1x.png" />
            <img class="icon-xSG5Dw" src="img/icon-12@1x.png" />
            <div class="user-information-text-DGxVxJ franklingothicurw-med-normal-electric-lime-36px">
              <span class="span0-VBRFVu franklingothicurw-med-normal-dodger-blue-36px">{firebase.auth().currentUser.displayName} <br /></span
              ><span class="span1-VBRFVu franklingothicurw-med-normal-black-18px"><br /></span
              ><span class="span2-VBRFVu franklingothicurw-medium-electric-lime-18px">Profile Information</span>
            </div>

            <div class="x45-DGxVxJ lapturedisplay-semi-bold-white-32px"></div>
          </div>
          <div class="nav-menu-C61RwL">
            <a onClick={() => firebase.auth().signOut()}>
              <div class="logout-PZtHVO">
                <div class="search-bar-mIxXJS"></div>
                <div class="log-out-mIxXJS franklingothicurw-medium-dodger-blue-24px">Log Out<br /></div></div
              ></a>
            <div class="settigns-PZtHVO">
              <div class="search-bar-xFCRPv"></div>
              <div class="settings-xFCRPv franklingothicurw-medium-dodger-blue-24px">Settings<br /></div>
            </div>
            <a href="/dash">
              <div class="marketplace-PZtHVO">
                <div class="search-bar-K5Lepo"></div>
                <div class="marketplace-K5Lepo franklingothicurw-medium-outer-space-24px">Articles<br /></div>
              </div></a>
            <div class="articles-PZtHVO">
              <div class="search-bar-M6QzmS"></div>
              <div class="articles-M6QzmS franklingothicurw-medium-dodger-blue-24px">Marketplace<br /></div></div>
          </div>
          <Screen screens={this.props.screens} />
        </div>
      </div>
    );
  }
}

function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route path="/art">
            <Main screens="art" />
          </Route>
          <Route path="/dash">
            <Main screens="dash" />
          </Route>
          <Route path="/">
            <Main screens="dash" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;