import { useState } from 'react';

export const Aside = () => {

    const [show, setShow] = useState('Hide');
    const [asideView, setAsideView] = useState(true);

    const toggleShow = () => {
        if (show === 'Hide') {
            setShow('Show');
            setAsideView(false);
        } else {
            setShow('Hide');
            setAsideView(true);
        }
    }

    return (
        <aside className="aside-wrapper">
            <div className="aside-head">
                <span onClick={toggleShow}>{show}</span>
                {asideView && 
                    <h2 className="aside-title">
                        Themes
                    </h2>
                }
            </div>
            {asideView && 
                <ul>
                    <li>Speed</li>
                    <li>Capacity</li>
                    <li>Valume</li>
                </ul>
            }
        </aside>
    )
}