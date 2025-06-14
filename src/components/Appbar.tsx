import { Searchbar } from "./Searchbar"

export const Appbar=() =>{
    return <div className="flex justify-between pl-3 pr-3 pt-3">
        <div>
            Youtube
        </div>
        <div>
            <Searchbar/>
        </div>
        <div>
            Sign In
        </div>
    </div>
}