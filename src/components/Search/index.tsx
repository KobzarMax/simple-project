import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const Search = () => {
    return (
        <div className="form-group">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search for 308 metrics" />
        </div>
    )
}