import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './TopNav.module.css';
import feather from 'feather-icons';

export interface IGuideComponentProps { }

const GuideComponent: React.FunctionComponent<IGuideComponentProps> = (props) => {
    React.useEffect(() => {
        feather.replace();
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    // get the current path and split it into an array
    const path = location.pathname.split('/');
    // remove the first element of the array
    path.shift();

    return (
        <div className={styles.topNav}>
            <div className={styles.pathNavigator}>

                {path.map((item, index) => {
                    if (item === '') {
                        return <span onClick={() => navigate('/')} className={styles.noEvents} key={index}>Dashboard</span>;
                    }
                    if (index === path.length - 1) {
                        return <span onClick={() => navigate(`/${item}`)} className={styles.noEvents} key={index}>{item[0].toUpperCase() + item.slice(1)}</span>
                    } else {
                        return <span onClick={() => navigate(`/${item}`)} key={index}>{item[0].toUpperCase() + item.slice(1)} / </span>
                    }
                })
                }
            </div>
            <div className={styles.userContainer}>
                <span>UserId</span>
                <div className={styles.userIcon}>
                    <i data-feather="user"></i>
                </div>
            </div>
        </div>
    );
};

export default GuideComponent;