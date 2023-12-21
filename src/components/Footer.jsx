import { clear } from "@testing-library/user-event/dist/clear";

const Footer = () => {
  return (
    <>
      <div className="footer_spacer"></div>
      <div className="footer">
        <div className="footer_content">
          <div className="rule"></div>
          <div className="footer_logo_steam">
            <img
              src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png"
              alt="Valve Software"
              border="0"
            />
          </div>
          <div className="footer_logo">
            <a href="http://www.valvesoftware.com">
              <img
                src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png"
                alt="Valve Software"
                border="0"
              />
            </a>
          </div>
          <div className="footer_text">
            <div>
              © 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in
              the US and other countries.
            </div>
            <div>
              VAT included in all prices where applicable.&nbsp;&nbsp;
              <a href="/privacy" target="_blank" rel="">
                Privacy Policy
              </a>
              &nbsp; | &nbsp;
              <a href="/legal" target="_blank" rel="">
                Legal
              </a>
              &nbsp; | &nbsp;
              <a href="/agreement" target="_blank" rel="">
                Steam Subscriber Agreement
              </a>
              &nbsp; | &nbsp;
              <a href="/refunds" target="_blank" rel="">
                Refunds
              </a>
              &nbsp; | &nbsp;
              <a href="/cookies" target="_blank" rel="">
                Cookies
              </a>
            </div>
          </div>
          <div style={{ clear: "left" }}></div>
          <br />
          <div className="rule"></div>
          <div className="valve_links">
            <a href="http://www.valvesoftware.com/about" target="_blank" rel="">
              About Valve
            </a>
            &nbsp; | &nbsp;
            <a href="http://www.valvesoftware.com" target="_blank" rel="">
              Jobs
            </a>
            &nbsp; | &nbsp;
            <a href="/steamworks" target="_blank" rel="">
              Steamworks
            </a>
            &nbsp; | &nbsp;
            <a href="/steamdirect" target="_blank" rel="">
              Steam Distribution
            </a>
            &nbsp; | &nbsp;<a href="/support">Support</a>
            &nbsp; | &nbsp;
            <a href="digitalgiftcards" target="_blank" rel="">
              Gift Cards
            </a>
            &nbsp; | &nbsp;
            <a
              href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Fwww.facebook.com%2FSteam"
              target="_blank"
              rel=" noopener"
            >
              <img src="https://store.akamai.steamstatic.com/public/images/ico/ico_facebook.png" alt="Facebook" /> Steam
            </a>
            &nbsp; | &nbsp;
            <a href="http://twitter.com/steam" target="_blank" rel="">
              <img src="https://store.akamai.steamstatic.com/public/images/ico/ico_twitter.png" alt="X" /> @steam
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
