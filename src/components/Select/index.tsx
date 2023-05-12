import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"


interface SelectProps {
    options: string[];
    defaultValue: string;
}

export const Select = ({ options, defaultValue } : SelectProps) => {

    const [value, setValue] = useState(defaultValue || null);
    const [dropdown, setDropdown] = useState(false);

  const chooseValue = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const selectedValue = event.currentTarget.textContent;
    setValue(selectedValue);
    toggleDropdown();
  };

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