import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './Guide.module.css';
import feather from 'feather-icons';
import NavButton from "./_components/NavButton";

export interface IGuideComponentProps { }

const GuideComponent: React.FunctionComponent<IGuideComponentProps> = (props) => {
    React.useEffect(() => {
        feather.replace();
    }, []);
    
    return (
        <div className={styles.guide}>
            <h1>rostig</h1>
            <nav>
                <ul>
                    <NavButton to="/"><i data-feather="grid"></i>Dashboard</NavButton>
                    <NavButton to="/pages"><i data-feather="layout"></i>Pages</NavButton>
                    <NavButton to="/files"><i data-feather="file"></i>Files</NavButton>
                    <NavButton to="/seo"><i data-feather="search"></i>Seo</NavButton>
                </ul>
            </nav>
            <nav>
                <ul>
                    <NavButton to="/settings"><i data-feather="settings"></i>Settings</NavButton>
                    {/* <NavButton to="/logut"><i data-feather="log-out"></i>Log Out</NavButton> */}
                </ul>
            </nav>
        </div>
    );
};

export default GuideComponent;