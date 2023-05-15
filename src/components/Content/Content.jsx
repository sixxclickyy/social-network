import './Content.css';
import Info from './Info';
import Posts from './Post/Posts';
import PostsContainer from './Post/PostsContainer';

const Content = () => {
  debugger;
  return (
    <div className="content">
      <img
        className="backgr"
        src="https://tipik.ru/wp-content/uploads/2019/08/%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B5-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8-%D1%82%D1%83%D0%BC%D0%B1%D0%BB%D0%B5%D1%80-019.jpg"
      />
      <div className="content-without-img">
        <Info/>
        <PostsContainer/>
      </div>
    </div>
  );
};

export default Content;
