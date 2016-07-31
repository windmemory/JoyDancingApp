import fs from 'react-native-fs';

export const downloadSingleVideo = (video, progressCallback, beginProgressCallback) => {
  const courseName = video.name.split('-')[0];
  const folderPath = `${fs.DocumentDirectoryPath}/${courseName}`;
  return fs.exists(folderPath)
  .then((exist) => {
    if (!exist) return fs.mkdir(folderPath, false);
  }).then(() => {
    return fs.downloadFile({
      fromUrl: video.highLink,
      toFile: `${folderPath}/${video.name}`,
      progressDivider: 100,
      begin: beginProgressCallback,
      progress: progressCallback,
    });
  }).then((result) => ({
      downloadResult: result,
      filePath: `${folderPath}/${video.name}`,
      videoId: video.videoId,
  }))
}
