import { Stream } from 'stream'
import { v4 as uuid } from 'uuid'
import { Storage } from '@google-cloud/storage'

export const uploadImage = async (image) => {
  const base64EncodedImageString = image.replace(/^data:image\/\w+;base64,/, '')

  const bufferStream = new Stream.PassThrough()
  bufferStream.end(Buffer.from(base64EncodedImageString, 'base64'))

  const GoogleStorage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  })

  const googleCloudBucket = GoogleStorage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME)
  const fileName = `${uuid()}.jpg`
  const uploadedFile = googleCloudBucket.file(fileName)
  return new Promise<string>((resolve, reject) => {
    bufferStream
      .pipe(uploadedFile.createWriteStream())
      .on('error', (err) => {
        reject(err)
      })
      .on('finish', () =>
        resolve(
          `https://storage.googleapis.com/${process.env.GOOGLE_CLOUD_BUCKET_NAME}/${fileName}`,
        ),
      )
  })
}
