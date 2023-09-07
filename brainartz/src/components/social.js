const { faLinkedin, faFacebook, faTiktok } = require("@fortawesome/free-brands-svg-icons");
const { faEnvelope } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

function SocialConnect() {
       const socialLinks = [
              {
                     name: 'Facebook',
                     url: 'https://www.facebook.com/',
                     icon: faFacebook,
              },
              {
                     name: 'Gmail',
                     url: 'https://www.google.com/',
                     icon: faEnvelope,
              },
              {
                     name: 'Tiktok',
                     url: 'https://www.tiktok.com/',
                     icon: faTiktok,
              },
              {
                     name: 'LinkedIn',
                     url: 'https://www.linkedIn.com/',
                     icon: faLinkedin,
              },
       ]


       return (
              <>
              <h4>Connect with us on our social media handles</h4>
                     <div className="social-media">
                            {socialLinks.map((links, index) => (
                                   <a key={index} href={links.url} target='_blank' rel="noopener noreferrer">
                                          <FontAwesomeIcon icon={links.icon} />
                                   </a>
                            ))}
                     </div>
              </>
       )
}
export default SocialConnect;