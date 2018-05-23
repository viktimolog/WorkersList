import React from 'react'
import { ScrollView } from 'react-native'
import { Content } from 'native-base'
import Worker from './Worker'
import PropTypes from 'prop-types'

const Workers = ({
                 workers = [],
                 editWorkerMode = () => {},
                 editWorkerSave = () => {},
                 delWorker = () => {}
               }) => (
  <Content>
    <ScrollView>
      {
        workers.map(worker =>
          <Worker
            worker={worker}
            key={worker.id}            
            delWorker={delWorker}
            editWorkerMode={editWorkerMode}
            editWorkerSave={editWorkerSave}/>)
      }
    </ScrollView>
  </Content>
)

Workers.propTypes = {
  workers: PropTypes.array.isRequired,
  editWorkerMode: PropTypes.func.isRequired,
  editWorkerSave: PropTypes.func.isRequired,
  delWorker: PropTypes.func.isRequired
}

export default Workers;
