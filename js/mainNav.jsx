{/* Navigation bar */}
<div className="nav">
  {/* Nav logo */}
  <div className="nav__logo nav--button"><img src="images/logo.jpg"></div>

  {/* Nav home button */}
  <div className="nav__home-btn nav--button" view-path="profilePage" navbutton><img src="images/home-btn.jpg"></div>

  {/* Nav friends button */}
  <div className="nav__friends-btn nav--button">
    <img src="images/friends-btn.jpg">
    <div className="nav__items-pending-count">10</div>
  </div>
  {/* Nav notifications button */}
  <div className="nav__notifications-btn nav--button">
    <img src="images/notifications-btn.jpg">
    <div className="nav__items-pending-count is-hidden"></div>
  </div>
  {/* Nav additional options */}
  <div className="nav__additional-options-btn nav--button">
    <img src="images/nav-btn.jpg">
  </div>
</div>