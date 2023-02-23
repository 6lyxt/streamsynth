import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface ISeoPageProps { }

const SeoPage: React.FunctionComponent<ISeoPageProps> = (props) => {
    const [message, setMessage] = useState('')
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage(`You are viewing the page for number ${number}`);
        } else {
            setMessage('No number');
        }
    }, []); 

    return (
        <main>
            <h1>Seo</h1>
            <p>{message}</p>
        </main>
    );
};

export default SeoPage;