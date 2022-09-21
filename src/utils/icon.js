import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function icon(status) {
    if (status.toLowerCase() === "clouds") return <FontAwesomeIcon className="icon" icon="fa-solid fa-cloud" />
    if (status.toLowerCase() === "rain") return <FontAwesomeIcon className="icon" icon="fa-solid fa-cloud-rain" />;
    if (status.toLowerCase() === "clear") return <FontAwesomeIcon className="icon" icon="fa-solid fa-sun" />;
    if (status.toLowerCase() === "snow") return <FontAwesomeIcon icon="fa-solid fa-snowflake" />;
    if (status.toLowerCase() === "thunderstorm") return <FontAwesomeIcon icon="fa-solid fa-cloud-bolt" />;
    return <FontAwesomeIcon className="icon" icon="fa-solid fa-cloud" />;
} 