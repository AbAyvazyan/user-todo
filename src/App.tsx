import SearchBar from "@components/SearchBar";
import './App.scss'
import './index.scss'
import {useEffect, useState} from "react";
import {IUserData} from "@utils/types.ts";
import {API_URL} from "@utils/env.ts";
import Card from "@components/Card";

const App = () => {
    const [userData, setUserData] = useState<IUserData[]>([])
    const [searchValue,setSearchValue] = useState<string>('')

    useEffect(() => {
        (async () => {
            const response = await fetch(`${API_URL}?term=${searchValue}`)
            setUserData(await response.json())
        })()
    }, [searchValue])
    return (
        <main>
            <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} />
            <section>
                {userData.map((item, i) => {
                    return <Card key={i} {...item}/>
                })}
            </section>
        </main>
    )
}

export default App