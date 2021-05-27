import { makeStyles} from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GeneralHeader } from "./GeneralHeader/GeneralHeader";
import { MainHeader } from "./MainHeader/MainHeader";
import { cssConstants } from "../../consts/theme"

const useStyles = makeStyles(theme => ({
  appHeader: {
    backgroundColor: '#efefff',
    height: cssConstants.header.height,
    paddingRight: 31,
    paddingLeft: 31,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '0 1 auto'
  },
  headerDivider: {
    width: 35
  }
}), { name: 'appHeader'})

export const AppHeader = inject()(observer((props) =>  {

  const classes = useStyles()

  let location = useLocation()

  const [ pathname, setPathname] = useState('/')

  // history.listen((location) => { 
    // setPathname(location.pathname) 
  // }) 

  useEffect(() => {
    setPathname(location.pathname) 
  }, [location])

  return (
    <div className={classes.appHeader}>
      {pathname === '/' &&
        <MainHeader />
      }
      <GeneralHeader />
    </div>
  )
}))
