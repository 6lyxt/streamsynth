import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guide from "./components/Guide/Guide";
import TopNav from "./components/TopNav/TopNav";
import PagesPage from "./pages/Pages";
import DashboardPage from "./pages/Dashboard";
import FilesPage from "./pages/Files";
import SeoPage from "./pages/Seo";
import SettingsPage from "./pages/Settings";

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <TopNav />
            <Guide />
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/pages">
                    <Route index element={<PagesPage />} />
                    <Route path=":number" element={<PagesPage />} />
                </Route>
                <Route path="/files">
                    <Route index element={<FilesPage />} />
                    <Route path=":number" element={<FilesPage />} />
                </Route>
                <Route path="/seo">
                    <Route index element={<SeoPage />} />
                    <Route path=":number" element={<SeoPage />} />
                </Route>
                <Route path="/settings">
                    <Route index element={<SettingsPage />} />
                    <Route path=":number" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;