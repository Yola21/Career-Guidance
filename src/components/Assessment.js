import React, { useState } from 'react'
import './Assessment.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Questions from '../utils/Questions.json';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
  
function getSteps() {
    return ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
} 

export default function Assessment() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [value, setValue] = useState('a');
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    return (
        <div className="assessment">
             <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            {
                Questions.map((que, index) => (
                    <Paper
                        elevation={3}
                        className="assessment_Paper"
                    >
                        <div>
                            <h3><span>{`${index + 1})`}</span> {que.question}</h3>
                            <hr />
                            <div className="assessment_Options">
                            <FormControl component="fieldset">
                                <RadioGroup className="assessment_RadioGroup" aria-label="options" name="option" value={value} onChange={handleChange}>
                                    <FormControlLabel value="totally agree" control={<Radio />} label="Totally Agree" />
                                    <FormControlLabel value="agree" control={<Radio />} label="Agree" />
                                    <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
                                    <FormControlLabel value="disagree" control={<Radio />} label="Disagree" />
                                    <FormControlLabel value="totally disagree" control={<Radio />} label="Totally Disagree" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                        </div>
                    </Paper>
                ))
            }
            <div>
                {activeStep === steps.length ? (
                <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                ) : (
                <div>
                    <div className="assessment_Buttons">
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
