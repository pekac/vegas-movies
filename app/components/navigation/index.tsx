import NavLink from "@components/navigation-link";

import { ROUTES } from "@constants/routes";

function Navigation() {
  return (
    <div>
      <nav className="flex">
        {ROUTES.map((link) => (
          <NavLink key={link.path} link={link} />
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
