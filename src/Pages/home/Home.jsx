
import './Home.css';

const Home= () => {

  return (
    <div className="creative-video">
      <div className="type-brand-left-and">
        <div className="brand">
          <img className="frame" alt="Frame" src="../../assets/frame-2321.png" />
        </div>
        <div className="nav-links">
          <div className="nav-link">
            <div className="nav-label">Features</div>
          </div>
          <div className="nav-link">
            <div className="nav-label">About Me</div>
          </div>
          <div className="div" />
          <button className="button">
            <div className="text-container">
              <button className="CTA">Sign In</button>
            </div>
          </button>
        </div>
      </div>
      <div className="type-simple-title">
        <div className="wrapper">
          <div className="copy-component">
            <div className="heading-text">
              <p className="heading">Welcome to the Ultimate Video Platform Experience</p>
              <p className="subheading">
                In the digital age, video content is everywhere and constantly evolving. Whether for learning,
                entertainment, or discovering new passions, we all need a guide to navigate the vast ocean of available
                online videos. ViewHub is your solution!
              </p>
            </div>
            <div className="CTA-button">
              <div className="CTA-wrapper">
                <button className="text-wrapper">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img className="image-lummi" alt="Image lummi" src="/img/image-lummi.png" />
          </div>
        </div>
      </div>
      <div className="type-two-column-big">
        <div className="mission-image-lummi" />
        <div className="text-content">
          <div className="overlap-group">
            <div className="benefit-heading">ABOUT ME</div>
            <p className="description">
              <span className="span">
                ViewHub is an innovative platform that harnesses the power of artificial intelligence to offer you
                personalized video recommendations{" "}
              </span>
              <span className="text-wrapper-2">based</span>
              <span className="span">
                {" "}
                on your preferences and viewing history. By utilizing the YouTube API and advanced machine learning
                algorithms, we deliver content that truly interests you.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="type-three-feature">
        <div className="content">
          <div className="heading-container">
            <div className="heading-2">Explore Trending Videos</div>
            <div className="subheading-2">Enjoy your streaming</div>
          </div>
          <div className="cards-grid">
            <div className="frame-2">
              <div className="big-card">
                <div className="content-2">
                  <div className="content-container">
                    <div className="text-wrapper-3">Watch&amp; Share</div>
                    <div className="content-3">
                      <div className="heading-3">Discover New Content</div>
                      <div className="text">Comment</div>
                    </div>
                  </div>
                  <button className="button-wrapper">
                    <button className="div-wrapper">
                      <button className="CTA-2">Explore More</button>
                    </button>
                  </button>
                </div>
                <div className="image-lummi-2" />
              </div>
              <div className="content-wrapper">
                <div className="content-4">
                  <div className="content-container-2">
                    <div className="content-3">
                      <div className="heading-3">Sign up to benefit</div>
                      <div className="text">D’ont forget your password.</div>
                    </div>
                  </div>
                  <button className="CTA-3">
                    <button className="div-wrapper">
                      <button className="CTA-2">Your data are secure</button>
                    </button>
                  </button>
                </div>
              </div>
            </div>
            <div className="big-card-2">
              <div className="content-2">
                <div className="content-container">
                  <div className="content-3">
                    <p className="heading-3">Enjoy our personalize recommendation system</p>
                    <div className="text">AI Insight</div>
                  </div>
                </div>
                <button className="button-wrapper">
                  <button className="div-wrapper">
                    <button className="CTA-2">{""}</button>
                  </button>
                </button>
              </div>
              <img className="img" alt="Image lummi" src="/img/image-lummi-2.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="property-image">
        <img className="image-lummi-3" alt="Image lummi" src="/img/image-lummi-3.png" />
        <div className="copy-component-2">
          <div className="heading-container-2">
            <div className="sign-up-heading">Join Now</div>
            <div className="subheading-3">Create Your Free Account!</div>
          </div>
          <a className="google-login" href="https://myaccount.google.com/" rel="noopener noreferrer" target="_blank">
            <img className="google-icon" alt="Google icon" src="/img/google-icon.svg" />
            <div className="text-wrapper-4">Continue with Google</div>
          </a>
          <div className="separator">
            <div className="line" />
            <div className="text-wrapper-5">or</div>
            <div className="line" />
          </div>
          <div className="form">
            <div className="input">
              <div className="text-wrapper-3">Email Address</div>
              <div className="input-form">
                <div className="placeholder-text-wrapper">
                  <div className="placeholder-text">Enter Email</div>
                </div>
              </div>
            </div>
            <button className="text-container-wrapper">
              <div className="text-container-2">
                <button className="CTA-4">Continue with Email</button>
              </div>
            </button>
          </div>
          <p className="by-continuing-you">By signing up, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
      <div className="type-centered-footer">
        <img className="frame" alt="Frame" src="/img/frame-2321-1.png" />
        <div className="content-5">
          <div className="social-links" />
          <div className="links">
            <div className="link">About Me</div>
            <div className="link">Features</div>
            <div className="link">LinkedIn</div>
          </div>
          <img className="social-links" alt="Social links" src="/img/social-links.svg" />
        </div>
        <div className="credits">
          <div className="divider" />
          <div className="div-2">
            <p className="text-wrapper-6">2024 ViewHub. All rights reserved.</p>
            <div className="div-2">
              <div className="text-wrapper-6">Privacy Policy</div>
              <div className="text-wrapper-6">Terms of Service</div>
              <div className="text-wrapper-6">Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;