export default function BlogLoader() {
  return (
    <div className="blog-core blog-loader">
      <div className="single-blog blog-article">
        <div className="left-side">
          <div className="filler"></div>
        </div>
        <div className="right-side blog-article-info">
          <h2>
            <i className="fas fa-calendar-day"></i>
          </h2>
          <h1>123</h1>
          <p></p>
          <a className="read-more" href={"/article/"}>
            Read More{" "}
          </a>
        </div>
      </div>
      <div className="two-blogs">
        <div className="blog-article first">
          <div className="dashed-line">
            <div className="filler"></div>
          </div>
          <div className="blog-article-info">
            <h2>
              <i className="fas fa-calendar-day"></i>
            </h2>
            <h1>123</h1>
            <p></p>
            <a className="read-more" href={"/article/"}>
              Read More{" "}
            </a>
          </div>
        </div>
        <div className="blog-article">
          <div className="dashed-line">
            <div className="filler"></div>
          </div>
          <div className="blog-article-info">
            <h2>
              <i className="fas fa-calendar-day"></i>
            </h2>
            <h1>123</h1>
            <p></p>
            <a className="read-more" href={"/article/"}>
              Read More{" "}
            </a>
          </div>
        </div>
        <div className="blog-article">
          <div className="dashed-line">
            <div className="filler"></div>
          </div>
          <div className="blog-article-info">
            <h2>
              <i className="fas fa-calendar-day"></i>
            </h2>
            <h1>123</h1>
            <p></p>
            <a className="read-more" href={"/article/"}>
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
