import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"


export const Select = ({ options, defaultValue }) => {

    const [value, setValue] = useState(defaultValue);
    const [dropdown, setDropdown] = useState(false);

    const chooseValue = (index) => {
        setValue(index.target.innerText);
        toggleDropdown();
    }

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className="select-wrapper">
            <div className="select-field" onClick={toggleDropdown}>
                {value} <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {dropdown && 
                <div className="dropdown-wrapper">
                    {options.map((drpodownItem, index) => (
                        <p key={index} onClick={chooseValue}>{drpodownItem}</p>
                    ))}
                </div>
            }
        </div>
    )
}