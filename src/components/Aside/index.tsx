import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

export const Aside = () => {

    const [show, setShow] = useState(<FontAwesomeIcon icon={faLeftLong} />);
    const [asideView, setAsideView] = useState(true);

    const toggleShow = () => {
        if (asideView === true) {
            setShow(<FontAwesomeIcon icon={faRightLong} />);
            setAsideView(false);
        } else {
            setShow(<FontAwesomeIcon icon={faLeftLong} />);
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
                <ul>
                    <li><span className='aside-icon'></span> {asideView && 'Speed'}</li>
                    <li><span className='aside-icon'></span> {asideView && 'Capacity'}</li>
                    <li><span className='aside-icon'></span> {asideView && 'Valume'}</li>
                </ul>
        </aside>
    )
}