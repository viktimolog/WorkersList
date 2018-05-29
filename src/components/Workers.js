import React from 'react'
import { ScrollView } from 'react-native'
import { Content } from 'native-base'
import Worker from './Worker'
import PropTypes from 'prop-types'

const Workers = ({
  workers = [],
  getWorkers = () => { },
  editWorker = () => { },
  delWorker = () => { }
}) => (
    <Content>
      <ScrollView>
        {
          workers.map(worker =>
            <Worker
              worker={worker}
              key={worker._id}
              getWorkers={getWorkers}
              delWorker={delWorker}
              editWorker={editWorker} />)
        }
      </ScrollView>
    </Content>
  )

Workers.propTypes = {
  workers: PropTypes.array.isRequired,
  editWorker: PropTypes.func.isRequired,
  delWorker: PropTypes.func.isRequired,
  getWorkers: PropTypes.func.isRequired
}

export default Workers;
