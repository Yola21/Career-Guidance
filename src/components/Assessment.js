import React, { useState } from 'react'
import './Assessment.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Questions from '../utils/Questions.json';
import Radio from '@material-ui/core/Radio';
import { Link } from 'react-router-dom';

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
    return ['Section 1', 'Section 2', 'Section 3'];
} 

export default function Assessment() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [value, setValue] = useState({item: 'a'});
    // const [value, setValue] = useState('a');
    const [indexPreValue, setIndexPreValue] = useState(0);
    const [indexNextValue, setIndexNextValue] = useState(8);
    const steps = getSteps();

    // useEffect(() => {
    //     radioOptions();
    // }, [])

    const radioOptions = () => (
        Questions.map((que, index) => (
            index >= indexPreValue && index <= indexNextValue && 
            <Paper
                elevation={3}
                className="assessment_Paper"
            >
                <div>
                    <h3><span>{`${index + 1})`}</span> {que.question}</h3>
                    <hr />
                    <div className="assessment_Options">
                        <div className="assessment_RadioButton">
                            <Radio 
                                checked={value === 'totally agree'}
                                onChange={(e) => handleChange(e, index + 1)}
                                // onChange={handleChange}
                                value="totally agree"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'totally agree' }}
                                className={`${value === 'totally agree'} && "radio_checked"`}
                            />Totally Agree
                        </div>
                        <div className="assessment_RadioButton">
                            <Radio 
                                checked={value === 'agree'}
                                onChange={(e) => handleChange(e, index + 1)}
                                // onChange={handleChange}
                                value="agree"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'agree' }}
                            />Agree
                        </div>
                        <div className="assessment_RadioButton">
                            <Radio 
                                checked={value === 'not sure'}
                                onChange={(e) => handleChange(e, index + 1)}
                                // onChange={handleChange}
                                value="not sure"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'not sure' }}
                            />Not Sure
                        </div>
                        <div className="assessment_RadioButton">
                            <Radio 
                                checked={value === 'disagree'}
                                onChange={(e) => handleChange(e, index + 1)}
                                // onChange={handleChange}
                                value="disagree"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'disagree' }}
                            />Disagree
                        </div>
                        <div className="assessment_RadioButton">
                            <Radio 
                                checked={value === 'totally disagree'}
                                onChange={(e) => handleChange(e, index + 1)}
                                // onChange={handleChange}
                                value="totally disagree"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'totally disagree' }}
                            />Totally Disagree
                        </div>
                    </div>
                </div>
            </Paper>
        ))
    )

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setIndexPreValue((indexNextValue) => indexNextValue += 9)
      setIndexNextValue((indexNextValue) => indexNextValue += 9)
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setIndexPreValue((indexNextValue) => indexNextValue -= 9)
      setIndexNextValue((indexNextValue) => indexNextValue -= 9)
    };
  
    // const handleChange = (e) => {
    //     // console.log("e->>>>", e)
    //     setValue(e.currentTarget.value)
    //     // setValue({[index]: e.currentTarget.value});
    //     console.log(e.currentTarget.value);
    // }

    const handleChange = (e, index) => {
        setValue({ [index]: e.currentTarget.value })
        console.log(e.currentTarget.value)
    }
    
    console.log("Value>>>>>>>>>>>", value)
    return (
        <div className="assessment">
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            {radioOptions()}
            <div>
                <div>
                    <div className="assessment_Buttons">
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        Back
                    </Button>
                    {   
                        activeStep === steps.length - 1 ? (<Link to="/report"><Button variant="contained" color="primary">Finish</Button></Link>) : (<Button variant="contained" color="primary" onClick={handleNext}>Next</Button>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
