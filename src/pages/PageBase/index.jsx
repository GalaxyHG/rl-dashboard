import Header from '../../components/Header'
import './PageBase.module.css'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default PageBase