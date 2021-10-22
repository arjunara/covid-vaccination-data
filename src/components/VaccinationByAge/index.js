// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {CoverageContainer, CustomHeading} from './styledComponents'

const VaccinationCoverage = props => {
  const {vaccinationByAge} = props

  return (
    <CoverageContainer>
      <CustomHeading>Vaccination by Age</CustomHeading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="70%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            outerRadius="90%"
            dataKey="count"
          >
            <Cell name="18-44" fill=" #2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{paddingTop: 80}}
          />
        </PieChart>
      </ResponsiveContainer>
    </CoverageContainer>
  )
}

export default VaccinationCoverage
