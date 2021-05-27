import { makeStyles, } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { Number } from "./Number";
import { ReactComponent as BackButton} from '../../../assets/images/backButton.svg'

const useStyles = makeStyles(theme => ({
  numberSelect: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '50%',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  numbers: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '50%',
    height: '100%',
    '& > *': {
      flexBasis: 'calc(100% / 3)',
    }

  },
  emptyDiv: {
    width: 'calc(100% - 5px)',
    height: 'calc(100% - 5px)',
    margin: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    width: 'calc(100% - 5px)',
    height: 'calc(100% - 5px)',
    margin: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 1)'
  }
}), { name: 'appInit'})

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
]

export const Numbers = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.numbers}>
      {numbers.map(number => 
        <Number number={number} />
      )}
      <div>
        <div className={classes.emptyDiv}>

        </div>
      </div>
      <Number number={0} />
      <div>
        <div className={classes.delete}>
          <BackButton />
        </div>
      </div>
    </div>
  )
}))
