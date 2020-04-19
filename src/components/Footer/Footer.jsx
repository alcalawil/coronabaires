import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="https://github.com/alcalawil" target="_blank">
                  Portfolio
                </a>
              </li>
              <li>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="Q9HA3PNRPBQ66"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_AR/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/wilfredo-alcala/"
              target="_blank"
            >
              by Wilfredo Alcala
            </a>
            , en casa
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
