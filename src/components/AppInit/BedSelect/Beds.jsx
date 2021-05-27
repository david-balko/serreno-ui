import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Bed } from "./Bed";

const useStyles = makeStyles(theme => ({
  bedSelect: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '75%',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  beds: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    '& > *': {
      flexBasis: 'calc(100% / 3)',
    }

  }
}), { name: 'appInit'})

const beds = [
  'RA12343',
  'AS12343',
  'RA12343',
  'RA12343',
  'AS12343',
  'RA12343',
  'AS12343',
  'RA12343',
  'AS12343',
  'AS12343',
  'RA12343',
  'AS12343',
]

export const Beds = inject()(observer((props) =>  {

  const [page, setPage] = useState(0)

  const classes = useStyles()

  return (
    <>
      <div className={classes.bedSelect}>
        <IconButton onClick={() => setPage(0)}>
          <ArrowIcon size="large" />
        </IconButton>
        <div className={classes.beds}>
          {beds.slice(page, 6 + page).map(bedNumber => 
            <Bed bedNumber={bedNumber} />
          )}
        </div>
        <IconButton style={{transform: 'rotate(180deg)'}} onClick={() => setPage(1)}>
          <ArrowIcon size="large" />
        </IconButton>
      </div>
      <Typography variant="subtitle2" style={{marginTop: -5}}>
      {`${page + 1}/2`}
      </Typography>
    </>
  )
}))
