// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;

  background-color: #161625;
`
export const Container = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`
export const WebsiteLogo = styled.img`
  height: 55px;
  width: 55px;
`
export const HeaderTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #2cc6c6;
  margin-left: 15px;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: normal;
  color: #ffffff;
`
export const FailureViewImg = styled.img`
  width: 60%;
  margin-top: 60px;
`
export const FailureHeading = styled.h1`
  font-family: 'Lobster';
  font-size: 48px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 25px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
