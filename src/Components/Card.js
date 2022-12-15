import React from 'react';
import nerdImage from '../Assets/Images/illustration.png'
import Button from './Button';
import Content from './Content';
// import Image from './Image';
// import Tag from './Tag';
import { CardContainer, ContentContainer, ButtonsContainer, switchContainer, SwitchContainer } from './Styles/Container.styles';
import { Tag, H1, P, Image } from './Styles/Elements.styles'
import Title from './Title';
import { StyledTitle } from './Styles/Custom.styles';
import '../Assets/CSS/switch.css'
import { useContext } from 'react';
import { toggleContext } from '../App';
import { useTheme } from 'styled-components';
import Input from './Input';


const Card = () => {

    const { isDarkTheme, toggleTheme } = useContext(toggleContext);
    const theme = useTheme();

    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>

                {/* <H1>
                    <Title text="React Styled Components"></Title>
                </H1> */}
                <H1>
                    <StyledTitle text="React Styled Components" color="cyan"></StyledTitle>
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.
                </P>
                <ButtonsContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonsContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
            <SwitchContainer>
                <label className='toggle-switch'>
                    <Input type="checkbox" checked={isDarkTheme} onChange={toggleTheme}></Input>
                    <span className='switch' />
                </label>
            </SwitchContainer>
        </CardContainer>

    );
};

export default Card;