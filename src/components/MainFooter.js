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
              <a href="#1">About</a>
            </li>
            <li>
              <a href="#2">Pro</a>
            </li>
            <li>
              <a href="#3">News</a>
            </li>
            <li>
              <a href="#4">Apps</a>
            </li>
            <li>
              <a href="#5">Podcast</a>
            </li>
            <li>
              <a href="#6">Year in Review</a>
            </li>
            <li>
              <a href="#7">Gifts</a>
            </li>
            <li>
              <a href="#8">Help</a>
            </li>
            <li>
              <a href="#9">Terms</a>
            </li>
            <li>
              <a href="#10">API</a>
            </li>
            <li>
              <a href="#11">Contact</a>
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
          <a href="#tw">
            <IconBrandTwitter />
          </a>
          <a href="#met">
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
            Film data from <a href="https://www.themoviedb.org/">TMDb</a>.
            <a href="https://www.themoviedb.org/login?to=read_me&redirect_uri=/docs">
              Mobile site
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
