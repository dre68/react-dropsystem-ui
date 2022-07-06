import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CloseIcon from '@mui/icons-material/Close';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Snackbar } from '@mui/material';

const CopyButton = ({ copyContent, iconColor }) => {

    const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

    const showSnackBar = () => {
        setIsSnackbarVisible(true);
    }

    const closeSnackBar = () => {
        setIsSnackbarVisible(false);
    }

    return (
        <>
            <CopyToClipboard text={copyContent} onCopy={showSnackBar}>
                <IconButton style={{color: iconColor}}>
                    <FileCopyIcon />
                </IconButton>
            </CopyToClipboard>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isSnackbarVisible}
                autoHideDuration={2000}
                onClose={closeSnackBar}
                message="Copied to clipboard!"
                action={
                    <React.Fragment>                   
                        <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackBar}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </>
    )
}

export default CopyButton