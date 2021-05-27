import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { NextButton } from "../NextButton";

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

export const ParamsSelect = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const next = () => {

    AppStore.setAppInitStage('connections')
  }

  const classes = useStyles()

  return (
      <div className={classes.bedSelectContainer}>
        <Typography variant="h5">
          {`Parameters to display`}
        </Typography>
        
        
        <NextButton onClick={next} />
      </div>
  )
}))
