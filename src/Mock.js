import { Grid } from 'components/Grid'
import { Card } from 'components/Card'
import { CardBody } from 'components/CardBody'
import { DropZone } from './DropZone'
import { CardTitle } from 'components/CardTitle'
import { CardText } from 'components/CardText'
import { Files } from 'components/Files'
import { File } from 'components/File'
import { Accepted } from './components/Accepted'
import { Rejected } from 'components/Rejected'
import { accounts } from 'accounts'
import { CSVWarning } from './CSVWarning'

const _files = [
  { name: '1234.Everest1234_Activity_20210503.csv', accepted: true },
  { name: '4567.Rainier.From 2_1_2021 To 4_30_2021.txt', accepted: false },
  {
    name: '8910.Everest8910_Activity20210201_20210430_20210503.csv',
    accepted: true
  }
]

export const Mock = () => {
  return (
    <Grid>
      {accounts.map((a) => (
        <Card>
          <CardBody>
            <DropZone>
              <CardTitle>The account name</CardTitle>
              <CardText>Only CSV files are accepted.</CardText>
            </DropZone>
            <Files>
              {_files.map((file) => (
                <File
                  checkOrX={file.accepted ? 'check' : 'x'}
                  fileName={file.name}
                />
              ))}
            </Files>
            <CSVWarning />
          </CardBody>
        </Card>
      ))}
    </Grid>
  )
}
