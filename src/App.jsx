import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import LightDarkMode from "./components/light-dark-mode";
import QRCodeGenerator from "./components/qr-code-generator";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {
  return (
    <div className="App">
      {/*<Accordian />*/}
      {/*<RandomColor />*/}
      {/*<StarRating />*/}
      {/*<ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />*/}
      {/*<LoadMoreData />*/}
      {/*<TreeView menus={menus} />*/}
      {/*<QRCodeGenerator />*/}
      {/*<LightDarkMode />*/}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      {/*<TabTest />*/}
      {/*<ModalTest />*/}
      {/*<GithubProfileFinder />*/}
      {/*<SearchAutocomplete />*/}
      {/*<TicTacToe />*/}
      {/*<FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>*/}
      {/*<UseFetchHookTest />*/}
      {/*<UseOnclickOutsideTest />*/}
      {/*<UseWindowResizeTest />*/}
      {/*<ScrollToTopAndBottom />*/}
      <ScrollToSection />
    </div>
  );
}

export default App;
