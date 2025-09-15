import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandMeta,
  IconMail,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const MainFooter = () => {
  return (
    <>
      <footer className="grid-footer">
        <nav>
          <ul className="flex-row">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pro</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">Year in Review</a>
            </li>
            <li>
              <a href="#">Gifts</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="social-icons">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/bornsrss/"
          >
            <IconBrandInstagram />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/bornsrss14"
          >
            <IconBrandGithub />
          </a>
          <a href="#">
            <IconBrandTwitter />
          </a>
          <a href="#">
            <IconBrandMeta />
          </a>
          <a href="mailto:contacto@rosfuentes.dev?subject=Hello&body=This%20is%20my%20message">
            <IconMail />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/@bornsrss-dev"
          >
            <IconBrandYoutube />
          </a>
        </div>
        <div>
          <p className="txt-footer-c">
            © mubi: pandasneezing. Made by a fan in Córdoba, Veracruz.
          </p>
          <p className="txt-footer-c">
            Film data from <a href="#">TMDb</a>.<a href="#">Mobile site</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
