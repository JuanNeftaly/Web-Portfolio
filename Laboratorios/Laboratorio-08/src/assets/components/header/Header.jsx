// librerias
import nasaLogo from "../../img/nasa.webp";
import Navigation from "./navigation/Navigation";
import {NavLink} from "react-router-dom";
import "./Header.css";

// funcion
function Header() {
  return (
    <div className="container">
      <div className="header__wrapper">
        <NavLink to="/">
          <h1 className="header__title">
            <abbr title="Astronomy Picture of the Day">APOD</abbr>
          </h1>
        </NavLink>
        <a
          href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3456178-ab60-492f-bcdf-00f062f9ade3/df5nlp9-1177ffca-ac06-4c26-a18f-686f127f4540.jpg/v1/fit/w_777,h_1100,q_70,strp/naughty_rias_gremory_by_axsens_df5nlp9-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwMCIsInBhdGgiOiJcL2ZcL2QzNDU2MTc4LWFiNjAtNDkyZi1iY2RmLTAwZjA2MmY5YWRlM1wvZGY1bmxwOS0xMTc3ZmZjYS1hYzA2LTRjMjYtYTE4Zi02ODZmMTI3ZjQ1NDAuanBnIiwid2lkdGgiOiI8PTc3NyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5s2oPpkpWoangn4U53_qO8guGAOUSKCcSncBT9Zg7j0"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img alt="NASA" src={nasaLogo} className="header__logo" />
        </a>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
