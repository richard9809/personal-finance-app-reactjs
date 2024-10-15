import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="layout">
      <aside>
        <Sidebar />
      </aside>
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout