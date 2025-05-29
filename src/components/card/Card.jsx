import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import MuiCard from "@mui/material/Card";
export default function DsaCard() {
    const theme = useTheme();

    return (
        <MuiCard sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                        Codeforces
                    </Typography>
                </CardContent>
                <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1  }}
                >
                    <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                            <SkipNextIcon />
                        ) : (
                            <SkipPreviousIcon />
                        )}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38  }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                            <SkipPreviousIcon />
                        ) : (
                            <SkipNextIcon />
                        )}
                    </IconButton>
                </Box>
            </Box>
        </MuiCard>
    );
}
