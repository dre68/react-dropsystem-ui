import React from 'react';
import CopyButton from '../CopyButton/CopyButton';
import { TextField } from '@mui/material';

const CopyBox = ({ label, copyContent, iconColor }) => {

    return (
        <div style={{marginBottom: '1rem'}}>
            <TextField  
                label={label}
                variant='standard'
                value={copyContent}
                fullWidth                
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: true, endAdornment: <CopyButton copyContent={copyContent} iconColor={iconColor}/> }}
            />              
        </div>
    )
}

export default CopyBox