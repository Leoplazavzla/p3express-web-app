import React, {useEffect, useState} from "react";
import { TextField} from "@mui/material";
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import Strings from "../../resources/Strings";
import {getCompanies} from "../../firebase/firebaseFunctions";
import {useDispatch} from "react-redux";
import {getCompanyName} from "../../redux/companiesSlice";

const CompanyNamesDropdown = () => {

    const filter = createFilterOptions();
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [value, setValue] = useState(null)

    useEffect(() => {
        getCompanies().then((res) => setData(res) )
    }, [])

    return(
        <div>
            {data === [] ?
            <div>no data</div>
            :
                <Autocomplete
                    value={value}
                    options={data}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setValue({
                                companyName: newValue
                            });
                            dispatch(getCompanyName(value))
                        } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setValue({
                                companyName: newValue.inputValue
                            });
                            dispatch(getCompanyName(value))
                        } else {
                            setValue(newValue);
                            dispatch(getCompanyName(value))
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                        const { inputValue } = params;

                        // Suggest the creation of a new value
                        const isExisting = options.some((option) => inputValue === option.companyName);
                        if (inputValue !== '' && !isExisting ) {
                            filtered.push({
                                inputValue,
                                companyName: `Add "${inputValue}"`,
                            });
                        }
                        return filtered;
                    }}
                    getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.companyName) {
                        return option.companyName;
                    }
                    // Regular option
                    return option.label;
                    }}
                    clearOnBlur
                    selectOnFocus
                    handleHomeEndKeys
                    filterSelectedOptions
                    renderOption={(props, option) => {
                        return(
                            <li {...props} style={{marginBottom:"3px"}}>
                                {option.companyName}
                            </li>
                        )
                    }}
                    freeSolo
                    renderInput={(params) => {
                        return(
                            <TextField
                                {...params}
                                label={Strings.dropdowns.companyName}
                                variant={"outlined"}
                            />
                        )
                    }}
                />
            }
        </div>
    )
}

export default CompanyNamesDropdown;

