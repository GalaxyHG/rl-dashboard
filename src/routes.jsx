import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './pages/News'
import PageBase from './pages/PageBase'
import Chassis from './pages/Chassis'
import Pass from './pages/Pass'
import Page404 from './pages/Page404'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <News /> }></Route>
                    <Route path="/chassis" element={ <Chassis /> }></Route>
                    <Route path="/pass" element={ <Pass /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes