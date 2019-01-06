import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'April design challenge',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2745b64395233.5ad0a38667825.jpg',
  },
  {
    label: 'Second render challenge',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/40786564395233.5ad0a38665840.jpg',
  },
  {
    label: 'Use of multiple render programs',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/af703764395233.5ad0a386671be.jpg',
  },
  {
    label: 'Jean render',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c82ff064395233.5ad0a38665f8c.jpg',
  },
  {
    label: 'Gaudi like structure',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae172664395233.5ad22fa0d6529.jpg',
  },
];

const styles = theme => ({
  root: {
    maxWidth: "100%",
    background: 'white',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: "100%",
    paddingLeft: theme.spacing.unit * 4,
    background: 'white)',
  },
  img: {
    height: "auto",
    maxWidth: "100%",
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  mobileStepper: {
    background: 'white',
  },
});

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
