import * as R from "ramda";
/**
 *
 * @param {object} file a File object
 * @returns {object} a File object
 */
const updateAcceptProp = (file) => {
  // console.log("file", file);
  const filename = file.name;
  const ext = filename.substr(filename.lastIndexOf(".") + 1);

  Object.defineProperty(file, "accept", {
    value: ext.toUpperCase() === "CSV" ? true : false,
  });
  return file;
};

/**
 *
 * @param {event} event fileDrop event
 * @param {string} acctId the account id the files were added to
 * @returns {Array} array of accepted files
 */
export async function customFileGetter(event, acctId) {
  // console.log("event", event.target);
  // console.log("acctId", acctId);

  const updateAcctIdProp = (file) => {
    Object.defineProperty(file, "acctId", {
      value: acctId,
    });
    return file;
  };

  const addProps = R.pipe(updateAcceptProp, updateAcctIdProp);

  const fileList = event.dataTransfer
    ? event.dataTransfer.files
    : event.target.files;
  console.log("fileList", fileList);
  return R.map(addProps)(fileList);

  // return R.map(R.pipe(updateAcceptProp, updateAcctIdProp), fileList);
}
