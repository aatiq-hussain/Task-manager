import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 8,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    paddingTop:'20px',
    paddingBottom:'20px',
  },
  heading: {
    color: 'rgb(86,40,255)',
    // paddingLeft: '70px',
    // paddingRight: '90px',
    
  },
  trust: {
    justifyContent: 'right',
    marginRight: '20px',
  },
  trusted: {
    justifyContent: 'right',
    marginRight: '450px',
    marginLeft: '20px',
  },
}));
