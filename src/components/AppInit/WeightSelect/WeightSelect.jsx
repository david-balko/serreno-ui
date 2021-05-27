import { makeStyles, TextField, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { NextButton } from "../NextButton";
import { Numbers } from "./Numbers";

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
  inputField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    '& > *': {
      marginLeft: theme.spacing(),
      marginRight: theme.spacing(),
    }
  }
}), { name: 'appInit'})

export const WeightSelect = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const next = () => {

    AppStore.setAppInitStage('params')
  }

  const classes = useStyles()

  return (
      <div className={classes.bedSelectContainer} >
        <Typography variant="h5">
          {`Please enter patient weight`}
        </Typography>
        <div className={classes.inputField}>
          <TextField type="number" inputProps={{min: 0, style: { textAlign: 'center' }}} />
          <Typography>
            {`kg`}
          </Typography>
        </div>
        <Numbers />
        
        <NextButton onClick={next} />
      </div>
  )
}))
