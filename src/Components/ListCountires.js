/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { getCountries } from '../API/Api'
export default function ListCountires({handleCountryChange}) {
    let [countires, setCountries] = useState([]);
    useEffect(() => {
        async function getCountriesHere() {
            const countries = await getCountries();
            // console.log(countries);
            setCountries(await countries);
        }
        getCountriesHere();
    }, [])
    // console.log(countires)

    return (
        <div style={{marginLeft:'35%',marginBottom:10}}>
            {
                countires.length !== 0 ? (
                    <FormControl>
                        <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                            <option value='Global' 

                            >Country Picker</option>
                            {
                                Object.values(countires).map((d,index) => {
                                    return <option key={index} value={d}>{d}</option>
                                })
                            }
                        </NativeSelect>
                    </FormControl>
                ) : null



            }
        </div>
    )
}
