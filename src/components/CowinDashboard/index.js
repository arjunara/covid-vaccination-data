// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  AppContainer,
  Container,
  HeaderContainer,
  WebsiteLogo,
  HeaderTitle,
  Heading,
  FailureViewImg,
  FailureHeading,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstantsList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {cowinData: {}, apiStatus: apiStatusConstantsList.initial}

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    this.setState({
      apiStatus: apiStatusConstantsList.inProgress,
    })
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachDay => ({
          vaccineDate: eachDay.vaccine_date,
          dose1: eachDay.dose_1,
          dose2: eachDay.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(genderType => ({
          gender: genderType.gender,
          count: genderType.count,
        })),
      }
      this.setState({
        cowinData: updatedData,
        apiStatus: apiStatusConstantsList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantsList.failure})
    }
  }

  renderSuccessView = () => {
    const {cowinData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = cowinData
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <LoaderContainer>
      <FailureViewImg
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt=" failure view"
      />
      <FailureHeading>Something Went Wrong</FailureHeading>
    </LoaderContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </LoaderContainer>
  )

  goToSwitchCondition = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstantsList.failure:
        return this.renderFailureView()
      case apiStatusConstantsList.success:
        return this.renderSuccessView()
      case apiStatusConstantsList.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <Container>
          <HeaderContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <HeaderTitle>Co-WIN</HeaderTitle>
          </HeaderContainer>
          <Heading>CoWIN Vaccination in India</Heading>
          {this.goToSwitchCondition()}
        </Container>
      </AppContainer>
    )
  }
}

export default CowinDashboard
