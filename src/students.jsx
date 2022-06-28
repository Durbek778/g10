import React from "react";
import { Container,  Title, Box, Input, ErrorIN, Icons } from "./studentStyled";


class Student extends React.Component {
    render() {
        return (
            <Container>  
                <Box size='small'>
                     Sma box <Icons.Bed/>
                </Box>
                <Box size='medium'> Medium box<Icons.Bed/></Box>
                <Box size='large'> Large box<Icons.Bed/></Box>
                <Input/>
                <ErrorIN/>
            </Container>
        )
    }
}
// branch sidebar

export default Student         