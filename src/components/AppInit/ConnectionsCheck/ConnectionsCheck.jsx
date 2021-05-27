import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  bedSelectContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing()
    }
  },
}), { name: 'appInit'})

export const ConnectionsCheck = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
      <div className={classes.bedSelectContainer} >
        <Typography variant="h5">
          {`Please check the following connections`}
        </Typography>
        
        
      </div>
  )
}))
