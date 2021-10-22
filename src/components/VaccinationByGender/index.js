// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {CoverageContainer, CustomHeading} from './styledComponents'

const VaccinationCoverage = props => {
  const {vaccinationByGender} = props

  return (
    <CoverageContainer>
      <CustomHeading>Vaccination by gender</CustomHeading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="70%"
            data={vaccinationByGender}
            startAngle={0}
            endAngle={180}
            innerRadius="50%"
            outerRadius="90%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </CoverageContainer>
  )
}

export default VaccinationCoverage
