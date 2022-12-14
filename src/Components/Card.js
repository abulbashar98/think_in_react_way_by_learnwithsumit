import React from 'react';
import nerdImage from '../Assets/Images/illustration.png'
import Button from './Button';
import Content from './Content';
// import Image from './Image';
// import Tag from './Tag';
import { CardContainer, ContentContainer, ButtonsContainer } from './Styles/Container.styles';
import { Tag, H1, P, Image } from './Styles/Elements.styles'
import Title from './Title';
import { StyledTitle } from './Styles/Custom.styles';

const Card = () => {
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
        </CardContainer>
    );
};

export default Card;