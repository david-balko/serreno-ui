import { makeStyles, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  nextButton: {
    height: 90,
    width: 90,
    borderRadius: '50%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: theme.spacing(),
    bottom: 'calc(calc(50vh - 20.5px) - 50px)',
    flexBasis: 'none'
  },
}), { name: 'appInit'})

export const NextButton = inject()(observer((props) =>  {

  const { onClick } = props

  const classes = useStyles()

  return (
    <div onClick={onClick} className={classes.nextButton}>
      <Typography>
        {`Next`}
      </Typography>
    </div>
  )
}))
