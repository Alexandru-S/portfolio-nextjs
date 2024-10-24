import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  'https://www.linkedin.com/in/alexandrusulea/': {
    name: 'linkedin',
  },
}

export function Navbar() {
  return (
    <aside className="">
      <div className="">
        <nav
          className=""
          id="nav"
        >
          <div className="">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className=""
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
