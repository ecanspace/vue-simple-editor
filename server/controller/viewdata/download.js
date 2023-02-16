const path = require('path')
const archiver = require('archiver')
// const fse = require('fs-extra')

const modelDirPath = path.resolve(process.cwd(), 'model', 'viewdata', 'sheet')
const viewsDirPath = path.resolve(process.cwd(), 'views')
// const outputTarPath = path.resolve(process.cwd(), 'resource.zip')

module.exports = function downloadHandler(req, res, next) {
  // const output = fse.createWriteStream(outputTarPath)
  const archive = archiver('zip', {
    zlib: { level: 9 }
  })

  // function responseTarFilesToClient() {
  //   res.status(200).download(outputTarPath, 'resource.zip', (err) => {
  //     if (err) throw err;
  //     fse.remove(outputTarPath)
  //   })
  // }

  // // listen for all archive data to be written
  // // 'close' event is fired only when a file descriptor is involved
  // output.on('close', function () {
  //   console.log('total ' + archive.pointer() + ' bytes')
  //   console.log('archiver has been finalized and the output file descriptor has closed.')
  //   responseTarFilesToClient()
  // })

  // // This event is fired when the data source is drained no matter what was the data source.
  // // It is not part of this library but rather from the NodeJS Stream API.
  // // @see: https://nodejs.org/api/stream.html#stream_event_end
  // output.on('end', function () {
  //   console.log('Data has been drained')
  // })

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      // log warning
      console.log(err)
    } else {
      // throw error
      throw err
    }
  })

  // good practice to catch this error explicitly
  archive.on('error', function (err) {
    throw err
  })

  res.attachment('resource.zip')

  // pipe archive data to the file
  archive.pipe(res)

  // append files from a sub-directory and naming it `new-subdir` within the archive
  archive.directory(modelDirPath, 'model')
  archive.directory(viewsDirPath, 'pages')

  // finalize the archive (ie we are done appending files but streams have to finish yet)
  // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
  archive.finalize()
}
