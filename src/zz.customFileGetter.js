import * as R from 'ramda'
import { getFileExtension } from 'lib/getFileExtension'
import { getFileBaseName } from 'lib/getFileBaseName'
/**
 *
 * @param {object} file a File object
 * @returns {object} a File object
 */
const addIsCSVExtensionProp = (file) => {
  const filename = file.name
  const ext = filename.substr(filename.lastIndexOf('.') + 1)

  Object.defineProperty(file, 'isCSVExtension', {
    value: ext.toUpperCase() === 'CSV' ? true : false
  })
  return file
}

const addDefinedProperty = (propName, propValue, obj) => {
  Object.defineProperty(obj, 'extension', {
    value: ext.toLowerCase()
  })
  return obj
}

/////////////////////////////////////////////////////////////
const addExtensionProp = (file) => {
  const filename = file.name
  const ext = filename.substr(filename.lastIndexOf('.') + 1)

  return addDefinedProperty('extension', ext, file)
}

const addIsCSVExtensionProp = (name) => {}

const addProps = (acctId, file) => {
  const { name } = file
  // const ext = filename.substr(filename.lastIndexOf('.') + 1)
  const extension = getFileExtension(name)
  const isCSVExtension = extension.toLowerCase() === 'csv'
}

////////////////////////////////////////////////////

/**
 *
 * @param {event} event fileDrop event
 * @param {string} acctId the account id the files were added to
 * @returns {Array} array of accepted files
 */
export async function customFileGetter(event, acctId) {
  const updateAcctIdProp = (file) => {
    Object.defineProperty(file, 'acctId', {
      value: acctId
    })
    return file
  }

  const addProps = R.pipe(updateAcctIdProp, addExtensionProp)

  const fileList = event.dataTransfer
    ? event.dataTransfer.files
    : event.target.files
  return R.map(addProps)(fileList)
}
