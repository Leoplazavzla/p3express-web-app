import CompanyNamesDropdown from "../components/dropdowns/CompanyNamesDropdown";
import {useState} from "react";

const TestPage = () => {

    const [value, setValue] = useState();

    const submitTest = (e) => {
        e.preventDefault();
        setValue(e.target.value)
        console.log(value)

    }

    return(
        <div>
            <CompanyNamesDropdown />
            <button onClick={(e) => submitTest(e)}>Send Test</button>
        </div>
    )

}

export default TestPage;