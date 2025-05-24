  import style from './header.module.css';
  const Header= () => {
  return (
    <header className={style.header}>
      <h1 className={style["navbar-logo"]}>Movie App</h1>
      <nav className={style.navbar}>
        <div className={style["navbar-container"]}>
          <ul className={style["navbar-menu"]}>
            <li><a href="#" className={style["navbar-link"]}>Home</a></li>
            <li><a href="#" className={style["navbar-link"]}>Movies</a></li>
            <li><a href="#" className={style["navbar-link"]}>About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
