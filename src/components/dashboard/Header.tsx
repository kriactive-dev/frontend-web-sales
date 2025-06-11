import React, { useState } from "react";

const Header: React.FC = () => {
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [notificationsDropdownOpen, setNotificationsDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Funções simulando as chamadas onclick originais
  const layout_change = (mode: string) => {
    console.log("Change layout to:", mode);
    // implementar lógica real
  };

  const layout_change_default = () => {
    console.log("Reset layout to default");
    // implementar lógica real
  };

  return (
    <header className="pc-header">
      <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow">
        {/* Mobile Media Block */}
        <div className="me-auto pc-mob-drp">
          <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
            {/* Menu collapse Icon */}
            <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
              <a href="#" className="pc-head-link ltr:!ml-0 rtl:!mr-0" id="sidebar-hide">
                <i className="ti ti-menu-2" />
              </a>
            </li>
            <li className="pc-h-item pc-sidebar-popup lg:hidden">
              <a href="#" className="pc-head-link ltr:!ml-0 rtl:!mr-0" id="mobile-collapse">
                <i className="ti ti-menu-2 text-2xl leading-none" />
              </a>
            </li>
            <li className="pc-h-item max-md:hidden md:inline-flex">
              <form className="form-search relative" onSubmit={e => e.preventDefault()}>
                <i className="search-icon absolute top-[14px] left-[15px]">
                  <svg className="pc-icon w-4 h-4">
                    <use href="#custom-search-normal-1" />
                  </svg>
                </i>
                <input
                  type="search"
                  className="form-control px-2.5 pr-3 pl-10 w-[198px] leading-none"
                  placeholder="Ctrl + K"
                />
              </form>
            </li>
          </ul>
        </div>

        <div className="ms-auto">
          <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
            {/* Theme dropdown */}
            <li className="dropdown pc-h-item relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="pc-head-link dropdown-toggle me-0"
                aria-haspopup="false"
                aria-expanded={themeDropdownOpen}
                type="button"
              >
                <svg className="pc-icon">
                  <use href="#custom-sun-1" />
                </svg>
              </button>
              {themeDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown absolute right-0 mt-2 z-10">
                  <button
                    className="dropdown-item flex items-center gap-2"
                    onClick={() => layout_change("dark")}
                  >
                    <svg className="pc-icon w-[18px] h-[18px]">
                      <use href="#custom-moon" />
                    </svg>
                    <span>Dark</span>
                  </button>
                  <button
                    className="dropdown-item flex items-center gap-2"
                    onClick={() => layout_change("light")}
                  >
                    <svg className="pc-icon w-[18px] h-[18px]">
                      <use href="#custom-sun-1" />
                    </svg>
                    <span>Light</span>
                  </button>
                  <button
                    className="dropdown-item flex items-center gap-2"
                    onClick={layout_change_default}
                  >
                    <svg className="pc-icon w-[18px] h-[18px]">
                      <use href="#custom-setting-2" />
                    </svg>
                    <span>Default</span>
                  </button>
                </div>
              )}
            </li>

            {/* Language dropdown */}
            <li className="dropdown pc-h-item relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="pc-head-link dropdown-toggle me-0"
                aria-haspopup="false"
                aria-expanded={languageDropdownOpen}
                type="button"
              >
                <svg className="pc-icon">
                  <use href="#custom-language" />
                </svg>
              </button>
              {languageDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown lng-dropdown absolute right-0 mt-2 z-10">
                  {[
                    { code: "en", label: "English", note: "(UK)" },
                    { code: "fr", label: "français", note: "(French)" },
                    { code: "ro", label: "Română", note: "(Romanian)" },
                    { code: "cn", label: "中国人", note: "(Chinese)" },
                  ].map(({ code, label, note }) => (
                    <a
                      key={code}
                      href="#!"
                      className="dropdown-item"
                      data-lng={code}
                      onClick={e => e.preventDefault()}
                    >
                      <span>
                        {label} <small>({note})</small>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* Settings dropdown */}
            <li className="dropdown pc-h-item relative">
              <button
                onClick={() => setSettingsDropdownOpen(!settingsDropdownOpen)}
                className="pc-head-link dropdown-toggle arrow-none me-0"
                aria-haspopup="false"
                aria-expanded={settingsDropdownOpen}
                type="button"
              >
                <svg className="pc-icon">
                  <use href="#custom-setting-2" />
                </svg>
              </button>
              {settingsDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown absolute right-0 mt-2 z-10">
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-user" />
                    <span>My Account</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-settings" />
                    <span>Settings</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-headset" />
                    <span>Support</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-lock" />
                    <span>Lock Screen</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-power" />
                    <span>Logout</span>
                  </a>
                </div>
              )}
            </li>

            {/* Announcement button */}
            <li className="pc-h-item">
              <a
                href="#"
                className="pc-head-link me-0"
                data-pc-toggle="offcanvas"
                data-pc-target="#announcement"
                aria-controls="announcement"
                onClick={e => e.preventDefault()}
              >
                <svg className="pc-icon">
                  <use href="#custom-flash" />
                </svg>
              </a>
            </li>

            {/* Notifications dropdown */}
            <li className="dropdown pc-h-item relative">
              <button
                onClick={() => setNotificationsDropdownOpen(!notificationsDropdownOpen)}
                className="pc-head-link dropdown-toggle me-0 relative"
                aria-haspopup="false"
                aria-expanded={notificationsDropdownOpen}
                type="button"
              >
                <svg className="pc-icon">
                  <use href="#custom-notification" />
                </svg>
                <span className="badge bg-success-500 text-white rounded-full z-10 absolute right-0 top-0">3</span>
              </button>
              {notificationsDropdownOpen && (
                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown p-2 absolute right-0 mt-2 z-10 max-h-[calc(100vh-215px)] overflow-auto">
                  <div className="dropdown-header flex items-center justify-between py-4 px-5">
                    <h5 className="m-0">Notifications</h5>
                    <button
                      onClick={() => setNotificationsDropdownOpen(false)}
                      type="button"
                      aria-label="Close"
                      className="close"
                    >
                      ×
                    </button>
                  </div>
                  <ul className="list-unstyled p-0 m-0">
                    <li className="p-3 border-b border-solid border-gray-300">
                      <a href="#!" className="dropdown-item d-flex gap-3" onClick={e => e.preventDefault()}>
                        <span className="flex-shrink-0">
                          <svg className="pc-icon w-[20px] h-[20px]">
                            <use href="#custom-flash" />
                          </svg>
                        </span>
                        <div>
                          <span className="text-sm">Do you know that you can download the complete design system?</span>
                          <small className="d-block">2 hrs ago</small>
                        </div>
                      </a>
                    </li>
                    <li className="p-3 border-b border-solid border-gray-300">
                      <a href="#!" className="dropdown-item d-flex gap-3" onClick={e => e.preventDefault()}>
                        <span className="flex-shrink-0">
                          <svg className="pc-icon w-[20px] h-[20px]">
                            <use href="#custom-flash" />
                          </svg>
                        </span>
                        <div>
                          <span className="text-sm">Our new Figma design system is available now!</span>
                          <small className="d-block">4 hrs ago</small>
                        </div>
                      </a>
                    </li>
                    <li className="p-3 border-b border-solid border-gray-300">
                      <a href="#!" className="dropdown-item d-flex gap-3" onClick={e => e.preventDefault()}>
                        <span className="flex-shrink-0">
                          <svg className="pc-icon w-[20px] h-[20px]">
                            <use href="#custom-flash" />
                          </svg>
                        </span>
                        <div>
                          <span className="text-sm">Invoice #1234 is paid!</span>
                          <small className="d-block">6 hrs ago</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Profile dropdown */}
            <li className="dropdown pc-h-item relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="pc-head-link dropdown-toggle arrow-none d-flex items-center gap-3"
                aria-haspopup="false"
                aria-expanded={profileDropdownOpen}
                type="button"
              >
                <div className="pc-profile-photo rounded-full w-[40px] h-[40px] overflow-hidden">
                  <img
                    src="assets/images/avatars/avatar-3.jpg"
                    alt="Profile Avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="pc-profile-name">Allen R. Baker</span>
                <svg className="pc-icon w-3 h-3 mt-0.5">
                  <use href="#custom-chevron-down" />
                </svg>
              </button>
              {profileDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown absolute right-0 mt-2 z-10">
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-user" />
                    <span>My Account</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-settings" />
                    <span>Settings</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-headset" />
                    <span>Support</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-lock" />
                    <span>Lock Screen</span>
                  </a>
                  <a href="#!" className="dropdown-item" onClick={e => e.preventDefault()}>
                    <i className="ti ti-power" />
                    <span>Logout</span>
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
