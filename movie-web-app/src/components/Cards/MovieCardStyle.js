import styled from "styled-components";
import {  Typography, CircularProgress } from "@material-ui/core";
import { ReactComponent as Icon } from "./../../assets/heart-remove.svg"
import { ReactComponent as watchedIcon } from "./../../assets/eye-minus.svg"
import { Link } from "react-router-dom";


export const MovieCardWrapper = styled.div`
position:relative;
    width:85%;
    min-height:180px;
    max-height:220px;
    background-color:#3e3e3e;
    border-radius:15px;
    box-shadow:none;
    display:flex;
    flex-direction:row;
    margin-bottom:30px;
    &:hover
    {
        box-shadow:1px 2px 9px  #c0d3e0;
    }
`

export const ImageCard = styled.img`
min-height:180px;
max-height:220px;
border-radius:15px 0 0 15px;
width:100%;

`

export const CardInfo = styled.div`
display:flex;
flex-direction:column;
`

export const MovieHighlightWrapper = styled.div`
padding-left:25px;
padding-top:10px;
display:flex;
flex-direction:row;
`
export const MovieNameWrapper = styled.div`
display:flex;
flex-direction:column;
margin-left:15px;
`
export const CardMovieName = styled(Typography)`
color:white;
font-size:16px;
font-family: 'Source Sans Pro', sans-serif !important;
&:hover
{
    color:black;
}
`

export const CardMovieDate = styled(Typography)`
    color:black;
    font-size:10px;
    font-family: 'Source Sans Pro', sans-serif !important;
    `


export const RatingCircle = styled(CircularProgress)`
    color:green!important;
    background-color:black;
    border-radius:50%;
    width:50px!important;
    height:50px!important;
`

export const RatingWrapper = styled.div`
    position:relative;
    top:8px;
    display:flex;
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;

`

export const RatingNumber = styled.span`
    position:absolute;
    font-size:14px;
    font-weight:900;
    color:white;

    z-index:2;
`

export const MovieDescriptionText = styled(Typography)
    `
    width:95%;
    padding-left:25px;
    padding-top:15px;
    color:white;
    font-family: 'Source Sans Pro', sans-serif !important;
    height:90px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover
    {
        color:black;
    }
    `


export const IconWrapper = styled.div`
    position:absolute;
    right:20px;
    top:20px;
    `
export const FavoriteRemoveIcon = styled(Icon)
    `
    fill: white;
    height: 35px;
    &:hover
    {
        fill:#803bec;
    }

`
export const WatchedIcon = styled(watchedIcon)
    `
    fill: white;
    height: 40px;
    &:hover
    {
        fill:#803bec;
    }

`
export const ImageLink = styled(Link)
`
min-height:200px;
max-height:230px;
min-width:150px;
max-width:220px
display:flex;
`