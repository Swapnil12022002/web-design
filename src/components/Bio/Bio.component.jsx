import "./Bio.styles.scss";
import BioImage from "../../Assets/bio-image.jpg";

function Bio() {
  return (
    <div id="#about" className="Bio">
      <div className="Bio-1">
        <img src={BioImage} alt="Bio-img" />
      </div>
      <div className="Bio-2">
        <p className="Bio-header">I am a freelance designer and developer.</p>
        <p>
          Hi there! I'm a freelance design and developer with 2 years of
          experience. As a creative professional, I'm passionate about designing
          and building beautiful, user-friendly websites and applications that
          help businesses succeed online. Whether you need a new website from
          scratch or want to redesign your existing site, I'm here to help. My
          design philosophy is simple: I believe that good design is not just
          about aesthetics, but also about usability, accessibility, and user
          experience. That's why I take a user-centered approach to all of my
          design projects, working closely with clients to understand their
          goals and objectives, and creating solutions that meet their needs. In
          addition to design, I'm also an experienced front-end developer,
          proficient in HTML, CSS, JavaScript, and other web technologies. This
          allows me to bring designs to life and create dynamic, interactive
          experiences that engage and delight users. If you're looking for a
          creative partner who can help you elevate your online presence and
          achieve your business goals, look no further. Let's work together to
          bring your vision to life!
        </p>
      </div>
    </div>
  );
}
export default Bio;
