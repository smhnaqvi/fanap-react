import React,{useState} from 'react'

export const EntriesContext = React.createContext()

export const EntriesProvider = ({children}) => {
  const [filter,setFilter] = useState({
    date:null,
    category:null,
    user:null
  })

  const [entries,setEntries] = useState([]);
  const value = React.useMemo(() => ({filter,entries,setEntries,setFilter}), [filter,entries]);
  return(
    <EntriesContext.Provider value={value}>
      {children}
    </EntriesContext.Provider>
  )  
}