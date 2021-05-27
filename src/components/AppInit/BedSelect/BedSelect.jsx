import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { NextButton } from "../NextButton";
import { Beds } from "./Beds";

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
  bedSelect: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  enterBed: {
    height: '15%',
    width: '55%',
    backgroundColor: 'rgba(215, 215, 215, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}), { name: 'appInit'})

export const BedSelect = inject('AppStore')(observer((props) =>  {

  const { AppStore } = props

  const next = () => {

    AppStore.setAppInitStage('weight')
  }

  const classes = useStyles()

  return (
      <div className={classes.bedSelectContainer}>
        <Typography variant="h5">
          Please select bed number
        </Typography>
        <Beds />
        <div className={classes.enterBed}>
          <Typography>
            {`Enter another number >`}
          </Typography>
        </div>
        <NextButton onClick={next} />
      </div>
  )
}))
