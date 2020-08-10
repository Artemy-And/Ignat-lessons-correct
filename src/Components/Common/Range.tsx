import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { ArrowForward} from "@material-ui/icons";


const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
});
console.log('RANGE')
type sliderType ={
    value:number|string,
    minValue:number
    maxValue:number
    onChange:(event:any, newValue:any)=>void
    handleInputChange:(event:any)=>void
    handleBlur:()=>void

}

export const Range=React.memo((props:sliderType)=>{

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Slider
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <ArrowForward />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof props.value === 'number' ? props.value : 0}
                        onChange={props.onChange}
                        aria-labelledby="input-slider"
                        max={props.maxValue}
                        min={props.minValue}
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={props.value}
                        margin="dense"
                        onChange={props.handleInputChange}
                        onBlur={props.handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
})


// - сделайте и добавьте в папку common универсальную компоненту <Range/> (ползунок, например для изменения громкости) с красивыми стилями
// - компонента должна принимать minValue, maxValue, value и onChange
// - используйте React.memo и useCallback
