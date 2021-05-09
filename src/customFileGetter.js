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
    value: ext === "csv" ? true : false,
  });
  return file;
};

/**
 *
 * @param {event} event fileDrop event
 * @returns {Array} array of accepted files
 */
export async function customFileGetter(event) {
  console.log("event", event);
  const fileList = event.dataTransfer
    ? event.dataTransfer.files
    : event.target.files;
  // console.log('fileList', fileList)
  return R.map(updateAcceptProp, fileList);
}
